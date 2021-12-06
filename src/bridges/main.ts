import {
  ipcRenderer,
  contextBridge,
  shell,
  OpenExternalOptions,
} from "electron";
import { createStoreBindings } from "electron-persist-secure/lib/bindings";
import OBSWebSocket from "obs-websocket-js";

export const obs = new OBSWebSocket();

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

export const OBSBridge = {
  connect: async (address?: string, password?: string): Promise<void> => {
    return obs.connect({ address: address, password: password })
    .then(() => { return; })
    .catch((err) => {
      console.error("Couldn't connect:", err);
    });
  },

  disconnect: (): void => {
    return obs.disconnect();
  },

  isConnected: async (): Promise<boolean> => {
    return obs.send("GetCurrentScene")
    .then(() => {
      return true;
    })
    .catch(() => {
      return false;
    });
  },

  isLive: async (): Promise<boolean> => {
    return obs.send("GetStreamingStatus")
    .then((response) => {
      return response.streaming;
    }).catch(() => {
      return false;
    });
  },

  getScenes: async (): Promise<string[]> => {
    return obs.send("GetSceneList")
    .then((response) => {
      const returnbuffer: string[] = [];
      response.scenes.forEach((scene) => {
        returnbuffer.push(scene.name);
      });
      return returnbuffer;
    }).catch(() => {
      return [];
    });
  },

  setScene: async (sceneName: string): Promise<void> => {
    return void await obs.send("SetCurrentScene", { "scene-name": sceneName });
  },

  getSceneItems: async (sceneName: string) => {
    return obs.send("GetSceneItemList", { sceneName: sceneName })
    .then((response) => {
      return response.sceneItems;
    }).catch(() => {
      return [];
    });
  },

  getTextSources: async (): Promise<string[]> => {
    return obs.send("GetSourcesList")
    .then((value) => {
      const returnBuffer: string[] = [];
      value.sources.forEach((source) => {
        if (source.typeId.startsWith("text")) {
          returnBuffer.push(source.name);
        }
      })
      return returnBuffer;
    }).catch(() => {
      return [];
    })
  },

  setTextSourceContents: async (sourceName: string, contents: string): Promise<void> => {
    obs.send("SetSourceSettings", {sourceName: sourceName, sourceSettings: {text: contents}});
  }
};

contextBridge.exposeInMainWorld("obs", { ...OBSBridge, });
