import { RecordEntries } from '../../types';
import Store from 'electron-store';

export class Persistence {
  readonly name: string;
  private store: Store;

  constructor(name = 'VRCASS', encryptionKey?: string) {
    this.name = name;
    this.store = new Store({ name: name, encryptionKey: encryptionKey });
  }

  setValue(item: RecordEntries, objectStore: string, key: string): void {
    let newItems: Array<RecordEntries> = [];
    const oldItems = this.getValues(objectStore);
    if (oldItems && oldItems.length > 0) {
      const index = oldItems.findIndex((element) => {
        element.key = key;
      });
      if (index >= 0) {
        oldItems[index] = item;
      } else {
        oldItems.push(item);
      }
      newItems = oldItems;
    } else {
      newItems.push(item);
    }
    // to get proper types package.json needs type: module and tsconfig needs module node and moduleResolution nodenext but then the rest wont compile anymore I HATE MODERN JS
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.store.set(objectStore, newItems);
  }

  getValues(objectStore: string): Array<RecordEntries> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.store.get(objectStore) as Array<RecordEntries>;
  }
}
