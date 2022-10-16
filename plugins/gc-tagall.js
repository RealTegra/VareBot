let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let teks =`INVOCATORE DI FROCI 3069`
for (let mem of participants) {
teks += `@${mem.id.split('@')[0]}\n`}
teks += `Amnesia, creatore sessoso del invocatore di froci v2`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(marcar|taggafroci|tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
