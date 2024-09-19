import './Projects.css'

export default function Projects() {

  const projects = [];

    return (
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <a href={project.link} className="live-demo btn m-2" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.repo} className="github-repo btn m-2" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    );
  }