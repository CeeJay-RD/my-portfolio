"use client"

interface ProjectProps {
    title: string,
    thumbnail: string,
    githubLink: string,
    deployLink: string,
}

const Projects: React.FC<ProjectProps> = ({ title, thumbnail, githubLink, deployLink }) => {
    return (
        <div>
            <h3>{title}</h3>
            <img src={thumbnail} alt={title + "project-image"} />
            <div>
                <a href={githubLink}>Github</a>
                <a href={deployLink}>Deploy</a>
            </div>
        </div>
    )
}