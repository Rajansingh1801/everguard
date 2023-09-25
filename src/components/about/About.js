import React from "react";
import "./style.css";
import sleepgirl from "../../assets/images/about/girlsleep.png";

const About = () => {
  return (
    <>
      <section className="about flex items-center justify-center">
        <div className="border flex items-center justify-center">
          <img src={sleepgirl} alt="img" className="sleepgirl" />
        </div>
      </section>
    </>
  );
};

export default About;
