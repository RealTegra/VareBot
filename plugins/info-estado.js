let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './media/menus/Menu1.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
╭═• ೋ•✧『 𝒔𝒕𝒂𝒕𝒐 𝒃𝒐𝒕 』✧•ೋ •═╮

💫 𝒕𝒆𝒎𝒑𝒐 𝒅𝒊 𝒂𝒕𝒕𝒊𝒗𝒊𝒕𝒂̀
✧ ${uptime}

💫 𝒖𝒔𝒆𝒓𝒔 
✧ ${Object.keys(global.db.data.users)length} 

💫 𝒕𝒖𝒕𝒐𝒓𝒊𝒂𝒍 𝒃𝒐𝒕
✧ youtu.be/dQw4w9WgXcQ

╰══• ೋ•✧ 『 🛃 』 ✧•ೋ •══╯`.trim()

conn.sendHydrated(m.chat, estado, ig, picture, 'www.instagram/vare.sossap', '', null, null, [
['sono frocio']
], m,)}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|stato|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
