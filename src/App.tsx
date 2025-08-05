// import { useState } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "./components/Navbar";
import Conversation from "./components/Conversation";
import Chatbox from "./components/Chatbox";
import "./App.css";
import Welcome from "./components/Welcome";
import { auth, db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function App() {
  const [user] = useAuthState(auth);
  const onSendMessage = async (event: any) => {
    const message = event.target[0]?.value?.trim();
    event.preventDefault();
    if (message === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
  };
  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>
      {!user ? (
        <Welcome />
      ) : (
        <>
          <Conversation />
          <Chatbox onSendMessage={onSendMessage} />
        </>
      )}
    </>
  );
}

export default App;
