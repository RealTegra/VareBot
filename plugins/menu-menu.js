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

o che bel pdf c'è qua in alto

☕︎ Menu omosessuale

---Comandi Frociosi-
|.demote > toglie admin un frocio
|.gruppo chiuso > chiude un gruppo
|.gruppo aperto > apre un gruppo
---Comandi per scopo omoessuale-
|.sticker > fa uno sticker
|.wm > rinomina uno sticker
|.amnesia > sesso
|-Comandi per scopo intrattentenente porno style-
|.gay > test gay
|---Comandi per fare lo svuotatore di gruppi-
|.ban > banna un utente frocio
|.kick > stessa cosa cazzo
|---Comandi per fare il rompi cazzo-
|.tagall > ma io dico perche sei cosi frocio
|.hidetag > frocio ma di più
----------------------
Se si usa su angels il sesso diventa più realistico

Fatto da amnesia con il bot di Vare 

`.trim()
conn.sendHydrated(m.chat, str, wm, 'www.pornhub.com', 'sega portatile', null, null, [
['info', 'bot']
], m,)
} catch (e) {
conn.reply(m.chat, '*boh il menu tiene un errore che non vedo, bestemmia con me wa.me/393476686131*', m)
throw e
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|m|comandi|menucompleto|allmenu|allm\?)$/i
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
