import React from "react";
import "./header.css";
import logo from "../../assets/logo/logo.png";
import location from "../../assets/logo/location.png";
import usericon from "../../assets/logo/usericon.png";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex items-center">
          <div className="me-8 pb-5">
            <img src={logo} alt="img" />
          </div>
          <h3 className="text-white">
            Ever<em>guard</em>
          </h3>
        </div>
        <div className="flex items-center">
          <div className="flex items-center me-10">
            <div className="me-4 ">
              <img src={location} alt="img" />
            </div>
            <p className="text-white">Select delivery Address</p>
          </div>
          <div className="flex items-center">
            <div className="me-4">
              <img src={usericon} alt="img" />
            </div>
            <p className="text-white">Utsav watson</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
