import ProjectCard from "./ui/ProjectCard";

import { PROJECT_ITEMS } from "./data/PROJECTS_DATA";


const Carousel = () => {
  return (
    <>
      <div>
        {PROJECT_ITEMS.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </>
  );
}; 

export default Carousel
