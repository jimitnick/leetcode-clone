import {
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import "./App.css";
import { useEffect, useState } from "react";
import {auth, Googleprovider, Githubprovider} from "../firebase"
import GoogleSigninButton from "./components/GoogleSigninButton";
import GithubSigninButton from "./components/GithubSigninButton";
import { useNavigate } from "react-router";
import SignOutButton from "./components/SignOutButton";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User signed in:", user);
        navigate("/dashboard")
      } else {
        console.log("User not signed in");
        
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <circle />
      <div className="w-screen h-screen bg-zinc-700 flex flex-col items-center justify-center gap-32 relative">
        <h1 className="text-white text-3xl">Welcome to the world of  intriguing problems</h1>
        <h1 className="text-8xl text-white tracking-wider ">LET'S CODE</h1>
        <div className="flex flex-col gap-4">
            <GoogleSigninButton setUser = {setUser}/>
            <GithubSigninButton setUser = {setUser}/>
        </div>
      </div>
    </>
  );
}

export default App;
