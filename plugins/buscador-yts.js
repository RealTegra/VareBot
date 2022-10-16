import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw `${mg}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝘾𝘼𝙉𝘼𝙇 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙁 𝘼 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄𝘿𝙀𝙊 𝙊𝙍 𝘾𝙃𝘼𝙉𝙉𝙀𝙇`
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
🏷  𝒕𝒊𝒕𝒐𝒍𝒐:\n*${v.title}*\n\n
🔗  𝒍𝒊𝒏𝒌 « ${v.url} »\n\n
⏳ 𝒅𝒖𝒓𝒂𝒕𝒂: ${v.durationH}\n\n
🗓 𝒅𝒂𝒕𝒂 𝒅𝒊 𝒑𝒖𝒃𝒃𝒍𝒊𝒄𝒂𝒛𝒊𝒐𝒏𝒆:\n ${v.durationH}\n\n
👀 𝒗𝒊𝒆𝒘:\n ${v.view}\n
`.trim()
      case 'channel': return `
✨ 𝒏𝒐𝒎𝒆 𝒄𝒂𝒏𝒂𝒍𝒆:\n*${v.channelName}*\n\n
🔗  𝒍𝒊𝒏𝒌 « ${v.url} »\n\n
👥 𝒊𝒔𝒄𝒓𝒊𝒕𝒕𝒊 ${v.subscriberH}\n\n
🎥 𝒗𝒊𝒅𝒆𝒐 𝒕𝒐𝒕𝒂𝒍𝒊 ${v.videoCount}\n
`.trim()
    }
  }).filter(v => v).join('\n===================================\n')
 await m.reply(teks)
 let info = `\n_*paypal.me/realvare grz grz*_`.trim()
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎', null, null, [
['𝒎𝒆𝒏𝒖 𝒘𝒆𝒃', '#buscarmenu'],
['𝒎𝒆𝒏𝒖 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒐', '.allmenu'],
['𝒑𝒊𝒏𝒈️', '/ping']
], m,)      
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^ytbuscar|yts(earch)?$/i
handler.exp = 70
export default handler
