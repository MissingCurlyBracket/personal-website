import data from './data.json';
import React from "react";
import './ExperiencePage.css';
import ExperienceItem from "./ExperienceItem";
import ItemTitle from "../../Atoms/ItemTitle/ItemTitle";

export default function ExperiencePage() {
    return (
        <div className="experience-page">
            <ItemTitle title={"Experience"}/>
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