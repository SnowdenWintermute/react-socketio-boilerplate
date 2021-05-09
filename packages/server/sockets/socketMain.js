const io = require("../expressServer").io;

io.sockets.on("connect", async (socket) => {
  console.log("socket connected: " + socket.id)
  socket.emit("messageFromServer", "test message")
})