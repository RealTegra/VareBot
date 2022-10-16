import fs from 'fs'
function handler(m, { conn }) {
let text = `ora sei admin`.trim()   
conn.reply(m.chat, text, m, {
})
}
handler.command = /^(autoadmin)/i
export default handler