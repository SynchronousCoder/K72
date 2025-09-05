import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { useRef } from "react";

const MainAgence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null); // Add container ref
  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top -20%",
        end: "top -170%",
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        pin: imageDivRef.current,
        onUpdate: function (elem) {
          let imageIdx;

          if (elem.progress < 1) {
            imageIdx = Math.floor(elem.progress * imageArray.length);
            imageRef.current.src = imageArray[imageIdx];
          } else {
            elem.progress = imageArray.length - 1;
          }
        },
      },
    });
  });



  return (
    <div className="lg:mb-40 lg:overflow-visible overflow-hidden ">
      <div ref={containerRef} className="section1 relative py-1">
        <div
          ref={imageDivRef}
          className="absolute lg:h-[20vw] lg:w-[15vw] lg:rounded-3xl h-[28vw] w-[20vw] rounded-xl lg:top-[30vh] -top-[-20vh] left-[30vw]  overflow-hidden"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
          />
        </div>
        <div className="relative text-black font-[font2] ">
          <div className="lg:mt-[57vh] mt-[25vh]">
            <h1 className="text-[20vw] uppercase leading-[17vw] text-center">
              Soixan7e <br />
              Douze
            </h1>
          </div>

          <div className="lg:pl-[40%] mt-20 lg:px-4 px-3">
            <p className="lg:text-5xl text-[1.2rem] lg:leading-none leading-[6.5vw] lg:font-normal font-semibold ">
              &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre
              curiosité nourrit notre créativité. On reste humbles et on dit non
              aux gros egos, même le vôtre. Une marque es t vivante. Elle a des
              valeurs, unepersonnalité, une histoire. Si on oublie ça, on peut
              faire de bons chiffres à court terme, mais on la tue à long terme.
              C’est pour ça qu’on s’engage à donner de la perspective, pour
              bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAgence;
