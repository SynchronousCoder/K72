import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY;
    const elementCenterY = rect.top + rect.height / 2;

    // Determine direction: coming from above or below
    const fromAbove = mouseY < elementCenterY;

    const moveLink = e.currentTarget.querySelector(".moveLink");
    if (moveLink) {
      if (fromAbove) {
        // Coming from above - slide down from top
        moveLink.style.transform = "translateY(-100%)";
      } else {
        // Coming from below - slide up from bottom
        moveLink.style.transform = "translateY(100%)";
      }

      // Force reflow then animate to center
      moveLink.offsetHeight;
      setTimeout(() => {
        moveLink.style.transform = "translateY(0%)";
      }, 10);
    }
  };
  const handleMouseLeave = (e) => {
    const moveLink = e.currentTarget.querySelector(".moveLink");
    if (moveLink) {
      const rect = e.currentTarget.getBoundingClientRect();
      const mouseY = e.clientY;
      const elementCenterY = rect.top + rect.height / 2;

      // Exit in the direction mouse is leaving
      if (mouseY < elementCenterY) {
        // Leaving upward
        moveLink.style.transform = "translateY(-100%)";
      } else {
        // Leaving downward
        moveLink.style.transform = "translateY(100%)";
      }
    }
  };

  const fullNavLinkRef = useRef(null);
  const fullScreenRef = useRef(null);
  const [navOpen, setnavOpen] = useContext(NavbarContext);

  function gsapAnimation() {
    const tl = gsap.timeline();

    tl.to(".fullscreennav", {
      display: "block",
    });

    tl.to(".stairing", {
      delay: 0.3,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });

    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });

    tl.to(".navlink", {
      opacity: 1,
    },"-=.4");
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    // tl.to(".logo, .cross", {
    //   opacity: 0,
    //   y: -200
    // })

    tl.to(".stairing", {
      delay: 0.2,
      height: "0%",
      stagger: {
        amount: 0.1,
      },
    });

    tl.to(".navlink", {
      opacity: 0,
    },"-=.5");
    tl.to(".fullscreennav", {
      display: "none",
    });
  }
  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
        document.body.style.overflow = "hidden";
      } else {
        gsapAnimationReverse();
        document.body.style.overflow = "auto";
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreenNav"
      className="fullscreennav fixed top-0 left-0 h-screen w-screen z-[99] overflow-hidden"
    >
      <div className="h-screen w-full fixed lg:bg-transparent">
        <div className="h-full w-full flex gap-[0vw] ">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinkRef}>
        <div className="navlink flex w-full items-start justify-between p-2">
          <div className="logo w-32 z-[100]">
            <svg
              className="w-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 103 44"
            >
              <path
                fill="white"
                fillRule="evenodd"
                d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setnavOpen(false)}
            className=" relative lg:h-32 lg:w-32 h-20 w-20 cursor-pointer lg:scale-85 "
          >
            <div className=" absolute lg:h-[11rem] h-[7rem] lg:w-1 w-0.5 origin-top -rotate-45 bg-[#D3FD50]"></div>
            <div className=" absolute lg:h-[11rem] h-[7rem] lg:w-1 w-0.5 origin-top right-0 rotate-45 bg-[#D3FD50]"></div>
          </div>
        </div>

        <div className="lg:py-[1vw] py-[21vh] w-full h-fit">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="link origin-top relative border-t-1 border-white overflow-hidden"
          >
            <h1 className=" font-[font2] lg:font-normal lg:pt-0 lg:leading-[7.5vw] lg:text-[7vw] pt-2 text-[13vw] leading-[11vw] uppercase text-center ">
              Projects
            </h1>

            <div className="lg:opacity-100 opacity-0 moveLink absolute bg-[#D3FD50] text-black top-0 flex">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 lg:text-[7vw] text-[12vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour tout voir
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="link origin-top relative border-t-1 border-white overflow-hidden"
          >
            <h1 className=" font-[font2] lg:pt-0 lg:leading-[7.5vw] lg:text-[7vw] pt-2 text-[13vw] leading-[11vw] uppercase text-center ">
              agence
            </h1>

            <div className="lg:opacity-100 opacity-0 moveLink absolute bg-[#D3FD50] text-black top-0 flex">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/teamMembers/Claire_640X290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour tout savoir
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/teamMembers/Claire_640X290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="link origin-top relative border-t-1 border-white overflow-hidden"
          >
            <h1 className=" font-[font2] lg:pt-0 lg:leading-[7.5vw] lg:text-[7vw] pt-2 text-[13vw] leading-[11vw] uppercase text-center ">
              Contact
            </h1>

            <div className="lg:opacity-100 opacity-0 moveLink absolute bg-[#D3FD50] text-black top-0 flex">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour envoyer un fax
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour envoyer un fax
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour envoyer un fax
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  Pour envoyer un fax
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="link origin-topb relative border-y-1 border-white overflow-hidden"
          >
            <h1 className=" font-[font2] lg:pt-0 lg:leading-[7.5vw] lg:text-[7vw] pt-2 text-[13vw] leading-[11vw] uppercase text-center ">
              blogue
            </h1>

            <div className="lg:opacity-100 opacity-0 moveLink absolute bg-[#D3FD50] text-black top-0 flex">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  lire les articles
                </h2>
                <video
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  autoPlay
                  muted
                  loop
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  lire les articles
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  lire les articles
                </h2>
                <video
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  autoPlay
                  muted
                  loop
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] leading-[7.5vw] border-y-1 text-[7vw] uppercase">
                  lire les articles
                </h2>
                <img
                  className="h-[6vw] shrink-0 mx-4 px-4 w-[17vw] rounded-full object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
