// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld("danger", {
    startBroadcast: (addr, delay) => {ipcRenderer.send("broadcast", addr, delay)},
    killAll: () => ipcRenderer.send("killAll")
})