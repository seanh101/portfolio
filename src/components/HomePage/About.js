import React from 'react';
import './About.css';

function About() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
        <h2 id="about">About Me</h2>
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
        <h2 id="projects">Projects</h2>
          <div className="project-grid">
            <div className="project-item">
            <h3 className="project-title">
                Couch Potato
                <a href="https://github.com/seanh101/couch-potato" target="_blank" rel="noopener noreferrer" className="github-icon-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://couchpotato.app" target="_blank" rel="noopener noreferrer" className="arrow-icon-link">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </h3>
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
            <h3 className="project-title">
                Soundify
                <a href="https://github.com/seanh101/Soundify" target="_blank" rel="noopener noreferrer" className="github-icon-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://soundify-ahje.onrender.com/" target="_blank" rel="noopener noreferrer" className="arrow-icon-link">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </h3>
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
            <h3 className="project-title">
                NBA Lineup Creator
                <a href="https://github.com/seanh101/NBA-Lineups" target="_blank" rel="noopener noreferrer" className="github-icon-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="PUT_DEPLOYED_LINK_HERE" target="_blank" rel="noopener noreferrer" className="arrow-icon-link">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </h3>
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
            <div className="project-item">
              <h3 className="project-title">
                Blackjack Game
                <a href="https://github.com/seanh101/Blackjack-game" target="_blank" rel="noopener noreferrer" className="github-icon-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://seanh101.github.io/Blackjack-game/" target="_blank" rel="noopener noreferrer" className="arrow-icon-link">
                  <i className="fas fa-arrow-right"></i>
                </a>
              </h3>
              <p>
                A fun Blackjack game built with JavaScript, HTML, and CSS, where you can test your luck and try to beat the dealer in this classic casino game!
              </p>
              <div className="skills-grid">
                <div className="skill-item">JavaScript</div>
                <div className="skill-item">HTML</div>
                <div className="skill-item">CSS</div>
                <div className="skill-item">Card Library</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-lg-8 offset-lg-2">
        <h2 id="contact">Contact Me</h2>
          <div className="contact-icons">
            <a href="mailto:seanharrington4189@gmail.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/sean-harrington-a543b013a/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;





