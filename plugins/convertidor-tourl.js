import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[❗]* 𝒓𝒊𝒔𝒑𝒐𝒏𝒅𝒊 𝒂𝒅 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒖𝒏𝒂 𝒊𝒎𝒎𝒂𝒈𝒊𝒏𝒆 𝒑𝒆𝒓 𝒄𝒐𝒏𝒗𝒆𝒓𝒕𝒊𝒓𝒆 𝒊𝒏 𝒍𝒊𝒏𝒌'
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`*𝒇𝒂𝒕𝒕𝒐, 𝒕𝒖𝒕𝒕𝒐 𝒕𝒖𝒐 𝒃𝒆𝒊𝒃𝒊* ${link}`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i
export default handler
