import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, Googleprovider } from "../../firebase";

const GoogleSigninButton = (props) => {
    const handleLoginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, Googleprovider);
            props.setUser(result.user);
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };
  return (
    <button className="p-3 bg-white w-[450px] rounded-xl cursor-pointer" onClick={() => {handleLoginWithGoogle()}}>
          Sign in with Google
    </button>
  )
}

export default GoogleSigninButton
