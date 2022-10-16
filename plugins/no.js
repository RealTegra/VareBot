import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `No`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'No',
body: 'No',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu1.jpg"),}}})  
}
handler.command = /^(no)/i
export default handler
