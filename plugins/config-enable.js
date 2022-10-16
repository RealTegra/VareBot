let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝗟𝗜𝗦𝗧𝗔 𝗢𝗣𝗭𝗜𝗢𝗡𝗜`,
rows: [
{title: " 𝑾𝑬𝑳𝑪𝑶𝑴𝑬", description: "𝒂𝒕𝒕𝒊𝒗𝒂 𝒐 𝒅𝒊𝒔𝒂𝒕𝒕𝒊𝒗𝒂 𝒊𝒍 𝒃𝒆𝒏𝒗𝒆𝒏𝒖𝒕𝒐 𝒂𝒍 𝒈𝒓𝒖𝒑𝒑𝒐", rowId: `${usedPrefix + command} welcome`},
{title: "𝑶𝑷𝒁𝑰𝑶𝑵𝑬 𝑷𝑬𝑹 𝑺𝑬𝑮𝑨𝑰𝑶𝑳𝑰", description: "𝒐𝒑𝒛𝒊𝒐𝒏𝒆 𝒑𝒆𝒓 𝒄𝒐𝒎𝒂𝒏𝒅𝒊 𝒃𝒐𝒓𝒏𝒐", rowId: `${usedPrefix + command} modohorny`},
{title: "𝑨𝑵𝑻𝑰𝑳𝑰𝑵𝑲", description: "𝒆𝒔𝒑𝒆𝒍𝒍𝒆 𝒄𝒉𝒊 𝒎𝒂𝒏𝒅𝒂 𝒍𝒊𝒏𝒌 𝒛𝒐𝒛𝒛𝒂𝒑", rowId: `${usedPrefix + command} antilink`},   
{title: "𝑨𝑵𝑻𝑰𝑳𝑰𝑵𝑲 2", description: "𝒆𝒔𝒑𝒆𝒍𝒍𝒆 𝒒𝒖𝒂𝒍𝒖𝒏𝒒𝒖𝒆 𝒍𝒊𝒏𝒌 𝒄𝒉𝒆 𝒄𝒐𝒎𝒊𝒏𝒄𝒉𝒊𝒂 𝒄𝒐𝒏 𝒉𝒕𝒕𝒑𝒔", rowId: `${usedPrefix + command} antilink2`},    
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `
╭══〘 _*sei emo come lux*_ 〙═╮
║
║     
┣❧🌙   _*DISABLE*_ _per disabilitare_
║
┣❧🌙   _*ENABLE*_ _per abilitare_
║
┣〘 ✯✯✯✯✯✯✯✯✯✯✯✯✯ 〙
║
┣❧🌙 *welcome*
║
┣❧🌙 *public* (solo owner)
║
┣❧🌙 *modohorny* (per borno)
║
┣❧🌙 *antilink*
║
┣❧🌙 *antilink2*
║
┣❧🌙 *detect*
║
┣❧🌙 *restrict* (solo owner)
║
┣❧🌙 *pconly* (solo owner)
║
┣❧🌙 *gconly* (solo owner)
║
┣❧🌙 *autoread* (solo owner)
║
╰══╡_*sei gay come lux*_╞══╯`,
title: null,
buttonText: "𝗖𝗟𝗜𝗖𝗖𝗔 𝗤𝗨𝗜 𝗕𝗘𝗜𝗕𝗜",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'detect':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'antilink':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'antilink2':
case 'antilinkhard':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'restrict':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `╭═•ೋ✧『 🎈』✧ೋ•═╮\n\n令 » 𝒄𝒐𝒎𝒂𝒏𝒅𝒐: ${type} \n令 » 𝒂𝒕𝒕𝒖𝒂𝒍𝒎𝒆𝒏𝒕𝒆: ${isEnable ? 'attivo' : 'inattivo'}\n\n╰═•ೋ•✧『 ¡ 』✧•ೋ•═╯`, wm, null, ['𝒎𝒆𝒏𝒖', '.menu'], m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler
