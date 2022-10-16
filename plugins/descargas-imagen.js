import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `𝒔𝒄𝒓𝒊𝒗𝒊 𝒄𝒊𝒐̀ 𝒅𝒊 𝒄𝒖𝒊 𝒗𝒖𝒐𝒊 𝒍'𝒊𝒎𝒎𝒂𝒈𝒊𝒏𝒆\n𝒑𝒆𝒓 𝒆𝒔𝒆𝒎𝒑𝒊𝒐:\n*${usedPrefix + command} ragazze minorenni vicino a me*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendHydrated(m.chat, `🎯 𝒓𝒊𝒔𝒖𝒍𝒕𝒂𝒕𝒐: ${text}`, `𝑮𝑶𝑶𝑮𝑳𝑬 | ${wm}`, link, link, '𝒍𝒊𝒏𝒌 ', null, null, [
['𝒏𝒂𝒍𝒕𝒓𝒐', `/imagen ${text}`],
['𝒅𝒂 𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕', `#pinterest ${text}`],
['𝒎𝒆𝒏𝒖 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒐', `.menu`],  
['𝑺𝑬𝑺𝑺𝑶 𝑪𝑶𝑵 𝑽𝑨𝑹𝑬', '.vare'],
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
export default handler
