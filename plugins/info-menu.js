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
let { money } = global.db.data.users[m.sender]
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
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
title: ` 𝑳𝑰𝑺𝑻𝑨 𝑴𝑬𝑵𝑼 `,
rows: [
{title: " 𝑴𝑬𝑵𝑼 𝑪𝑶𝑴𝑷𝑳𝑬𝑻𝑶 🎯 ️", description: null, rowId: `${usedPrefix}allmenu`},
{title: " 𝑨𝑪𝑪𝑶𝑼𝑵𝑻 𝑽𝑨𝑹𝑬 🛰️ ", description: null, rowId: `${usedPrefix}cuentasgatabot`},
{title: " 𝑷𝑨𝒀𝑷𝑨𝑳 🧧", description: null, rowId: `${usedPrefix}paypal`},
{title: " 𝑰𝑵𝑭𝑶 𝑩𝑶𝑻 ℹ ", description: null, rowId: `${usedPrefix}estado`},       
{title: " 𝑪𝑹𝑬𝑨𝑻𝑶𝑹𝑬 🕯", description: " 𝑽𝑨𝑹𝑬 ", rowId: `${usedPrefix}creadora`},        
]}, ]
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)


const listMessage = {
text: `💗 𝒆𝒊 ${username}`,
footer: `
╭═•ೋ•✧『 𝒎𝒆𝒏𝒖 𝒊𝒏𝒇𝒐 』✧•ೋ •═╮

💫 » accounts
💫 » grupos
💫 » donar | paypal
💫 » listagrupos | grouplist
💫 » estado | status
💫 » infobot
💫 » owner | creatore
💫 » bot  « 𝒔𝒆𝒏𝒛𝒂 𝒑𝒓𝒆𝒇𝒊𝒔𝒔𝒐 » 

╰══• ೋ•✧ 『 💫 』 ✧•ೋ •══╯
${wm}`,
title: null,
buttonText: " 𝒄𝒍𝒊𝒄𝒄𝒂 𝒒𝒖𝒊 ", 
sections }

await conn.sendMessage(m.chat, listMessage)
}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(infomenu)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
