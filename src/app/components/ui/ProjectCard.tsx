 import Download from "./Download"

interface ProjectCardProps {
  title: string;
  thumbnail: string;
  githubLink: string;
  deployLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, thumbnail, githubLink, deployLink }) => {
  return (
    <div className="flex flex-col">
      <h3>{title}</h3>
      <img src={thumbnail} alt={title} />
      <div className="flex">
        <Download fileSrc={githubLink} text="Github" />
        <Download fileSrc={deployLink} text="Deploy" />
      </div>
    </div>
  );
};


export default ProjectCard;