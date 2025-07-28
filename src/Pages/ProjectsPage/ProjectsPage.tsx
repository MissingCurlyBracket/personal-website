import React, { useId } from 'react';
import data from './data.json';
import ProjectItem from './ProjectItem';
import './ProjectsPage.css';
import PageTitle from '../../Atoms/PageTitle/PageTitle';

export default function ProjectsPage() {
  const id = useId();
  return (
    <div className="projects-page">
      <PageTitle title={'Projects'} />
      <div className="projects">
        {data.map((project) => (
          <ProjectItem
            key={id}
            name={project.name}
            date={project.date}
            description={project.description}
            appliedSkills={project.skills}
          />
        ))}
      </div>
    </div>
  );
}
