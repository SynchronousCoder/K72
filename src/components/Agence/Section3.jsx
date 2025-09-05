import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const section3Ref = useRef(null);
  const card1TextRef = useRef(null);
  const card2TextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple crossfade animation between card1 and card2 text
      gsap.timeline({
        scrollTrigger: {
          trigger: ".card2",
          start: "top 100vh", // Start when card2 enters viewport
          end: "top 40vh",    // End when card2 is well visible
          scrub: 2,           // Smooth scrubbing
          // markers: true,   // Remove this in production
        }
      })
      .to(card1TextRef.current, {
        opacity: 0,
        ease: "none"
      }, 0)
      .fromTo(card2TextRef.current, 
        { opacity: 0 }, 
        { 
          opacity: 1,
          ease: "none"
        }, 0.2); // Start card2 fade in slightly after card1 starts fading out

    }, section3Ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={section3Ref} className="section3 bg-black w-full relative min-h-screen">
      {/* Card 1 - Claire */}
      <div className="card1 sticky top-[15vh] w-full h-[70vh] relative overflow-hidden">
        
        {/* Card 1 Text Container - GSAP Target */}
        <div ref={card1TextRef} className="card1-text">
          {/* First Name Animation - FULL SCREEN */}
          <div className="absolute top-0 left-0 w-full h-auto overflow-hidden z-10">
            <div className="firstName flex whitespace-nowrap">
              <h2 className="font-[font2] lg:text-[15vw] text-[18vw] uppercase text-[#C6ED4B] mr-[30vw]">
                Claire
              </h2>
              <h2 className="font-[font2] lg:text-[15vw] text-[18vw] uppercase text-[#C6ED4B] mr-[30vw]">
                Claire
              </h2>
              <h2 className="font-[font2] lg:text-[15vw] text-[18vw] uppercase text-[#C6ED4B] mr-[30vw]">
                Claire
              </h2>
            </div>
          </div>
          
          {/* Last Name Animation - FULL SCREEN BOTTOM */}
          <div className="absolute bottom-10 left-0 w-full h-auto overflow-hidden z-10">
            <div className="lastName flex whitespace-nowrap">
              <h2 className="font-[font2] lg:text-[12vw] text-[15vw] uppercase text-[#C6ED4B] mr-[40vw] flex items-baseline">
                Robert{" "}
                <span className="font-[font2] lg:text-[4vw] text-[5vw] text-white ml-8">
                  conseillere
                </span>
              </h2>
              <h2 className="font-[font2] lg:text-[12vw] text-[15vw] uppercase text-[#C6ED4B] mr-[40vw] flex items-baseline">
                Robert{" "}
                <span className="font-[font2] lg:text-[4vw] text-[5vw] text-white ml-8">
                  conseillere
                </span>
              </h2>
            </div>
          </div>
        </div>
        
        {/* Claire Image - CENTER POSITION */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <img 
            className="lg:w-[400px] lg:h-[600px] object-cover rounded-lg shadow-lg" 
            src="https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg" 
            alt="Claire"
          />
        </div>
      </div>
      
      {/* SPACING FOR SCROLL EFFECT */}
      <div className="h-[100vh]"></div>
      
      {/* Card 2 - Maxime */}
      <div className="card2 sticky top-[15vh] w-full h-[70vh] relative overflow-hidden">
        
        {/* Card 2 Text Container - GSAP Target */}
        <div ref={card2TextRef} className="card2-text opacity-0">
          {/* First Name Animation - FULL SCREEN */}
          <div className="absolute top-0 left-0 w-full h-auto overflow-hidden z-10">
            <div className="firstName flex whitespace-nowrap">
              <h2 className="font-[font2] lg:text-[15vw] text-[18vw] uppercase text-[#C6ED4B] mr-[30vw]">
                Maxime
              </h2>
              <h2 className="font-[font2] lg:text-[15vw] text-[18vw] uppercase text-[#C6ED4B] mr-[30vw]">
                Maxime
              </h2>
            </div>
          </div>
          
          {/* Last Name Animation - FULL SCREEN BOTTOM */}
          <div className="absolute bottom-10 left-0 w-full h-auto overflow-hidden z-10">
            <div className="lastName flex whitespace-nowrap">
              <h2 className="font-[font2] lg:text-[12vw] text-[15vw] uppercase text-[#C6ED4B] mr-[40vw] flex items-baseline">
                Lavoie{" "}
                <span className="font-[font2] lg:text-[4vw] text-[5vw] text-white ml-8">
                  developer
                </span>
              </h2>
              <h2 className="font-[font2] lg:text-[12vw] text-[15vw] uppercase text-[#C6ED4B] mr-[40vw] flex items-baseline">
                Lavoie{" "}
                <span className="font-[font2] lg:text-[4vw] text-[5vw] text-white ml-8">
                  developer
                </span>
              </h2>
            </div>
          </div>
        </div>
        
        {/* Maxime Image - CENTER POSITION */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <img
            className="lg:w-[400px] lg:h-[600px]  object-cover rounded-lg shadow-lg"
            src="https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg"
            alt="Maxime"
          />
        </div>
      </div>
      
      {/* Final scrolling space */}
      <div className="h-[100vh]"></div>
    </div>
  );
};

export default Section3;