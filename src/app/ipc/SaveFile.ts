import { ipcMain } from 'electron';
import fs from 'fs';

ipcMain.handle('save-file', (_, filename: string, contents: string) => {
    fs.writeFile(filename, contents, (err) => {
        if (err) {
            console.error(err);
            return false;
        } else {
            return true;
        }
    });
});
