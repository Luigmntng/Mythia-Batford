async function getRandom(url) {
    return Math.floor(Math.random() * url)
    }
    
     let handler  = async (m, { conn }) => {
    
          conn.sendFile(m.chat, (`https://hardianto.xyz/api/anime/random?nsfw=girlSolo&apikey=hardianto`), '', `NOO 4NO`, m)
    
    }
    
    handler.help = ['girlsolo']
    
    handler.tags = ['dewasa']
    
    handler.command = /^(girlsolo)$/i
    
    handler.premium = true
    handler.register = true
    
    module.exports = handler
