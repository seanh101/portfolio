import React from 'react';
import { Link } from 'react-router-dom';

function ProjectsPage() {
  return (
    <div>
      <h2>Projects</h2>
      <ul>
        <li>
          <Link to="/projects/project1">Couch Potato</Link>
        </li>
        <li>
          <Link to="/projects/project2">Soundify</Link>
        </li>
        <li>
          <Link to="/projects/project3">BlackJack</Link>
        </li>
      </ul>
    </div>
  );
}

export default ProjectsPage;
