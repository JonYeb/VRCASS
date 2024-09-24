declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    electronAPI: any;
  }
}

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
  getWorldById: async (worldId: string) => {
    return await ipcRenderer.invoke('getWorldById', worldId);
  },
});
