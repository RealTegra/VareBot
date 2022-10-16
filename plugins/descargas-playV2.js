import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix }) => {
if (!text) throw `\n𝒔𝒄𝒓𝒊𝒗𝒊 𝒊𝒍 𝒏𝒐𝒎𝒆 𝒅𝒆𝒍 𝒄𝒂𝒏𝒂𝒍𝒆 𝒐 𝒊𝒍 𝒕𝒊𝒕𝒐𝒍𝒐 𝒅𝒆𝒍 𝒗𝒊𝒅𝒆𝒐\n𝒑𝒆𝒓 𝒆𝒔𝒆𝒎𝒑𝒊𝒐: \n*${usedPrefix + command} wtf moment in football 2016`
try {
if (command == 'play.1') {
conn.reply(m.chat, `𝒂𝒔𝒑𝒆𝒕𝒕𝒂 𝒏𝒑𝒐 𝒇𝒓𝒐𝒄𝒆𝒕𝒕𝒐, 𝒔𝒆 𝒄𝒊 𝒎𝒆𝒕𝒕𝒆 𝒕𝒂𝒏𝒕𝒐: paypal.me/realvare 𝒅𝒐𝒏𝒂𝒎𝒊 𝒑𝒆𝒓𝒎𝒆𝒕𝒕𝒆𝒏𝒅𝒐𝒎𝒊 𝒅𝒊 𝒄𝒐𝒎𝒑𝒓𝒂𝒓𝒎𝒊 𝒖𝒏 𝒃𝒖𝒐𝒏 𝒘𝒊𝒇𝒊`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝒗𝒂𝒓𝒆 𝒃𝒐𝒕 | 𝒗𝒂𝒓𝒆',
body: '𝒊𝒍 𝒃𝒐𝒕 𝒑𝒊𝒖 𝒔𝒆𝒔𝒔𝒐𝒔𝒐',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: ``}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
//https://leyscoders-api.herokuapp.com/api/playmp3?q=lebih%20baik%20darinya&apikey=Your_Key
  //("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'play.2') {
conn.reply(m.chat, `𝒂𝒔𝒑𝒆𝒕𝒕𝒂 𝒏𝒑𝒐 𝒇𝒓𝒐𝒄𝒆𝒕𝒕𝒐, 𝒔𝒆 𝒄𝒊 𝒎𝒆𝒕𝒕𝒆 𝒕𝒂𝒏𝒕𝒐: paypal.me/realvare 𝒅𝒐𝒏𝒂𝒎𝒊 𝒑𝒆𝒓𝒎𝒆𝒕𝒕𝒆𝒏𝒅𝒐𝒎𝒊 𝒅𝒊 𝒄𝒐𝒎𝒑𝒓𝒂𝒓𝒎𝒊 𝒖𝒏 𝒃𝒖𝒐𝒏 𝒘𝒊𝒇𝒊`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝒗𝒂𝒓𝒆 𝒃𝒐𝒕 | 𝒗𝒂𝒓𝒆',
body: '𝒊𝒍 𝒃𝒐𝒕 𝒑𝒊𝒖 𝒔𝒆𝒔𝒔𝒐𝒔𝒐',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: ``}}})
  
let res = await fetch("https://api.dhamzxploit.my.id/api/ytplaymp4?text="+text) 
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)}
}catch(e){
m.reply(`${fg} 𝒓𝒊𝒑𝒓𝒐𝒗𝒂`)
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['play.1', 'play.2']
export default handler
