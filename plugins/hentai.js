let hmtai = require('hmtai')
let handler = async(m, { conn }) => {
let img = await hmtai.nsfw.hentai()
await conn.sendFile(m.chat, img, '', '', m)


}
handler.help = ['hentai']
handler.tags = ['dewasa']

handler.command = /^(hentai)$/i
handler.owner = false

handler.mods = false
handler.premium = true
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true


module.exports = handler
