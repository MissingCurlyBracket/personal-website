import data from './data.json';
import React, { useId } from 'react';
import './ExperiencePage.css';
import ExperienceItem from './ExperienceItem';
import PageTitle from '../../Atoms/PageTitle/PageTitle';

export default function ExperiencePage() {
  const id = useId();

  return (
    <div className="experience-page">
      <PageTitle title={'Experience'} />
      <div className="experiences">
        {data.map((experience) => (
          <ExperienceItem
            key={id}
            company={experience.company}
            position={experience.position}
            period={experience.period}
            description={experience.description}
            appliedSkills={experience.skills}
          />
        ))}
      </div>
    </div>
  );
}
