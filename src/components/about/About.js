import React, { useEffect, useState } from "react";
import "./style.css";
import sleepgirl from "../../assets/images/about/girlsleep.png";

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let scaleFactorHeight = 0;
  let scaleFactorWidth = 0;
  scaleFactorHeight = 1 + scrollY * 0.018;
  scaleFactorWidth = 1 + scrollY * 0.02;

  console.log(scaleFactorHeight);

  const borderScrollWidth = 1 + scrollY * 0.012;
  const borderScrollHeight = 1 + scrollY * 0.019;
  const rotate = 1 + scrollY * 0.029;

  console.log("borderScrollWidth" + borderScrollWidth);
  // console.log("Rotate is " + rotate);
  console.log("scale Y" + scrollY);

  const borderstyle = {
    transform: `rotate(${rotate}deg)`,
    height: `${35 + borderScrollHeight}vh`,
    width: `${30 + borderScrollWidth}vw`,
  };

  const divStyle = {
    height: `${15 + scaleFactorHeight}vh`,
    width: `${15 + scaleFactorWidth}vw`,
    transition: "transform 0.2s ease",
  };

  return (
    <>
      <section className="about">
        <div className="about-container flex items-center justify-center">
          <div
            className="border flex items-center justify-center"
            style={borderstyle}
          ></div>
          <div className="sleepgirl" style={divStyle} />
        </div>
        <div className="new1"></div>

        <div className="new9">
          <div className="new7">
            <div className="heading z-50">
              <h2 className="text-white">No Sleep</h2>
              <h2 className="text-white">No Energy</h2>
            </div>
          </div>
          <div className="new8">
            <div className="z-50 about-details">
              <p className="text-white">
                While other vitamin and shake options promise to fuel you up on
                nutrients, only <br /> SIMPLIFI gets to the root of your
                health...
              </p>
              <h5 className="text-white">Your sleep!</h5>
              <p className="text-white">
                Without a rejuvenating night's sleep, your body can't rebuild
                and recharge. Our <br /> scientifically formulated AM and PM
                takes give you round the clock nutrient support <br /> to aid
                your body in a full night's sleep. Plus, it tastes great and
                costs less than
              </p>
              <h5 className="text-white">$4 day.</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="new11"></section>
    </>
  );
};

export default About;
