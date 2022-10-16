import { spawn } from 'child_process'
let handler = async (m, { conn, isROwner, text }) => {
    if (!process.send) throw 'Dont: node main.js\nDo: node index.js'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('1')
         await m.reply('2')
         await m.reply('3')
         await m.reply('la pippina fa il caffè') 
    process.send('reset')
  } else throw '_eeeeeiiittsssss..._'
}
handler.help = ['restart']
handler.tags = ['owner']
handler.command = /^(reiniciar|res(tart)?)$/i
handler.exp = 500
handler.rowner = true
export default handler
