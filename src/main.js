const {app, BrowserWindow, Menu, globalShortcut } = require('electron')


app.on('ready', _ => {
  console.log("in ready state")
  globalShortcut.register('CommandOrControl+Q', _ => { app.quit() })
  const name = app.getName()
  const template = [
   {
     label: name,
     submenu: [{
       label: `About ${name}`,
       click: _ => {
         console.log("clicked about from menu")
       }
     }, {
       type: 'separator'
     }, {
       label: `Quit ${name}`,
       click: _ => { app.quit() },
       accelerator: 'CmdOrCtrl+Q'
     }]
   }
  ]
  new BrowserWindow()
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})
