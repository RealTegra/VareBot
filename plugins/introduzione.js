import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `Benvenuti nel bot di amnesia dove tutto diventa più omoessuale e sessoso, fai .menu per vedere i comandi più omosessuali ciao ciao`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'sesso sesso sesso',
body: 'o si o si sesso sesso o si sesso ml ml ml',         
previewType: 1, thumbnail: fs.readFileSync("./media/menus/Menu1.jpg"),}}})  
}
handler.command = /^(introduzione)/i
export default handler
