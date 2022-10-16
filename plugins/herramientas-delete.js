let handler = function (m) {
if (!m.quoted) throw false
let { chat, fromMe, isBaileys } = m.quoted
if (!fromMe) throw false
if (!isBaileys) throw '*[❗]* 𝒒𝒖𝒆𝒔𝒕𝒐 𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊𝒐 𝒏𝒐𝒏 𝒆̀ 𝒔𝒕𝒂𝒕𝒐 𝒎𝒂𝒏𝒅𝒂𝒕𝒐 𝒅𝒂 𝒎𝒆, 𝒅𝒊 𝒄𝒐𝒏𝒔𝒆𝒈𝒖𝒆𝒏𝒛𝒂 𝒏𝒐𝒏 𝒍𝒐 𝒑𝒐𝒔𝒔𝒐 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒓𝒆'
conn.sendMessage(chat, { delete: m.quoted.vM.key })
}
handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^del(ete)?$/i
export default handler
