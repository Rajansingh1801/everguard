import React, { useEffect } from "react";
import lottie from "lottie-web";
import { Player } from "@lottiefiles/react-lottie-player";
import "./banner.css";
import veg from "../../assets/images/banner/veg.png";
import dried_rosehip from "../../assets/images/banner/dried-rosehip.png";
import spice from "../../assets/images/banner/spice.png";
import sand from "../../assets/images/banner/sandclock.json";
import "animate.css";

const Banner = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: sand,
      loop: true,
      autoplay: true,
    });
  }, []);
  return (
    <>
      <section className="banner flex items-center">
        <div className="flex items-center justify-between w-full h-screen">
          <div>
            <div className="topimg">
              <img src={dried_rosehip} alt="img" />
            </div>
            <div className="bottomimg">
              <img src={spice} alt="img" />
            </div>
          </div>
          <div className="details">
            <p> Nutrition That Never Sleeps</p>
            <h1>24 Hour Nutrition</h1>
            <p>Better Sleep - Boundless Energy - Mental Clarity</p>
            <button>Get Started</button>
          </div>
          <div className="sandclock">
            <Player
              autoplay
              loop
              src={sand}
              speed={0.2}
              // style={{ height: "500px", width: "500px", overflow: "visible" }}
            >
              autoplay={false}
              loop={true}
              controls={true}
            </Player>
          </div>
        </div>
        <div className="veg">
          <img src={veg} alt="img" />
        </div>
      </section>
    </>
  );
};

export default Banner;
