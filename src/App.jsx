import {
  GoogleAuthProvider,
  onAuthStateChanged,
  GithubAuthProvider,
} from "firebase/auth";
import "./App.css";
import { useEffect } from "react";
import {auth, Googleprovider, Githubprovider} from "../firebase"
import GoogleSigninButton from "./components/GoogleSigninButton";
import GithubSigninButton from "./components/GithubSigninButton";
import { useNavigate } from "react-router";
import { useUser } from "./providers/userContext";

function App() {
  const {User, setUser} = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User signed in:", user);
        setUser(user);
        navigate("/dashboard")
      } else {
        console.log("User not signed in");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <circle />
      <div className="w-screen h-screen bg-zinc-700 flex items-center justify-center gap-32 relative">
        <div className="h-full w-1/2 flex flex-col items-center justify-center gap-32 bg-zinc-950">
          <h1 className="text-white text-3xl">Welcome to the world of  intriguing problems</h1>
          <h1 className="text-8xl text-white tracking-wider ">LET'S CODE</h1>
        </div>
        <div className="flex flex-col gap-16 w-1/2 justify-center items-center">
            <div>
              <h1 className="text-white text-lg underline decoration-3">Log in to continue to Let's Code</h1>
            </div>
            <div className="flex justify-center items-center flex-col gap-4">
              <GoogleSigninButton setUser = {setUser}/>
              <GithubSigninButton setUser = {setUser}/>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
