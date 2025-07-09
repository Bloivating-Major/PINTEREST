import { useState } from "react";
import "./userButton.css";
import CustomImage from "../image/custom_image";


const UserButton = () => {
  const [open, setOpen] = useState(false);

  // TEMP
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <CustomImage path="/general/noAvatar.png" alt="" />
      <CustomImage path="/general/arrow.svg" alt=""  
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
