const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('ipcRendererApi', {
  openModal: (channel, data) => {
    ipcRenderer.on(channel, data)
  },
  openImportModal: (channel, data) => {
    ipcRenderer.on(channel, data)
  },
  openOfflineModal: (channel, data) => {
    ipcRenderer.on(channel, data)
  },
  openPreferencesModal: (channel, data) => {
    ipcRenderer.on(channel, data)
  },
  
  
  removeEventListener: (type) => {
    ipcRenderer.removeAllListeners(type);
  }
  // we can also expose variables, not just functions
})






// contextBridge.exposeInMainWorld('ipcRendererApi', {
//   openConnectionModal: () => {
//     ipcRenderer.send('open-connection-modal');
//   },
//   openImportModal: () => {
//     ipcRenderer.send('open-import-modal');
//   },
//   removeEventListener: (type) => {
//     ipcRenderer.removeAllListeners(type);
//   }
// });
