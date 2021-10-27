import { ipcMain } from "electron";
import os from "os";

ipcMain.handle("get-homedir", () => {
    return os.homedir();
});