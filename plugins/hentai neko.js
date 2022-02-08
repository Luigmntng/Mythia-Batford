async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, `https://server-api-rey.herokuapp.com/api/nsfw/neko?apikey=apirey`, '', `NOO 4NO`, m)
    
    }
    
    handler.help = ['hentaineko']
    
    handler.tags = ['dewasa']
    
    handler.command = /^(hentaineko)$/i
    
    handler.premium = true
    handler.register = true

    module.exports = handler
