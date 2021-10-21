let handler = function (m) {
  // this.sendContact(m.chat, '6285795431803', 'Andy', m)
  conn.sendContact(m.chat, '6285892842367', 'Hafizz', m)
  m.reply('wa.me/6285892842367')
}

handler.command = /^owner|creator$/i

module.exports = handler
