import data from './data.json';
import React from "react";
import './ExperiencePage.css';
import ExperienceItem from "./ExperienceItem";

export default function ExperiencePage() {
    return (
        <div className="experience-page">
            <h2>Experience</h2>
            <div className="experiences">
                {data.map((experience) => (
                    <ExperienceItem company={experience.company} position={experience.position}
                                    period={experience.period}
                                    description={experience.description} appliedSkills={experience.skills}/>
                ))}
            </div>
        </div>
    );
}