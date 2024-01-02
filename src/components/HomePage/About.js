import React from 'react';
import './About.css';
import { useState } from 'react';

function About() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [showFullAbout, setShowFullAbout] = useState(false);

  const openPopup = (imagePath) => {
    setCurrentImage(imagePath);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const toggleFullAbout = () => {
    setShowFullAbout(!showFullAbout);
  };

  return (
    <div className="about-container">
      
      <h2 id="about">About Me</h2>
      <section className="about-me">
         {showFullAbout ? (
          <p>
        <p>
          Hi there! I'm Sean Harrington, a software engineer with a background in tech sales and a passion for building innovative solutions. I bring a unique blend of sales expertise and technical acumen, allowing me to bridge the gap between business objectives and cutting-edge technology.
        </p>
        <p>
          With experience in JavaScript, React.js, Python, Django, and more, I have the skills to tackle challenging problems and deliver high-quality code. I thrive on attention to detail, effective communication, and a user-centric mindset to create solutions that meet both technical requirements and user needs.
        </p>
        <p>
          Recently, I have been working as an intern under Digitizing.io on their CryptoSports Project - a fantasy football app on the blockchain. Specifically, I have created a full-stack trivia matching game that allows user to test their knowledge of fantasy football while keeping track of their stats on the backend.
        </p>
        <p>
          During my journey as a software engineer, I've worked on several other exciting projects. Let me highlight a few of them:
        </p>
        <div className="toggle-button" onClick={toggleFullAbout}>
              <i className="fas fa-chevron-up"></i> {/* Upward arrow for 'Show Less' */}
            </div>
        </p>
        ) : (
          <p>
              <p>
          Hi there! I'm Sean Harrington, a software engineer with a background in tech sales and a passion for building innovative solutions. I bring a unique blend of sales expertise and technical acumen, allowing me to bridge the gap between business objectives and cutting-edge technology.
        </p>
        <div className="toggle-button" onClick={toggleFullAbout}>
              <i className="fas fa-chevron-down"></i> {/* Downward arrow for 'Show More' */}
            </div>
          </p>
        )}
      </section>

      <section className="professional-projects">
        <h2 id="professional-projects">Professional Projects</h2>
        <div className="project-grid">
     
          <div className="project-item">
            <h3 className="project-title">
              The Gridiron
              <a href="https://game.playcryptosports.com/gridiron" target="_blank" rel="noopener noreferrer" className="arrow-icon-link">
                <i className="fas fa-arrow-right"></i>
              </a>
            </h3>
            <div
            className="project-image"
            style={{ backgroundImage: 'url(/gridiron.png)' }}
            onClick={() => openPopup('/gridiron.png')}
          ></div>
            <p>
              A full-stack trivia/puzzle mini-game for fans of NFL and fantasy football. Test your player knowledge against different teams and player knowledge. Keep track of your stats and share results with friends.
            </p>
            <div className="skills-grid">
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">HTML</div>
              <div className="skill-item">TypeScript</div>
              <div className="skill-item">React</div>
              <div className="skill-item">Next.js</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">PostgreSQL</div>
              <div className="skill-item">SportsData API</div>
            </div>
          </div>

         
          
        </div>
      </section>

      {/* Personal Projects Section */}
      <section className="projects">
        <h2 id="projects">Personal Projects</h2>
        <div className="project-grid">
          {/* Couch Potato */}
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
            <div
            className="project-image"
            style={{ backgroundImage: 'url(/couchpotato.png)' }}
            onClick={() => openPopup('/couchpotato.png')}
          ></div>
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

          {/* Soundify */}
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
            <div
            className="project-image"
            style={{ backgroundImage: 'url(/soundify.jpeg)' }}
            onClick={() => openPopup('/soundify.jpeg')}
          ></div>
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

          {/* NBA Lineup Creator */}
          <div className="project-item">
            <h3 className="project-title">
              NBA Lineup Creator
              <a href="https://github.com/seanh101/NBA-Lineups" target="_blank" rel="noopener noreferrer" className="github-icon-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://nbaplayertracker.fly.dev" target="_blank" rel="noopener noreferrer" className="arrow-icon-link">
                <i className="fas fa-arrow-right"></i>
              </a>
            </h3>
            <div
            className="project-image"
            style={{ backgroundImage: 'url(/nbatracker.jpeg)' }}
            onClick={() => openPopup('/nbatracker.jpeg')}
          ></div>
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

          {/* Blackjack Game */}
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
            <div
            className="project-image"
            style={{ backgroundImage: 'url(/blackjack.png)' }}
            onClick={() => openPopup('/blackjack.png')}
          ></div>
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
      </section>

      {/* Local Websites Section */}
      <section className="local-websites">
        <h2 id="local-websites">Local Websites</h2>
        <div className="project-grid">
          {/* Technical Skateshop */}
          <div className="project-item">
            <h3 className="project-title">
              Technical Skateshop
              <a href="https://github.com/seanh101/technical" target="_blank" rel="noopener noreferrer" className="github-icon-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://dashboard.render.com/static/srv-ciotgctgkuvrtoankme0" target="_blank" rel="noopener noreferrer" className="arrow-icon-link">
                <i className="fas fa-arrow-right"></i>
              </a>
            </h3>
            <p>
              Website for a local skate shop with gallery images, contact, and location info.
            </p>
            <div className="skills-grid">
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">HTML</div>
              <div className="skill-item">CSS</div>
            </div>
          </div>

          {/* Mallard Oil */}
          <div className="project-item">
            <h3 className="project-title">
              Mallard Oil
              <a href="https://github.com/seanh101/mallard-oil" target="_blank" rel="noopener noreferrer" className="github-icon-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://dashboard.render.com/static/srv-ckjfq1j6fquc7392ieb0" target="_blank" rel="noopener noreferrer" className="arrow-icon-link">
                <i className="fas fa-arrow-right"></i>
              </a>
            </h3>
            <p>
              Website for a local heating oil delivery company, complete with images, location and contact info.
            </p>
            <div className="skills-grid">
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">HTML</div>
              <div className="skill-item">CSS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2 id="contact">Contact Me</h2>
        <div className="contact-icons">
          <a href="mailto:seanharrington4189@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/sean-harrington-a543b013a/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </section>
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <img src={currentImage} alt="Expanded" />
          </div>
        </div>
      )}
    </div>
  );
}

export default About;






