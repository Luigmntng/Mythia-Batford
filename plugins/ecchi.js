let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
     json = (await axios.get('https://meme-api.herokuapp.com/gimme/ecchi')).data
   conn.sendFile(m.chat, json.url, 'ecchi.jpg', json.title, m, false)
}
handler.help = ['ecchi']
handler.tags = ['dewasa']
handler.command = /^ecchi$/i

handler.premium = true
handler.registet = true

module.exports = handler
