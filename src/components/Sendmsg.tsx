import { useState } from "react";

function Sendmsg(){
    const [message, setMessage] = useState("");
    return(
        <div style={{display: "flex", justifyContent: "center", marginTop: "3px"}}>
            <input style={{width: "85%", height: "30px", marginTop: "3px", border: "none", borderRadius: "5px", paddingLeft: "5px"}} type="text" placeholder="Type a message" onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={() => console.log(message)}>Send</button>
        </div>
    )
}

export default Sendmsg;