import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `si`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'si',
body: 'si, sesso',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu1.jpg"),}}})  
}
handler.command = /^(si)/i
export default handler
