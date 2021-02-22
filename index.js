const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.use('/', (req, res) => res.sendFile(__dirname + '/index.html'))

io.on('connection', socket => {
  socket.on('disconnecting', () => console.log(socket.rooms))
  // console.log('a user connected')
  // socket.on('disconnect', () => console.log('user disconnected'))
  socket.on('chat message', msg => io.emit('chat message', msg))
  socket.on('test', (arg1, arg2, cb) => {
    console.log(arg1)
    console.log(arg2)
    cb({ name: 'tom' })
  })
})

server.listen(3000, () => console.log('Server running,  horayayayayay!!!'))
