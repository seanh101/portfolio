// About.js

import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h2>About Me</h2>
          <p>
            Hi there! I'm Sean Harrington, a software engineer with a background in tech sales and a passion for building innovative solutions. I bring a unique blend of sales expertise and technical acumen, allowing me to bridge the gap between business objectives and cutting-edge technology.
          </p>
          <p>
            With experience in JavaScript, React.js, Python, Django, and more, I have the skills to tackle challenging problems and deliver high-quality code. I thrive on attention to detail, effective communication, and a user-centric mindset to create solutions that meet both technical requirements and user needs.
          </p>
          <p>
            During my journey as a software engineer, I've worked on several exciting projects. Let me highlight a few of them:
          </p>
          
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-8 offset-lg-2">
          <h2>Projects</h2>
          <div className="project-grid">
            <div className="project-item">
              <h3>Couch Potato</h3>
              <p>
                Built using the MERN stack, Couch Potato is an application that allows users to search for movies and shows and find out where they are streaming. It features efficient data storage using MongoDB and a seamless user experience.
              </p>
              <div className="skills-grid">
                <div className="skill-item">MERN Stack</div>
                <div className="skill-item">Watchmode API</div>
                <div className="skill-item">Movieofthenight API</div>
                <div className="skill-item">React</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">CSS</div>
              </div>
            </div>
            <div className="project-item">
              <h3>Soundify</h3>
              <p>
                Soundify is a playlist and song management web app developed with Django and Python. It offers full CRUD functionality for playlists and songs, authentication and authorization using Django's built-in system, and integration with the Spotify API for song information.
              </p>
              <div className="skills-grid">
                <div className="skill-item">Django</div>
                <div className="skill-item">Python</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">HTML</div>
                <div className="skill-item">CSS</div>
                <div className="skill-item">PostgreSQL</div>
                <div className="skill-item">Trello</div>
                <div className="skill-item">Git</div>
                <div className="skill-item">AWS</div>
                <div className="skill-item">Spotify API</div>
              </div>
            </div>
            <div className="project-item">
              <h3>NBA Lineup Creator</h3>
              <p>
                The NBA Lineup Creator is a web app built with Node.js, Express, and MongoDB. It allows users to create and manage their own NBA lineups using real player data from the balldontlie API.
              </p>
              <div className="skills-grid">
                <div className="skill-item">Node.js</div>
                <div className="skill-item">Express</div>
                <div className="skill-item">Mongoose</div>
                <div className="skill-item">MongoDB</div>
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">HTML/CSS</div>
                <div className="skill-item">Balldontlie API</div>
                <div className="skill-item">Git</div>
                <div className="skill-item">Trello</div>
                <div className="skill-item">0auth</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-8 offset-lg-2">
          <h2>Contact Me</h2>
          <p>
            Thank you for visiting my portfolio website. Feel free to reach out via email (<a href="mailto:seanharrington4189@gmail.com">seanharrington4189@gmail.com</a>) or phone (<a href="tel:+16178428804">(617) 842.8804</a>) to discuss potential collaborations or job opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;



