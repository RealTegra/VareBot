import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}𝒎𝒆𝒕𝒕𝒊 𝒊𝒍 𝒍𝒊𝒏𝒌 𝒅𝒆𝒍 𝒗𝒊𝒅𝒆𝒐 𝒅𝒊 𝒇𝒂𝒄𝒆𝒃𝒐𝒐𝒌 𝒑𝒆𝒓 𝒔𝒄𝒂𝒓𝒊𝒄𝒂𝒓𝒍𝒐\n𝒑𝒆𝒓 𝒆𝒔𝒆𝒎𝒑𝒊𝒐:\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi*\n`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `🎯 𝒍𝒊𝒏𝒌: ${url}`, m)  
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎', null, null, [
['𝒎𝒆𝒏𝒖 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅', '#descargasmenu'],
['𝒎𝒆𝒏𝒖', '.allmenu'],
['𝒗𝒂𝒓𝒆', '.vare']
], m,)
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.exp = 35
export default handler
