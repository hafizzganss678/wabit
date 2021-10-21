let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6285892842367', 'Hafizz', m)
  m.reply('wa.me/6285892842367')
}

handler.command = /^pj2$/i

module.exports = handler