import React, { ReactElement } from 'react';

export interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  description: string;
  appliedSkills: string[];
}

export default function ExperienceItem({
  company,
  position,
  period,
  description,
  appliedSkills,
}: ExperienceItemProps): ReactElement {
  return (
    <div className="experience-item" key={company}>
      <h3>{company}</h3>
      <p>{position}</p>
      <p>{period}</p>
      <p>{description}</p>
      <p>
        Applied skills:{' '}
        {appliedSkills.map((skill, index) => (
          <React.Fragment key={index}>
            {skill}
            {index !== appliedSkills.length - 1 && ', '}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
