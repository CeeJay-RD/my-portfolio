import ProjectCard from "./ui/ProjectCard";

import { PROJECT_ITEMS } from "./data/PROJECTS_DATA";


const Carousel = () => {
  return (
    <>
      <div className="flex mt-5 gap-10">
        {PROJECT_ITEMS.map((project) => {
          return <ProjectCard {...project}/>;
        })}
      </div>
    </>
  );
}; 

export default Carousel
