const { app, BrowserWindow, ipcMain,Menu } = require('electron')
const fs = require('fs');

let mainWindow;

const path = require('path');
const url = require('url');


function createWindow() {
    
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
            width: 800, 
            height: 600, 
            // titleBarOverlay: {
            //     color: '#2f3241',
            //     symbolColor: '#74b1be',
            //     height: 60
            //   }
            webPreferences: {
                preload: path.join(__dirname, 'preload.js')
              }
            
        });

      
//  Menu style code block

// const stylesPath = path.join(__dirname, './navbarstyle.css');
// if (mainWindow) {
//     mainWindow.webContents.insertCSS(
//         fs.readFileSync(stylesPath)
//     );
// }






    const startUrl = url.format({
        pathname: path.join(__dirname, '../build/index.html'),
        protocol: 'file:',
        slashes: true
    });
    mainWindow.loadURL(startUrl);

    // For Local Development to see realtime changes in electron app. Start react application via npm start and comment the above 2 lines beforehand
    // mainWindow.loadURL('http://localhost:3000');
    // mainWindow.webContents.openDevTools();
    
    // ipcMain.on('popup', (_ev, url) => {
    //       new BrowserWindow().loadURL(url);
    //     });
    // mainWindow.on('closed', function () {
    //     mainWindow = null
    // })
}




const menu = Menu.buildFromTemplate(getMenuTemplate());
Menu.setApplicationMenu(menu);


    ipcMain.on('open-connection-modal', () => {
        mainWindow.webContents.send('open-connection-modal');
    });

    ipcMain.on('open-import-modal', () => {
        mainWindow.webContents.send('open-import-modal');
    });
    ipcMain.on('open-offline-modal', () => {
        mainWindow.webContents.send('open-offline-modal');
    });
    ipcMain.on('open-preferences-modal', () => {
        mainWindow.webContents.send('open-preferences-modal');
    });

    

function getMenuTemplate() {
    return [
        {
            label: 'File',
            submenu: [
                {
                    label: 'New connection',
                    accelerator: "CmdOrCtrl+N",
                    click: () => {
                        mainWindow.webContents.send('open-connection-modal');
                    },
                },
                { type: "separator" },
                {
                    label: 'Sign out',
                    click: () => {
                    },
                },
                { type: 'separator' },
                {
                    label:"Rename",
                    click:()=>{

                    },
                },
                {
                    label: 'Delete',
                    click: () => {
                    },
                },
                {
                    label: 'Duplicate',
                    accelerator: "CmdOrCtrl+D",
                    click: () => {
                    },
                },
                {
                    label: 'Properties',
                    click: () => {
                    },
                },
                { type: 'separator' },
                {
                    label: 'Import connections',
                    click: () => {
                     mainWindow.webContents.send('open-import-modal');
                    },
                },
                {
                    label: 'Export connections',
                    click: () => {
                    },
                },
                {
                    label: 'Apply offline license',
                    click: () => {
                        mainWindow.webContents.send('open-offline-modal');
                       },
                },
                { type: 'separator' },
                {
                    label: 'Preferences',
                    click: () => {
                        mainWindow.webContents.send('open-preferences-modal');
                       },
                },
                { type: 'separator' },
                {
                    label: 'Exit',
                    click: () => {
                        app.quit();
                      },
                },
            ],
        },
        {
            label: 'View',
            submenu: [
                {
                    label: 'Icons',
                    click: () => {
                    },
                },
                {
                    label: 'Details',
                    click: () => {
                    },
                },
                { type: 'separator' },
                {
                    label: 'Sort by',
                    click: () => {
                    },
                    submenu:[
                        {
                            label:"Sort by name"
                        },
                        {
                            label:"Sort by last connected"
                        },
                        {
                            label:"Sort by online/offline sine"
                        },
                        {
                            label:"Sort by label"
                        },
                        { type: 'separator' },
                        {
                            label:"Sort by ascending"
                        },
                        {
                            label:"Sort by descending"
                        }
                    ]
                },
                { type: 'separator' },
                {
                    label: 'Filter',
                    click: () => {
                    },
                    submenu:[
                      {
                        label:"No filter"
                      },
                      {
                        label:"Only online devices"
                      },
                      {
                        label:"Only offline devices"
                      }
                    ]
                    
                },

                {
                    label: 'Refresh',
                    click: () => {
                    },
                },
                {
                    label: 'Show sidebar',
                    click: () => {
                    },
                },
                {
                    label: 'Show status bar',
                    click: () => {
                    },
                },
            ],
        },
        {
            label: 'Help',
            submenu: [
                {
                    label: 'RealVNC on the web',
                    click: () => {
                    },
                },
                {
                    label: 'Technical support',
                    click: () => {
                    },
                },
                {
                    label: 'Service status',
                    click: () => {
                    },
                },
                {
                    label: 'Help connecting',
                    click: () => {
                   
                    },
                },
                { type: 'separator' },
                {
                    label: 'About',
                    click: () => {
                    },
                },
            ],
        },
    ];
}




app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});


