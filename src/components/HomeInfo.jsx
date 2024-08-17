import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Rizki</span> 👋
      <br />A Software Engineer from Indonesia
    </h1>
  ),
  2: (
    <InfoBox
      text="Final year student at Del Institute of Technology and passionate in Frontend Development"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Are you looking for a frontend developer who has a passion for learning and improvement?"
      link="/contact"
      btnText="Let's talk"
    />
  ),
  4: (
    <InfoBox
      text="Lead some project over four year as a sudents and interns, Curious about the projects?"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
