import React from "react";
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex justify-center items-center lg:gap-2 gap-4">
      <div className="lg:border-3 border-2 lg:h-20 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center lg:px-8 px-2 border-white rounded-full uppercase">
        <Link className="lg:text-[6vw] text-[5vw] lg:mt-2" to="/projects ">
          Projects
        </Link>
      </div>
      <div className="lg:border-3 border-2 lg:h-20 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center lg:px-8 px-2 border-white rounded-full uppercase">
        <Link className="lg:text-[6vw] text-[5vw] lg:mt-2" to="/agence">
          Agence
        </Link>
      </div>
    </div>
  );
};

export default HomeBottomText;
