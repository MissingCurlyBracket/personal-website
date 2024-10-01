import React from "react";

interface ProjectItemProps {
    name: string;
    date: string;
    description: string;
    appliedSkills: string[];
}

export default function ProjectItem({
                                        name,
                                        date,
                                        description,
                                        appliedSkills
                                    }: ProjectItemProps) {
    return (
        <div className="project-item" key={name}>
            <h3>{name}</h3>
            <p>{date}</p>
            <p>{description}</p>
            <p>Applied skills: {appliedSkills.map((skill, index) => (
                <React.Fragment key={index}>
                    {skill}
                    {index !== appliedSkills.length - 1 && ', '}
                </React.Fragment>
            ))}</p>
        </div>
    );
}