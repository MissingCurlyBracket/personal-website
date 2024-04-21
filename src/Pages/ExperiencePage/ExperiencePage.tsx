import data from './data.json';
import React from "react";

export default function ExperiencePage() {
    return (
        <div className="experience-page">
            <h2>Experience</h2>
            {data.map((experience) => (
                <div key={experience.company}>
                    <h3>{experience.company}</h3>
                    <p>{experience.position}</p>
                    <p>{experience.period}</p>
                    <p>{experience.description}</p>
                    <p>Applied skills: {experience.skills.map((skill, index) => (
                        <React.Fragment key={index}>
                            {skill}
                            {index !== experience.skills.length - 1 && ', '}
                        </React.Fragment>
                    ))}</p>
                </div>
            ))}
        </div>
    );
}