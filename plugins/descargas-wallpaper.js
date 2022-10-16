import { wallpaper, wallpaperv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Cat*`
const res = await (/2/.test(command) ? wallpaperv2 : wallpaper)(text)
const img = res[Math.floor(Math.random() * res.length)]
let link = img
//conn.sendFile(m.chat, img, 'error.jpg', `*𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴 ${text}*`, m)
  
  conn.sendHydrated(m.chat, `💞 𝒓𝒊𝒔𝒖𝒍𝒕𝒂𝒕𝒐: ${text}`, `𝒔𝒇𝒐𝒏𝒅𝒐 ${wm}`, img, img, '𝒍𝒊𝒏𝒌 ☘️', null, null, [
['𝒑𝒓𝒐𝒔𝒔𝒊𝒎𝒐', `${usedPrefix + command} ${text}`],
['𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕', `#pinterest ${text}`],
['𝒈𝒐𝒐𝒈𝒍𝒆', `#image ${text}`],
], m)
  
}
handler.help = ['', '2'].map(v => 'wallpaper' + v + ' <query>')
handler.tags = ['downloader']
handler.command = /^(wp|wallpaper2?)$/i
handler.exp = 29
export default handler 
