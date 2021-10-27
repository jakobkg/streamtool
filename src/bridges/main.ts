import {
  ipcRenderer,
  contextBridge,
  shell,
  OpenExternalOptions,
} from "electron";
import { createStoreBindings } from "electron-persist-secure/lib/bindings";

export const electronBridge = {
  quit: (): void => {
    ipcRenderer.send("quit-app");
  },

  minimize: (): void => {
    ipcRenderer.send("minimize-app");
  },

  maximize: (): void => {
    ipcRenderer.send("maximize-app");
  },

  relaunch: (): void => {
    ipcRenderer.send("relaunch-app");
  },

  openUrl: async (
    url: string,
    options?: OpenExternalOptions
  ): Promise<void> => {
    return await shell.openExternal(url, options);
  },

  openPath: async (path: string): Promise<string> => {
    return await shell.openPath(path);
  },

  openDirSelectDialog: async (): Promise<string[]> => {
    return await ipcRenderer.invoke("select-dir"); // eslint-disable-line @typescript-eslint/no-unsafe-return
  },

  saveFile: async (filename: string, contents: string): Promise<boolean> => {
    return await ipcRenderer.invoke("save-file", filename, contents); // eslint-disable-line @typescript-eslint/no-unsafe-return
  },

  getHomeDir: async (): Promise<string> => {
    return await ipcRenderer.invoke("get-homedir"); // eslint-disable-line @typescript-eslint/no-unsafe-return
  }
};

contextBridge.exposeInMainWorld("electron", electronBridge);

export const storeBridge = createStoreBindings("config");

contextBridge.exposeInMainWorld("store", {
  ...storeBridge,
});
