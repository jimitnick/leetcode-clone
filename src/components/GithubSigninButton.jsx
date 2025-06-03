import { signInWithPopup } from 'firebase/auth';
import React from 'react'
import { auth, Githubprovider } from '../../firebase';

const GithubSigninButton = (props) => {
    const handleLoginWithGithub = async () => {
        try {
          const result = await signInWithPopup(auth, Githubprovider);
          props.setUser(result.user);
        } catch (error) {
          console.error("Login failed:", error.message);
        }
    };
  return (
    <button className="p-3 bg-zinc-900 text-white rounded-xl w-[450px] cursor-pointer" onClick={() => {handleLoginWithGithub()}}>
          Sign in with Github
    </button>
  )
}

export default GithubSigninButton
