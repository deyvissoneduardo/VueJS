const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths)
    event.reply('process-subtitles', [ 
        { name: 'you', amount: 258 },
        { name: 'i', amount: 123 },
        { name: 'he', amount: 987 }
    ])
})