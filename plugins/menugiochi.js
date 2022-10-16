import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
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
let _uptime = process.uptime() * 0
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 0)
}) * 0
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

let str = `
╭═ೋ『𝐦𝐞𝐧𝐮 𝐠𝐢𝐨𝐜𝐡𝐢』ೋ═╮

令 » ppt « 𝒑𝒂𝒑𝒆𝒍 / 𝒕𝒊𝒋𝒆𝒓𝒂 / 𝒑𝒊𝒆𝒅𝒓𝒂 »
令 »️ prostituto/a « @𝒕𝒂𝒈 »
令 » gay2 « @𝒕𝒂𝒈 »
令 » lesbica « @𝒕𝒂𝒈 »
令 » puta/o « @𝒕𝒂𝒈 »
令 » love « @𝒕𝒂𝒈 »
令 »️ doxear « @𝒕𝒂𝒈 »
令 »️ topgays
令 »️ topotakus
令 » toimg « 𝒓𝒊𝒔𝒑𝒐𝒏𝒅𝒊 𝒂𝒅 𝒖𝒏𝒐 𝒔𝒕𝒊𝒄𝒌𝒆𝒓 »
令 » tomp3 « 𝒓𝒊𝒔𝒑𝒐𝒏𝒅𝒊 𝒂𝒅 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 𝒐 𝒂𝒖𝒅𝒊𝒐 »
令 » tourl « 𝒓𝒊𝒔𝒑𝒐𝒏𝒅𝒊 𝒂𝒅 𝒖𝒏 𝒗𝒊𝒅𝒆𝒐 / 𝒂𝒖𝒅𝒊𝒐 / 𝒊𝒎𝒎𝒂𝒈𝒊𝒏𝒆 »
令 » tts « 𝒕𝒆𝒔𝒕𝒐 »
令 » acortar « 𝒍𝒊𝒏𝒌 »
令 »️ del « 𝒓𝒊𝒔𝒑𝒐𝒏𝒅𝒊 𝒂𝒅 𝒖𝒏 𝒎𝒆𝒔𝒔𝒂𝒈𝒈𝒊𝒐 𝒅𝒆𝒍 𝒃𝒐𝒕 »
令 » ️styletext « 𝒕𝒆𝒔𝒕𝒐 »
令 » traducir « 𝒕𝒆𝒔𝒕𝒐 »
令 » attp « 𝒕𝒆𝒔𝒕𝒐 »
令 » ttp « 𝒕𝒆𝒔𝒕𝒐 »
令 » pat « @𝒕𝒂𝒈 »
令 » slap « @𝒕𝒂𝒈 »
令 » kiss « @𝒕𝒂𝒈 »

╰═• ೋ•✧『 🦆 』✧•ೋ •═╯

`.trim()
conn.sendHydrated(m.chat, str, wm, 'instagram./vare.sossap', '𝒊𝒈 𝒗𝒂𝒓𝒆', null, null, [
['𝐢𝐧𝐟𝐨 𝐛𝐨𝐭', '.infobot']
['𝐬𝐨𝐧𝐨 𝐞𝐦𝐨 𝐜𝐨𝐦𝐞 𝐯𝐚𝐫𝐞']
['1 2 3 𝐥𝐚 𝐩𝐢𝐩𝐩𝐢𝐧𝐚 𝐟𝐚 𝐢𝐥 𝐜𝐚𝐟𝐟𝐞̀']
], m,)
} catch (e) {
conn.reply(m.chat, '*il menu giochi tiene un errore che non vedo, bestemmia con me wa.me/64276665888*', m)
throw e
}}
handler.help = ['menugiochi']
handler.tags = ['main']
handler.command = /^(menugiochi|menujuegos|juegosmenu\?)$/i
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
