import React from 'react';
import img2 from './img2.png';
import img1 from './img1.png';

function Project1() {
  return (
    <div className="container project-container">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid project-image" src={img2} alt="Mobile Screenshot 1" />
          <img className="img-fluid project-image" src={img1} alt="Mobile Screenshot 2" />
        </div>
        <div className="col-md-6">
          <h2 className="project-title">Couch Potato</h2>
          <p className="project-description">
            Couch Potato is an application that helps you find where your favorite movies and shows are streaming. With so many streaming platforms available, it can be time-consuming to figure out which service has the content you want to watch. Couch Potato solves this problem by providing a centralized platform to search for movies and shows and find out where they are available.
          </p>
          <p className="project-tech">
            The app utilizes the MERN stack, combining MongoDB, Express.js, React.js, and Node.js to create a robust and efficient application. MongoDB is used for efficient data storage, allowing users to easily save and retrieve their favorite movies. The React.js frontend provides a seamless and intuitive user interface, making it easy to search for movies and shows. The Node.js backend with Express.js handles API requests and connects the different components of the application.
          </p>
          <p>
            Visit the deployed app at <a href="https://couchpotato.app" target="_blank" rel="noopener noreferrer">couchpotato.app</a> to start discovering your next movie or show to watch.
          </p>
          <p>
            Feel free to explore the source code of the Couch Potato app on GitHub to see how it was built and learn more about its features.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project1;



