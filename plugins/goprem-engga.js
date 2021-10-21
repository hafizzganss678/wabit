let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Okehlah
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Hmm*', 'status@broadcast')
}
handler.command = /^(ndak)$/i

module.exports = handler