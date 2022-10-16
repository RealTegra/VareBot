import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
  
  
const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  

const sections = [
{
title: `𝒍𝒊𝒔𝒕𝒂 𝒐𝒑𝒛𝒊𝒐𝒏𝒊`,
rows: [
{title: "𝒎𝒆𝒏𝒖 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒐️", description: null, rowId: `${usedPrefix}menu`},
{title: "𝒂𝒄𝒄𝒐𝒖𝒏𝒕 𝒗𝒂𝒓𝒆", description: null, rowId: `${usedPrefix}account`},
{title: "𝒊𝒎𝒎𝒂𝒈𝒊𝒏𝒆 𝒅𝒂 𝒈𝒐𝒐𝒈𝒍𝒆", description: "𝒔𝒄𝒂𝒓𝒊𝒄𝒂 𝒊𝒎𝒎𝒂𝒈𝒊𝒏𝒆 𝒅𝒂 𝒈𝒐𝒐𝒈𝒍𝒆", rowId: `${usedPrefix}imagen`},
{title: "𝒊𝒎𝒎𝒂𝒈𝒊𝒏𝒆 𝒅𝒂 𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕", description: "𝒔𝒄𝒂𝒓𝒊𝒄𝒂 𝒊𝒎𝒎𝒂𝒈𝒊𝒏𝒆 𝒅𝒂 𝒑𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒕", rowId: `${usedPrefix}pinterest`},
{title: "𝒊𝒎𝒎𝒂𝒈𝒊𝒏𝒆 𝒑𝒆𝒓 𝒔𝒇𝒐𝒏𝒅𝒐", description: "", rowId: `${usedPrefix}wallpaper`},   
]}, ]
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)


const listMessage = {
text: `🌹 𝒆𝒊 ${username}`,
footer: `╭═ೋ✧『𝒎𝒆𝒏𝒖 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅』✧ೋ═╮

 »  imagen | image « 𝒕𝒆𝒔𝒕𝒐 »

 »  pinterest « 𝒕𝒆𝒔𝒕𝒐 »

 »  wallpaper | wp « 𝒕𝒆𝒔𝒕𝒐 »

 »  play | play1 | play2 « 𝒕𝒆𝒔𝒕𝒐 𝒐 𝒍𝒊𝒏𝒌 »

 »  ytmp3 | yta « 𝒍𝒊𝒏𝒌 »

 »  ytmp4 | ytv « 𝒍𝒊𝒏𝒌 »

 »  facebook | fb « 𝒍𝒊𝒏𝒌 »
 
 »  instagram « 𝒍𝒊𝒏𝒌 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒑𝒐𝒔𝒕 »

 »  igstalk « 𝒖𝒔𝒆𝒓𝒏𝒂𝒎𝒆 »

 »  igstory « 𝒖𝒔𝒆𝒓𝒏𝒂𝒎𝒆 »

 »  tiktok « 𝒍𝒊𝒏𝒌 »

 »  tiktokfoto | tiktokphoto « 𝒖𝒔𝒆𝒓𝒏𝒂𝒎𝒆 » 

 »  tiktokstalk « 𝒖𝒔𝒆𝒓𝒏𝒂𝒎𝒆 »

╰═•ೋ•✧ 『 📥 』 ✧•ೋ•═╯
${wm}`,
title: null,
buttonText: "𝒄𝒍𝒊𝒄𝒄𝒂 𝒒𝒖𝒊", 
sections }

await conn.sendMessage(m.chat, listMessage)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(download|downloadmenu|descargas|descargasmenu)$/i
handler.exp = 50
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
