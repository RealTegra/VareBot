import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let url = packgirl[Math.floor(Math.random() * packgirl.length)]
conn.sendButton(m.chat, `frocio`, author, url, ['tu sei un meme'], m)
}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme)$/i
export default handler