import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsPage() {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        <li>
          <Link to="/projects/project1">Project 1</Link>
        </li>
        <li>
          <Link to="/projects/project2">Project 2</Link>
        </li>
        <li>
          <Link to="/projects/project3">Project 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProjectsPage;
