import { app, BrowserWindow } from "electron";
import isDev from "electron-is-dev";
import Store from "electron-persist-secure/lib/store";

import { obs } from "./bridges/main";

import "./app/ipc/main";
import "./app/ipc/SelectDirectory";
import "./app/ipc/SaveFile";
import "./app/ipc/GetHomeDirectory";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createStores = (): void => {
  new Store({
    configName: "config",
  });
};

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 320,
    width: 1050,
    autoHideMenuBar: true,
    webPreferences: {
      devTools: isDev,
      contextIsolation: true,
      nodeIntegration: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  void mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

app.on("ready", () => {
  createStores();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
