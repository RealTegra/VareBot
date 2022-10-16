let handler = async (m, { conn, participants, groupMetadata, args }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊𝒐: ${pesan}`
let text = `↬『 𝑺𝑽𝑬𝑮𝑳𝑰𝑨 𝑨𝑫𝑴𝑰𝑵 』↫

${oi}

𝒂𝒅𝒎𝒊𝒏
${listAdmin}

[ ⚠ ️] 𝒔𝒆𝒊 𝒖𝒏 𝒇𝒓𝒐𝒄𝒆𝒕𝒕𝒐\n`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['admins <texto>']
handler.tags = ['group']
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
