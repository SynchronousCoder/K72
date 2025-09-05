import React from "react";
import Video from "../components/Home/Video";
import HomeHeroText from "../components/Home/HomeHeroText";
import HomeBottomText from "../components/Home/HomeBottomText";
import Paragraph from "../components/Home/Paragraph";

const Home = () => {
  return (
    <div>
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <Paragraph />
      <div className="h-screen w-screen pb-4 overflow-hidden relative flex flex-col justify-between">
        <HomeHeroText /> 
        <HomeBottomText />
      </div>
    </div>
  );  
};

export default Home;
