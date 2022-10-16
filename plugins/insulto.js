import util from 'util'
import path from 'path'

let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].audios && m.isGroup) throw 0
global.db.data.users[m.sender].money += 30
global.db.data.users[m.sender].exp += 70
  
let vn = './media/insulto.mp3'
conn.sendFile(m.chat, vn, 'insulto.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /bot di merda|che bot di merda|merda di bot|che merda di bot|che schifo di bot|schifo di bot|che bot schifoso|bot schifo|/i
handler.command = /^(insulto)/i
export default handler
