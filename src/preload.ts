import { RecordEntries, WorldRecord } from './types';

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    electronAPI: {
      getWorldById: (worldId: string) => Promise<WorldRecord>;
      getValues: (objectStore: string) => Promise<RecordEntries>;
      setValues: (
        item: RecordEntries,
        objectStore: string,
        key: string
      ) => void;
    };
  }
}

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getWorldById: async (worldId: string) => {
    return await ipcRenderer.invoke('getWorldById', worldId);
  },
  getValues: (objectStore: string) => {
    return ipcRenderer.invoke('getValues', objectStore);
  },
  setValues: (item: RecordEntries, objectStore: string, key: string) => {
    ipcRenderer.send('setValues', item, objectStore, key);
  },
});
