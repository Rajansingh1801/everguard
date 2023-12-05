import React from "react";
import "./sidebar.css";
import fb from "../../assets/icon/fb.png";
import linkdin from "../../assets/icon/linkdin.png";
import x from "../../assets/icon/x.png";
import { Link } from "react-router-dom";

export default function Sidebar({ toggleSidebar, isOpen }) {
  return (
    <>
      <section className={`sidebar ${isOpen ? "block" : "hidden"}`}>
        <div className="sidebarContainer">
          <span className="closebtn" onClick={toggleSidebar}>
            &#x2715;
          </span>
          <nav className="text-center px-28">
            <h3>Everguard</h3>
            <div className="line"></div>
            <ul className="">
              <li>
                <Link to="/shop">SHOP</Link>
              </li>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">PODCAST</a>
              </li>

              <li>
                <a href="#" className="uppercase">
                  Ingredients & Benefits
                </a>
              </li>
              <li>
                <a href="#">BLOGS</a>
              </li>
              <li>
                <a href="#">REVIEWS</a>
              </li>
              <li>
                <a href="#">REFER AND EARN</a>
              </li>
              <li>
                <a href="#">FAQS</a>
              </li>
              <li>
                <a href="#">CONTACT US</a>
              </li>
            </ul>
            <div className="line"></div>
          </nav>
          <p className="follow">Follow</p>
          <div className="flex justify-center items-center">
            <a href="#">
              <img src={fb} alt="icon" />
            </a>
            <a href="#">
              <img src={linkdin} alt="icon" className="mx-6" />
            </a>
            <a href="#">
              <img src={x} alt="icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
