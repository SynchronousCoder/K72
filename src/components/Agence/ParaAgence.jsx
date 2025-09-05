import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const ParaAgence = () => {

  const containerScreen = useRef(null);
  useGSAP(function () {
    gsap.to(containerScreen.current, {
      backgroundColor: "black",
      scrollTrigger: {
        trigger: containerScreen.current,
        // markers: true,
        start: "52% 50%",
        end: "52% 49%",
        scrub: 2,
      },
    });
  });
  useGSAP(function () {
    gsap.to(".section2 .col1 p, .section2 .col2 p", {
      color: "white",
      scrollTrigger: {
        trigger: ".section2",
        // markers: true,
        start: "52% 50%",
        end: "52% 49%",
        scrub: 1,
      },
    });
  });
  return (
    <>
      <div ref={containerScreen} className="section2 h-screen w-full lg:pt-10 pt-20 bg-white">
        <div className="h-[100%] w-[100%] lg:px-[15vh] px-[1vh]">
          <div className="col1 flex w-full h-[30vh] gap-4">
            <div className="text-black lg:w-1/3 w-1/2  font-[font2] lg:text-[1.5vw] text-xl ">
              <p>Expertise</p>
            </div>
            <div className="text-black lg:w-1/3 w-1/2  font-[font2] lg:text-[1.5vw] text-xl ">
              <p>Stratégie</p>
              <p>Publicité</p>
              <p> Branding</p>
              <p> Design</p>
            </div>
            <div className=" lg:w-1/3  w-0"></div>
          </div>

          <div className="col2 flex lg:flex-row flex-col w-full h-[30vh] gap-4">
            <div className="text-black lg:w-1/3 w-[100%]  font-[font2] lg:text-[1.5vw] text-xl ">
              <p>
                Nos projets_ naissent dans l’humilité, grandissent dans la
                curiosité et vivent grâce à la créativité sous toutes ses
                formes.
              </p>
            </div>
            <div className="text-black lg:w-1/3 w-[100%]  font-[font2] lg:text-[1.5vw] text-xl ">
              <p>
                Notre création_ bouillonne dans un environnement où le talent a
                le goût d’exploser. Où on se sent libre d’être la meilleure
                version de soi-même.
              </p>
            </div>
            <div className=" text-black lg:w-1/3 w-[100%]  font-[font2] lg:text-[1.5vw] text-xl">
              <p>
                Notre culture_ c’est l’ouverture aux autres. Point. Tout
                l’équipage participe à bâtir une agence dont on est fiers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParaAgence;
