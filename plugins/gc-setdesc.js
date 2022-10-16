let handler = async (m, { conn, args }) => {
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
m.reply('[ ¡ ] 𝒇𝒂𝒕𝒕𝒐 𝒂𝒎𝒐𝒓𝒆 𝒎𝒊𝒐')
}
handler.help = ['setdesc <text>']
handler.tags = ['group']
handler.command = /^setdesk|setdesc$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
