import fs from 'fs'
import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `𝒎𝒆𝒕𝒕𝒊 𝒊𝒍 𝒍𝒊𝒏𝒌 𝒅𝒆𝒍 𝒗𝒊𝒅𝒆𝒐 𝒅𝒊 𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎 𝒑𝒆𝒓 𝒔𝒄𝒂𝒓𝒊𝒄𝒂𝒓𝒍𝒐\n𝒑𝒆𝒓 𝒆𝒔𝒆𝒎𝒑𝒊𝒐:\n*${usedPrefix + command} https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=*`
const results = await instagramdl(args[0])
.catch(async _ => await instagramdlv2(args[0]))
.catch(async _ => await instagramdlv3(args[0]))
.catch(async _ => await instagramdlv4(args[0]))
for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', `🎯 𝒍𝒊𝒏𝒌: ${url}`, m)
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎', null, null, [
['𝒎𝒆𝒏𝒖 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅', '#descargasmenu'],
['𝒎𝒆𝒏𝒖', '.allmenu'],
['𝒗𝒂𝒓𝒆', '.vare']
], m,)
  
} 
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i 
handler.exp = 70
export default handler
