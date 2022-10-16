import fs from 'fs'
function handler(m, { conn }) {
let pp = './media/menus/paypal.jpg'
let text = `
𝒆𝒊 𝒃𝒆𝒍𝒍𝒆𝒛𝒛𝒂, 𝒄𝒉𝒆 𝒏𝒆 𝒅𝒊𝒄𝒊 𝒅𝒊 𝒎𝒂𝒏𝒕𝒆𝒏𝒆𝒓𝒎𝒊? 𝒊 𝒗𝒆𝒄𝒄𝒉𝒊 𝒆 𝒊 𝒑𝒂𝒌𝒊 𝒎𝒊 𝒉𝒂𝒏𝒏𝒐 𝒔𝒄𝒐𝒑𝒆𝒓𝒕𝒐 𝒕𝒓𝒖𝒇𝒇𝒂𝒓𝒍𝒊 💔

╭══•ೋ✧『 𝒑𝒂𝒚𝒑𝒂𝒍 』✧ೋ•══╮

        ︎ *paypal.me/realvare*

╰══•ೋ•✧ 『 ㌌ 』 ✧•ೋ•══╯
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝒗𝒂𝒓𝒆 𝒃𝒐𝒕 | 𝒔𝒆𝒔𝒔𝒐 𝒑𝒂𝒕𝒐𝒍𝒐𝒈𝒊𝒄𝒐',
body: '𝒔𝒆𝒙𝒐 𝒂𝒏𝒂𝒍',         
sourceUrl: `https://youtu.be/dQw4w9WgXcQ`}}})
}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
export default handler