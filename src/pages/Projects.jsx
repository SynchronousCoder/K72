import React, { useEffect } from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
    },
  ];


  // useGSAP(function() {
  //   gsap.from('.hero', {
  //     height: "100px",
  //     stagger: {
  //       amount: 0.5
  //     },
  //     scrollTrigger: {
  //       trigger: '.lol',
  //       markers: true,
  //       start: "top 100%",
  //       end: "top -150%",
  //       scrub: true,
  //     }
  //   })
  // })
  // Add smooth scrolling to body
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  
  useGSAP(() => {
    // Create timeline for sequential animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-container',
        start: "top 80%",
        end: "bottom 20%",
        scrub: true, // Higher number = smoother
        // markers: true
      }
    });

    // Animate each hero element in sequence
    projects.forEach((_, index) => {
      tl.fromTo(`.hero-${index}`, 
        {
          height: "80px",
          opacity: 0.7
        },
        {
          height: "450px",
          opacity: 1,
          duration: .6,
          ease: "power2.out"
        },
        index * 0.3 // Stagger timing
      );
    });

  }, []);

  return (
    <div className="p-2">
      <div className="text-black lg:pt-[25vw] pt-[47vh] lg:p-2">
        <h2 className="font-[font2] lg:text-[13.5vw] text-[22vw] uppercase">Projets</h2>
      </div>

      <div className="projects-container -lg:mt-17">
        {projects.map(function (elem, idx) { 
          return (
            <div 
              key={idx} 
              className={`hero-${idx} w-full lg:h-[80px] flex lg:flex-row flex-col gap-4 mb-4 overflow-hidden transition-all duration-1000 ease-out`}
            >
              <ProjectCard img1={elem.image1} img2={elem.image2} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
