import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `si al sesso, no al gheismo e comunque sono sempre comunista`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'sesso sesso sesso',
body: 'amnesia bot powered by vare',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu1.jpg"),}}})  
}
handler.command = /^(amnesia)/i
export default handler
