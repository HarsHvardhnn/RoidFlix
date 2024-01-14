import { signOut } from "firebase/auth";
import React from "react";
import auth from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignout = () => {
    signOut(auth)
    .then(() => { navigate('/');
    // setSignedIn(false);

    }).catch((err) => {
      console.log(err.message);
    })

  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className=" w-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png
"
        alt="/"
      />
    {user &&   <button onClick={
        handleSignout
      } className="font-bold text-white ">Sign Out</button>}
    </div>
  );
};

export default Header;
