import './App.css';
import { useEffect, useState } from 'react'
import { io } from "socket.io-client";
// const socketAddress = process.env.REACT_APP_DEV_MODE ? process.env.REACT_APP_SOCKET_API_DEV : process.env.REACT_APP_SOCKET_API
const socketAddress = "45.77.203.192:8081"
// const socketAddress = "localhost:8081"

let socket

function App() {
  const [messages, setMessages] = useState(["nothing yet..."])

  useEffect(() => {
    console.log(socketAddress)
    socket = io(socketAddress)
    socket.emit("test")
    socket.on("messageFromServer", (data) => {
      console.log(data)
      setMessages(lastMessages => [...lastMessages, data])
    })
  }, [])

  return (
    <div className="App">
      <ul>
        {messages && messages.map((message, i) =>
          <li key={i}>
            {i + ": " + message}
          </li>
        )}
      </ul>
    </div>
  );
}

export default App;
