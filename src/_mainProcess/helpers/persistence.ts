export class Persistence {
  readonly name: string;
  private db: IDBDatabase;
  private isPersistent: boolean;
  private isDbCreated: boolean;

  constructor(name = 'VRCASS') {
    this.name = name;

    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persisted().then((isPersistent) => {
        if (!isPersistent) {
          navigator.storage.persist().then((persistent) => {
            this.isPersistent = persistent;
          });
        }
      });
    }

    const request = indexedDB.open(this.name);
    request.onerror = () => {
      this.isDbCreated = false;
    };

    request.onupgradeneeded = () => {
      console.log('upgrade');
      this.db = request.result;

      this.db.createObjectStore('auth', {
        keyPath: 'username',
      });

      this.db.createObjectStore('avatars', {
        autoIncrement: true,
      });

      this.isDbCreated = true;
    };
  }

  setValue(item: Record<string, any>, objectStore: string, key?: string) {
    const objStore = this.db
      .transaction([objectStore], 'readwrite')
      .objectStore(objectStore);
    objStore.put(item, key);
  }

  getValues(query: string, objectStore: string) {
    const request = this.db
      .transaction(objectStore)
      .objectStore(objectStore)
      .get(query);

    request.onsuccess = () => {
      return request.result;
    };
  }
}
