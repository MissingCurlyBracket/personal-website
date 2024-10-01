import React from 'react';
import data from './data.json'
import ProjectItem from "./ProjectItem";
import './ProjectsPage.css';
import ItemTitle from "../../Atoms/ItemTitle/ItemTitle";

export default function ProjectsPage() {
    return (
        <div className="projects-page">
            <ItemTitle title={"Projects"}/>
            <div className="projects">
                {data.map((project) => (
                    <ProjectItem name={project.name} date={project.date} description={project.description}
                                 appliedSkills={project.skills}/>
                ))}
            </div>
        </div>
    );
}