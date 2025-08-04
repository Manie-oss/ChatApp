import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Welcome() {
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };
  return (
    <div style={{ height: "600px",display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <div>
       Welcome to our chat app. Please Login
      </div>
      <button
        onClick={googleSignIn}
        style={{ height: "40px", marginTop: "4px" }}
      >
        Sign in with google
      </button>
    </div>
  );
}

export default Welcome;
