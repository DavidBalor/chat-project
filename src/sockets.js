module.exports = (io) => {
  let nicknames = []
  io.on('connection', socket => {
    console.log('new user connected')
    //Send Message Event
    socket.on('send message', data => {
      io.sockets.emit('new message', data)
    })

    //New user Event
    socket.on('new user', (nick,cb) => {
      if (nicknames.indexOf(nick) > -1) {
        cb(false)
      } else {
        socket.nickname = nick
        nicknames.push(nick)
        cb(true)
      }
    })

  })
}