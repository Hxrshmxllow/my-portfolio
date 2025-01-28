import React from "react";
import { skills } from "./data"; 
import "./skills.css";

function Skills() {
    return (
        <section id="skills">
            <div className="heading">
                <h1 className="skills_heading">Technical Skills</h1>
            </div>
            <div className="skills_container">
                {skills.map((skill) => (
                    <div className="skill_card" key={skill.name}>
                        <img
                            src={skill.image}
                            alt={`${skill.name} logo`}
                            className="skill_image"
                        />
                        <p className="skill_name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;