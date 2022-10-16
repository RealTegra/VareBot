import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw ` \n𝒑𝒆𝒓 𝒆𝒔𝒆𝒎𝒑𝒊𝒐: \n*${usedPrefix + command} wtf moment 2016` 
const json = await pinterest(text)
await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `𝒆𝒄𝒄𝒐 𝒒𝒖𝒂, 𝒔𝒆𝒔𝒔𝒐 𝒑𝒓𝒊𝒗𝒂𝒕𝒐`.trim(), m)
  
  conn.sendHydrated(m.chat, `𝒓𝒆𝒔𝒖𝒍𝒕𝒂𝒕𝒐 𝒅𝒊: ${text}`, `𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕 | ${wm}`, null, md, '𝒗𝒂𝒓𝒆 𝒃𝒐𝒕', null, null, [
['𝒏𝒆 𝒗𝒐𝒋𝒐 𝒏`𝒂𝒍𝒕𝒓𝒂', `/pinterest ${text}`],
['𝒅𝒂 𝒈𝒐𝒐𝒈𝒍𝒆', `#image ${text}`],
['𝒎𝒆𝒏𝒖 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒐', `.menu`],  
], m)
                    }
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.exp = 25
export default handler
