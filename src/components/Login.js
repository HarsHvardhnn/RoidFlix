import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const [Login , setLogin] = useState(false);
  return (
    <div>
      <Header /> 
      <div>

      <img className="absolute bg-gradient-to-b from-black"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="/"
        ></img>
        </div>
        <form className=" mx-auto right-0 left-0 w-1/3 bg-black bg-opacity-70 absolute p-12 my-36 text-white">
            <h1 className="font-bold text-3xl py-4">{!Login?'Sign in' :'Sign Up'}</h1>
            <input type="text" placeholder="email" className="p-2 m-2 w-full bg-gray-800"></input>
            {Login && <input type="text" placeholder="name" className="p-2 m-2 w-full bg-gray-800"></input>}
            <input type="password" placeholder="pass"className="p-2 m-2 w-full bg-gray-800"></input>
            {Login && <input type="password" placeholder="Confirm pass"className="p-2 m-2 w-full bg-gray-800"></input>}
            <button className="p-4 m-2 bg-red-700 w-full rounded-lg">{Login? 'Sign Up' : 'Login'}</button>
            <h1 className="p-4">{!Login? 'New to NetFlix?' : 'why buy twice?'}
            <Link onClick={() => {
              setLogin(!Login);
            }}>{Login?'go here' : 'SignUP'}</Link>
            </h1> 
        </form>

    </div>
  );
};

export default Login;
