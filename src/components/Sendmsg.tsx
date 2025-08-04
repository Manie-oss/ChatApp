import { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function Sendmsg({scroll}){
    const [message, setMessage] = useState("");
    const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL} = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
    return(
        <div className="Sendmsg"> 
            <form style={{display: "flex", justifyContent: "center", marginTop: "3px"}} onSubmit={(event) => sendMessage(event)}>
                <input style={{width: "92%", height: "30px", marginTop: "3px", border: "none", borderRadius: "5px", paddingLeft: "5px"}} type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Sendmsg;