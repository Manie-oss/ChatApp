import { useState } from "react";

function Chatbox({onSendMessage}: {onSendMessage: any}){
    const [message, setMessage] = useState("");

    return(
        <div className="Sendmsg"> 
            <form style={{display: "flex", justifyContent: "center", marginTop: "3px"}} onSubmit={(event) => {
              onSendMessage(event);
              setMessage("");
            }}>
                <input style={{width: "92%", height: "30px", marginTop: "3px", border: "none", borderRadius: "5px", paddingLeft: "5px"}} type="text" placeholder="Type a message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chatbox;