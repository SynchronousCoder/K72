import React from "react";

const ProjectCard = ({ img1, img2 }) => {
  return (
    <>
      <div className="relative lg:w-1/2 group h-full hover:rounded-[2rem] overflow-hidden transition-all duration-300">
        <img className=" h-full w-full object-cover" src={img1} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center w-full h-full left-0 bg-black/15">
          <h2 className="uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full">
            Voir le Projet
          </h2>
        </div>
      </div>

      <div className="relative lg:w-1/2 group h-full hover:rounded-[2rem] overflow-hidden transition-all duration-300">
        <img className=" h-full w-full object-cover" src={img2} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center w-full h-full left-0 bg-black/15">
          <h2 className="uppercase text-6xl font-[font1] border-4 pt-4 px-8 text-white border-white rounded-full">
            Voir le Projet
          </h2>
        </div> 
      </div>
    </>
  );
};

export default ProjectCard;
