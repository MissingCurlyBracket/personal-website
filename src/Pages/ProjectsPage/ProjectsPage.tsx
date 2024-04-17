import React from 'react';
import data from './data.json'

export default function ProjectsPage() {
    return (
        <div className="projects-page">
            <h2>Projects</h2>
            {data.map((project) => (
                <div key={project.name}>
                    <h3>{project.name}</h3>
                    <p>{project.date}</p>
                    <p>{project.description}</p>
                    <p>Applied skills: {project.skills.map((skill, index) => (
                        <React.Fragment key={index}>
                            {skill}
                            {index !== project.skills.length - 1 && ', '}
                        </React.Fragment>
                    ))}</p>
                </div>
            ))}
        </div>
    );
}