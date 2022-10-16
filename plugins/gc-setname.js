import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗]* 𝒂𝒈𝒈𝒊𝒖𝒏𝒈𝒊 𝒊𝒍 𝒏𝒐𝒎𝒆 𝒅𝒆𝒔𝒊𝒅𝒆𝒓𝒂𝒕𝒐`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗]* 𝒎𝒂𝒔𝒔𝒊𝒎𝒐 25 𝒄𝒂𝒓𝒂𝒕𝒕𝒆𝒓𝒊'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(setname)$/i
handler.group = true
handler.admin = true
export default handler
