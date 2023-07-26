"use client"

interface ProjectProps {
    title: string,
    thumbnail: string,
    githubLink: string,
    deployLink: string,
}


const PROJECT_ITEMS: Array<ProjectProps> = [
    {
        title: "Rock, Paper, Scissors",
        thumbnail: "#",
        githubLink: "#",
        deployLink: "#"
    },
    {
        title: "MindNet",
        thumbnail: "#",
        githubLink: "#",
        deployLink: "#"
    },
    {
        title: "Etch-a-Sketch",
        thumbnail: "#",
        githubLink: "#",
        deployLink: "#"
    },

]

const Projects = () => {
    return (
      <div>
        {PROJECT_ITEMS.map((item, idx) => {
          return (
            <a className="hover:text-emerald-400 transition ease transform duration-300" key={idx}>
              {item.title}
            </a>
          );
        })}
      </div>
    );
  }
  