// import { useState } from 'react'
import Navbar from "./components/Navbar"
import Chatbox from "./components/Chatbox"
import Sendmsg from "./components/Sendmsg"
import './App.css'


function App() {

  return (
    <>
    <div className="Navbar">
      <Navbar/>
    </div>
    <div className="Chatbox">
      <Chatbox/>
    </div>
    <div className="Sendmsg">
      <Sendmsg/>
    </div>
    </>
  )
}

export default App
