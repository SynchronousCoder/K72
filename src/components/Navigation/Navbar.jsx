import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";
import { Link, useLocation } from "react-router-dom"; // Add this import

const Navbar = ({fillColor}) => {
  const navWhiteLine1 = useRef(null);
  const navWhiteLine2 = useRef(null);
  const navGreenRef = useRef(null);
  const [navOpen, setnavOpen] = useContext(NavbarContext);

  return (
    <div className="flex fixed top-0 w-full items-start justify-between z-20">
      <div className="p-2">
        <Link to={"/"} className="block w-32 text-white cursor-pointer">
          <svg
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 103 44"
          >
            <path
              fill={fillColor}
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
            ></path>
          </svg>
        </Link>
      </div>

      <div
        onClick={() => setnavOpen(true)}
        onMouseEnter={() => {
          navGreenRef.current.style.height = "100%";
          navWhiteLine1.current.style.backgroundColor = "black";
          navWhiteLine2.current.style.backgroundColor = "black";
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = "0%";
          navWhiteLine1.current.style.backgroundColor = "white";
          navWhiteLine2.current.style.backgroundColor = "white";
        }}
        className="relative bg-black lg:h-[3.7vw] lg:w-[15.8vw] h-[12vw] w-[46vw]"
      >
        <div className="py-5 ">
          <div
            ref={navWhiteLine1}
            className="z-2 absolute right-8 h-[.135vw] w-15 bg-white"
          ></div>
          <div
            ref={navWhiteLine2}
            className="z-2 absolute right-8 h-[.135vw] w-8 mt-2 bg-white"
          ></div>
        </div>
        <div
          ref={navGreenRef}
          className="z-1 absolute transition-all bg-[#D3FD50] top-0 h-0 w-full "
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
