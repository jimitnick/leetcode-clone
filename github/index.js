import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

const provider = new GithubAuthProvider();
const auth = getAuth();

export default function GitHubLogin(){
    const navigate = useNavigate();
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        navigate("/dashboard");
        return user;
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
        navigate("/");
        return null;
    });
}