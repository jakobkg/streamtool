import { ipcMain, dialog, BrowserWindow } from 'electron';

ipcMain.handle('select-dir', async () => {
    const result = await dialog.showOpenDialog(BrowserWindow.getAllWindows()[0], { properties: ['openDirectory', 'promptToCreate'] });
    return result.filePaths;
});
