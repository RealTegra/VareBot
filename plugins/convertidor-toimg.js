import { webp2png } from '../lib/webp2mp4.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `*[❗] 𝒔𝒗𝒆𝒈𝒍𝒊𝒂𝒕𝒊 𝒇𝒓𝒐𝒄𝒊𝒐, 𝒓𝒊𝒔𝒑𝒐𝒏𝒅𝒊 𝒂𝒍𝒍𝒐 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 𝒄𝒐𝒏 𝒊𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix + command}*`
if (!m.quoted) throw notStickerMessage
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', null, m)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['toimg']
export default handler
