import { instagramStalk } from '@bochilteam/scraper'

let handler= async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `𝒔𝒄𝒓𝒊𝒗𝒊 𝒍'𝒖𝒔𝒆𝒓𝒏𝒂𝒎𝒆 𝒅𝒆𝒍𝒍𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒔𝒂𝒕𝒂\n𝒑𝒆𝒓 𝒆𝒔𝒆𝒎𝒑𝒊𝒐:\n*${usedPrefix + command} vare.sossap*`
const {
username,
name,
description,
followersH,
followingH,
postsH,
} = await instagramStalk(args[0])
m.reply(`╭═•ೋ•✧『𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎』✧•ೋ•═╮

🥀 »  𝒏𝒐𝒎𝒆:
㌌ »  *${name}*

🥀 »  𝒖𝒔𝒆𝒓𝒏𝒂𝒎𝒆:
㌌ »  *${username}*

🥀 »  𝒃𝒊𝒐𝒈𝒓𝒂𝒇𝒊𝒂:
㌌ »  *${description}*

🥀 »  𝒇𝒐𝒍𝒍𝒐𝒘𝒆𝒓:
㌌ »  *${followersH}* 

🥀 »  𝒔𝒆𝒈𝒖𝒊𝒕𝒊:
㌌ » *${followingH}* 

🥀 »  𝒑𝒐𝒔𝒕:
㌌ »  *${postsH}* 

🥀 »  𝒍𝒊𝒏𝒌 𝒑𝒓𝒐𝒇𝒊𝒍𝒐:
㌌ »  *https://instagram.com/${username.replace(/^@/, '')}*

╰═•ೋ•✧ 『 📷 』 ✧•ೋ•══╯`.trim()) 
await conn.sendHydrated(m.chat, info, wm, null, ig, '𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎', null, null, [
['𝒎𝒆𝒏𝒖 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅', '#descargasmenu'],
['𝒎𝒆𝒏𝒖', '.allmenu'],
['𝒗𝒂𝒓𝒆', '.vare']
], m,)  
  
}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk|verig|igver)$/i
handler.exp = 80
export default handler

