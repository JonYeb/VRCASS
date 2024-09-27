import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type PersistenceContext = {
  ready: boolean;
  db: IDBDatabase;
  setValue: (
    item: Record<string, any>,
    objectStore: string,
    key?: string
  ) => void;
  getValues: (query: string, objectStore: string) => Record<string, any>;
};

const PersistenceContext = createContext<PersistenceContext>({
  db: undefined,
  ready: false,
  setValue(item: Record<string, any>, objectStore: string): void {
    console.log(item);
  },
  getValues(query: string, objectStore: string) {
    return { foo: 'bar' };
  },
});

export const Persistence: FC<React.PropsWithChildren> = ({ children }) => {
  const [isPersistence, setIsPersistence] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);
  const [db, setDb] = useState<IDBDatabase>();

  const value = useMemo(() => {
    function setPersistence() {
      console.log('setting it');
      if (navigator.storage && navigator.storage.persist) {
        navigator.storage.persisted().then((isPersistent) => {
          if (!isPersistent) {
            navigator.storage.persist().then((persistent) => {
              setIsPersistence(persistent);
              if (persistent) {
                console.log(
                  'Storage will not be cleared except by explicit user action'
                );
              } else {
                console.log(
                  'Storage may be cleared by the UA under storage pressure.'
                );
              }
            });
          } else {
            console.log('already set?');
          }
        });
      } else {
        console.log('cant get it');
      }
    }
    setPersistence();

    const request = indexedDB.open('VRCASS');
    request.onerror = () => {
      console.error("Why didn't you allow my web app to use IndexedDB?!");
    };
    request.onsuccess = () => {
      console.log('success');
      setReady(true);
    };
    request.onupgradeneeded = () => {
      console.log('upgrade');
      const db = request.result;
      setDb(db);

      // Create another object store called "names" with the autoIncrement flag set as true.
      db.createObjectStore('auth', {
        keyPath: 'username',
      });

      db.createObjectStore('avatars', {
        autoIncrement: true,
      });
      const objStore = db.createObjectStore('names', { autoIncrement: true });
      const customerData = [
        {
          ssn: '444-44-4444',
          name: 'Bill',
          age: 35,
          email: 'bill@company.com',
        },
        { ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org' },
      ];

      customerData.forEach((customer) => {
        objStore.add(customer);
      });
      setReady(true);
    };

    function setValue(
      item: Record<string, any>,
      objectStore: string,
      key?: string
    ) {
      console.log(item);
      if (!isPersistence) {
        console.warn('no persistence');
        return;
      }
      const objStore = db
        .transaction([objectStore], 'readwrite')
        .objectStore(objectStore);
      objStore.put(item, key);
    }

    async function getValues(query: string, objectStore: string) {
      console.log(query, objectStore);
      const request = db
        .transaction(objectStore)
        .objectStore(objectStore)
        .get(query);

      request.onsuccess = () => {
        return request.result;
      };
    }

    return { setValue, db, ready, getValues };
  }, []);

  return (
    <PersistenceContext.Provider value={value}>
      {children}
    </PersistenceContext.Provider>
  );
};

export const usePersistence = () => useContext(PersistenceContext);
