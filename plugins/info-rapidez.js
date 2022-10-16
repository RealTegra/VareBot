import fs from 'fs'
function handler(m, { conn }) {
let text = `pong frocetto 🏓`.trim()   
conn.reply(m.chat, text, m, {
})
}
handler.command = /^(ping|speed|velocidad|rapidez|velocity)/i
export default handler