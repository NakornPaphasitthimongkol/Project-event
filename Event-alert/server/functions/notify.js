const request = require('request');
const fs = require('fs')

exports.notifyEvent = (msg) => {
    request({
        uri: 'https://notify-api.line.me/api/notify',
        method: 'POST',
        auth: {
            bearer: 'oKuTrziEx9PWilzztzS5F7ll4F45fzORXzVuKcoA1NI'
        },
        form: {
            message: msg,
        },

    })
}

exports.notifyEvening = (msg, filename) => {
    var filedata = `public/uploads/${filename}`
    request({
        uri: 'https://notify-api.line.me/api/notify',
        method: 'POST',
        auth: {
            bearer: 'oKuTrziEx9PWilzztzS5F7ll4F45fzORXzVuKcoA1NI'
        },
        formData: {
            message: msg,
            imageFile: fs.createReadStream(filedata)
        },

    })
}