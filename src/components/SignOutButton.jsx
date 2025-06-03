import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router';

const SignOutButton = () => {
  const navigate = useNavigate();
  const SignOutHandler = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            var confirmation = confirm("Are you sure you want to logout ?");
            if(confirmation) {
                alert("Logged out successfully");
                navigate("/")
            }
        }).catch((error) => {
            console.log(error)
        });
    }
  return (
    <button className="text-white px-3 py-2 bg-transparnet rounded-3xl border-1 border-white" onClick={() => {SignOutHandler()}} >Sign Out</button>
  )
}

export default SignOutButton
