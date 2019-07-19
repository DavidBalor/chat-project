(()=>{
  const socket = io();
  //obtaing dom elements from the intarface
  const messageForm = document.querySelector('#message-form')
  const messageBox = document.querySelector('#message')
  const chat = document.querySelector('#chat')

  //Getting Elements from the nickname form
  const nickForm = document.querySelector('#nickForm')
  const nickname = document.querySelector('#nickname')
  const nickError = document.querySelector('#nick-error')

  //Card Users
  const usernames = document.querySelector('#usernames')

  nickForm.addEventListener('submit', ev => {
    ev.preventDefault()
    socket.emit('new user', nickname.value, data => {
      if (data) {
        document.querySelector('#nickWrap').style.display = 'none'
        document.querySelector('#contentWrap').style.display = 'block'
      } else {
        let message = '<div class="alert alert-danger">That username already exists</div>'
        nickError.innerHTML = message
      }
    })
  })
  
  messageForm.addEventListener('submit', ev => {
    ev.preventDefault()
    socket.emit('send message', messageBox.value)
    messageBox.value = ''
  })
  socket.on('new message', data => {
    let div = document.createElement('DIV')
    div.innerHTML = data + "</br>"
    chat.appendChild(div)
  })
})()