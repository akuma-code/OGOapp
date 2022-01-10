const {
    app,
    BrowserWindow
} = require('electron');
const path = require('path');
const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
        nodeIntegration: true,
        enableRemoteModule: true
    },
    icon: path.join(__dirname, 'src', 'assets', 'ok01.png'),
    title: 'OGO App',
});
mainWindow.setTitle('OGO App');

// mainWindow.loadFile(path.join(__dirname, '../path/to/html'));