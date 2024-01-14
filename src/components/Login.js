import React, { useDebugValue } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
import ValidateData from "../utils/Validate";
import validateData from "../utils/Validate";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from 'firebase/auth'
import auth from '../utils/firebase';
import { UseDispatch, useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => { 
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError ,setFormError] = useState('');
  const [name,setName]  = useState('');
  const dispatch = useDispatch();
  // const [signedIn, setSignedIn] = useState(false);

  const checkForm = () => {
    setFormError(ValidateData(email,password));
    if(validateData(email,password)) return;
    console.log(signIn)
         if(!signIn){
          createUserWithEmailAndPassword(auth, email,password)
          .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user,{
              displayName:name
            }).then(()=>{ 
              const {uid,email,displayName} = auth.currentUser;
              dispatch(addUser({uid:uid,email:email ,displayName:displayName}));
             
              // navigate('/browse');

            }).catch((err) => {
              console.log(err);
            })
            console.log(user);
        

          // setSignedIn(true);

          })
          .catch((error) => {
            
            const errorMessage = error.message;
            setFormError(errorMessage);

          })

         }
         signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // navigate('/browse');
    // setSignedIn(true);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setFormError(errorCode)
  });

  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute bg-gradient-to-b from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        ></img>
      </div>
      <form onSubmit={(e) => {
        e.preventDefault();
      }} className=" mx-auto right-0 left-0 w-1/3 bg-black bg-opacity-70 absolute p-12 my-36 text-white">
        <h1 className="font-bold text-3xl py-4">
          {signIn ? "Sign in" : "Sign Up"}
        </h1>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          placeholder="email"
          className="p-2 m-2 w-full bg-gray-800"
        ></input>
        {!signIn && (
          <input onChange={(e)=>{
            setName(e.target.value);
          }}
            type="text"
            placeholder="name"
            className="p-2 m-2 w-full bg-gray-800"
          ></input>
        )}
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="pass"
          className="p-2 m-2 w-full bg-gray-800"
        ></input>
        {/* {signIn && (
          <input
            type="password"
            placeholder="Confirm pass"
            className="p-2 m-2 w-full bg-gray-800"
          ></input>
        )} */}
        <p className="p-4 text-red-700 font-bold text-lg">{formError}</p>
        <button
          onClick={checkForm}
          className="p-4 m-2 bg-red-700 w-full rounded-lg"
        >
          {!signIn ? "Sign Up" : "signIn"}
        </button>
        <h1 className="p-4">
          {!!signIn ? "New to NetFlix?" : "why buy twice?"}
          <Link
            onClick={() => {
              setSignIn(!signIn);
            }}
          >
            {!signIn ? "go here" : "SignUP"}
          </Link>
        </h1>
      </form>
    </div>
  );
};

export default Login;
