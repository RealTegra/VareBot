import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old

let info = `
╭═•ೋ•✧『𝒊𝒏𝒇𝒐 𝒃𝒐𝒕』✧•ೋ•═╮

🌹 »︎  𝒖𝒏𝒊𝒄𝒐 𝒄𝒓𝒆𝒂𝒕𝒐𝒓𝒆 
み »  Amnesia 
 
🌹 »  𝒈𝒓𝒖𝒑𝒑𝒊
み »   _*${groups.length}*_
 
🌹 »  𝒄𝒉𝒂𝒕 𝒕𝒐𝒕𝒂𝒍𝒊
み »   _*${chats.length}*_
 
🌹 »  𝒕𝒆𝒎𝒑𝒐 𝒅𝒊 𝒂𝒕𝒕𝒊𝒗𝒊𝒕𝒂̀
み »   _*${uptime}*_

🌹 »  𝒄𝒐𝒎𝒂𝒏𝒅𝒊 𝒂𝒕𝒕𝒖𝒂𝒕𝒊
み »   _*${totalreg}*_

🌹 »  𝒑𝒊𝒏𝒈
み »   _*${speed}*_

╰═•ೋ•✧ 『 sesso 』 ✧•ೋ•══╯`.trim()

conn.sendHydrated(m.chat, info, null, null, 'amnesia bot', null, null, [
['𝒔𝒐𝒏𝒐 𝒈𝒂𝒚']
], m,)
//conn.reply(m.chat, info, m)
}
handler.help = ['infobot']
handler.tags = ['info', 'tools']
handler.command = /^(infobot|informacionbot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
