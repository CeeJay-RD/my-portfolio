import ProjectCard from "./ui/ProjectCard";
import { PROJECT_ITEMS } from "./data/PROJECTS_DATA";


const Carousel = () => {
  return (
    <>
        <div className="flex flex-col md:flex md:flex-row mt-5 gap-10 pb-14">
        {PROJECT_ITEMS.map((project, idx) => {
          return <ProjectCard {...project} key={idx}/>;
        })}
      </div>
    </>
  );
}; 

export default Carousel
