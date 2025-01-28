import React from "react";
import "./projects.css";
import { projects } from "./data";

function Projects() {
    return (
        <section id="projects">
            <div className="heading">
                <h1 className="projects_heading">Projects I've Built</h1>
            </div>
            <div className="projects_container">
                {projects.map((project) => (
                    <a
                        href={project.link}
                        key={project.image || project.video}
                        className="project-card"
                    >
                        <div className="project_content">
                            {project.video ? (
                                <video
                                    src={project.video}
                                    className="project_video"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project_image"
                                />
                            )}
                            <p>{project.title}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Projects;