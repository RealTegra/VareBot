import fs from 'fs'
function handler(m, { conn }) {
let text = `
Numeri di Amnesia Sessosi

wa.me/no

Comando per sesso « .amnesia »
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'amnesia bot| il sesso a portata di mano',
body: 'oh si mlml',         
sourceUrl: `wa.me/696969696969696`}}})
  
//const data = global.owner.filter(([id, isCreator]) => id && isCreator)
//this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
let pp = './media/menus/creatore.jpg'
conn.sendHydrated(m.chat,  ig, pp, 'www.pornhub.com', 'sesso', null, null, [
['riportami al menu', '.menu']
], m,)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|creatore|propietariopropietaria|creadora|creador)$/i
export default handler
