import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

function Navbar() {
  const [user] = useAuthState(auth);
  const googleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      console.log('provider: ', provider);
      console.log('---> ', auth);
      const result = await signInWithPopup(auth, provider);
      console.log('result: ', result);
      if (result) {
        // This is the signed-in user
        const user = result.user;
        // This gives you a Facebook Access Token.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log({ user, credential, token });
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        justifyItems: "center",
        marginRight: "10px",
        marginLeft: "10px",
      }}
    >
      <h3>Chat App</h3>
      {user ? (
        <button onClick={signOut} style={{ height: "40px", marginTop: "4px" }}>
          Sign Out
        </button>
      ) : (
        <button
          onClick={googleSignIn}
          style={{ height: "40px", marginTop: "4px" }}
        >
          Sign in with google
        </button>
      )}
    </div>
  );
}

export default Navbar;
