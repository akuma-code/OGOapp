const {
    app,
    BrowserWindow,
} = require('electron');
const path = require('path')


function createWindow() {
    const win = new BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
            // preload: "./src/mainPreload.js"
            preload: path.join(__dirname, "src/mainPreload.js")
        },

        icon: path.join(__dirname, 'src/assets', 'icon_1.jpg'),
        title: 'OGO',
    });

    win.setTitle('OGOapp');
    win.loadFile('./public/mainWin.html');
    win.webContents.openDevTools();
}

app.whenReady().then(createWindow);


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});