// import { useState } from 'react'
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/Navbar";
import Chatbox from "./components/Chatbox";
import Sendmsg from "./components/Sendmsg";
import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>
      {!user ? (
        <Welcome />
      ) : (
          <div className="Chatbox">
            <Chatbox />
          </div>
      )}
    </>
  );
}

export default App;
