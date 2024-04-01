import React from "react";

export interface ProjectProps {
    name: string;
    date: Date
    description: string;
    skills: string[]
}

export default function Project({name, date, description, skills}: ProjectProps) {
    return (
        <div className="project">
            <h2>{name}</h2>
            <p>{date.toDateString()}</p>
            <p>{description}</p>
            <p>Applied skills: {skills.map((skill, index) => (
                <React.Fragment key={index}>
                    {skill}
                    {index !== skills.length - 1 && ', '}
                </React.Fragment>
            ))}</p>
        </div>
    );
}