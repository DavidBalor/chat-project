(()=>{
  const socket = io();
  //obtaing dom elements from the intarface
  const messageForm = document.querySelector('#message-form')
  const messageBox = document.querySelector('#message')
  const chat = document.querySelector('#chat')
  
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