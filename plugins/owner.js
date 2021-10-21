let handler = function (m) {
  // this.sendContact(m.chat, '6285892842367', 'Andy', m)
  conn.sendContact(m.chat, '6285892842367', 'Hafizz', m)
  m.reply('wa.me/6285892842367')
}

handler.command = /^qw$/i

module.exports = handler
