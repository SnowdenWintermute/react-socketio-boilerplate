import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import { io } from "socket.io-client";
const socketAddress = process.env.REACT_APP_DEV_MODE ? process.env.REACT_APP_SOCKET_API_DEV : process.env.REACT_APP_SOCKET_API

let socket

function App() {

  useEffect(() => {
    console.log(socketAddress)
    socket = io(socketAddress)
    socket.emit("test")
    socket.on("messageFromServer", (data) => console.log(data))
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
