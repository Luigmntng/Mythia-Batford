let handler = async (m, { conn }) => {
  m.reply('Loading....')
  let res = `https://velgrynd.herokuapp.com/api/randomimage/milf?apikey=IchikaKey`
  conn.sendFile(m.chat, res, 'milf.jpg', 'huu suka ama milf', m)
}
handler.help = ['milf']
handler.tags = ['anime']

handler.command = /^(milf)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
