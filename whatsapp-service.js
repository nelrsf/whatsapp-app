const WhatsAppWeb = require('baileys') 

const client = new WhatsAppWeb() 

module.exports.conectApi = async(req, res) => {
    client.connect() 
    .then (([user, chats, contacts, unread]) => {
        console.log ("oh hello " + user.name + " (" + user.id + ")")
        console.log ("you have " + unread.length + " unread messages")
        console.log ("you have " + chats.length + " chats")
    })
    .catch (err => console.log("unexpected error: " + err) )
}

module.exports.sendMessage = async (req, res) => {
    options = {
        quoted: null,
        timestamp: new Date()
    }
    client.sendTextMessage(`${req.body.phone}@s.whatsapp.net`, req.body.body, options)
    .then(res.jsonp({mensaje: 'Notificacion enviada'})) 
}
