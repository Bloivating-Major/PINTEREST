import { useState } from "react";
import "./userButton.css";

const UserButton = () => {
  const [open, setOpen] = useState(false);

  // TEMP
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <img src="/general/noAvatar.png" alt="" />
      <img src="/general/arrow.svg" alt=""  
      onClick={() => setOpen((prev) => !prev)}
      className="arrow" />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Setting</div>
          <div className="userOption" >Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="/" className="loginLink">
      Login / Sign-Up
    </a>
  );
};

export default UserButton;
