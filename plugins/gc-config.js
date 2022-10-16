let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'aperto': 'not_announcement',
'chiuso': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `\n*[❗] scrivi bene coglione*\n┏━━━❲ esempi 🍷 ❳━━━┓*\n┠┉↯ ${usedPrefix + command} *abrir/open/aperto*
┠┉↯ ${usedPrefix + command} *chiuso/close/cerrar*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['gruppo aperto / chiuso', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|gruppo|grupo)$/i
handler.admin = true
handler.botAdmin = true
export default handler
