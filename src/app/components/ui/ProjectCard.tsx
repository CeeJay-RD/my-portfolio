 import Download from "./Download"

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  githubLink: string;
  deployLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, thumbnail, githubLink, deployLink }) => {
  return (
    <div className="flex flex-col bg-slate-600 rounded-md p-7">
      <p className=" text-p font-bold">{title}</p>
      <img src={thumbnail} alt={title} className=" w-[20rem] h-[20rem]"/>
      <div className="flex">
        <Download fileSrc={githubLink} text="Github" />
        <Download fileSrc={deployLink} text="Deploy" />
      </div>
    </div>
  );
};


export default ProjectCard;