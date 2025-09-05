import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="lg:font-[font1] font-[font2] lg:pt-5 pt-[43vh] flex flex-col items-center">
      <div className="lg:text-[9.5vw] text-[12vw] leading-[12vw] lg:leading-[8vw] uppercase flex items-center justify-center">L'étincelle</div>
      <div className="lg:text-[9.5vw] text-[12vw] leading-[12vw] lg:leading-[8vw] uppercase flex items-center justify-center">
        qui
        <div className="h-[7vw] w-[16vw] rounded-full -mt-4 overflow-x-hidden">
          <Video />
        </div>
        génère
      </div>
      <div className="lg:text-[9.5vw] text-[12vw] leading-[12vw] lg:leading-[8vw] uppercase flex items-center justify-center">la créativité</div>
    </div>
  );
};

export default HomeHeroText;
