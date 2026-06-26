import React from "react";
import "./project.css";

import qmsImg from "../assets/sf.png";
import weatherImg from "../assets/weater.png";
import hotelImg from "../assets/hotel.png";
import ecoImg from "../assets/eco.png";

export const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1 className="projects-title">My Projects</h1>

      <div className="projects-container">
        {/* Project 1 */}

        <div className="project-card">
          <img src={qmsImg} alt="project" />
          <a
            href="https://stayfinder-mu.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-content">
              <h3>Stay finder</h3>
              <p>
                StayFinder is a modern hotel booking platform that helps users
                discover, compare, and book comfortable stays with ease. It
                provides secure authentication, room management, booking
                requests, and an intuitive user experience for both travelers
                and property owners.  
              </p>
              <div className="tags">
                <span>React</span>
                
                <span>tailwind css</span>
                <span>node js</span>
                <span>express js</span>
                <span>mongoDB</span>
              </div>
            </div>
          </a>
        </div>

        <a
          href="https://harshitbhatt07.github.io/ecommerce/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-card">
            <img src={ecoImg} alt="project" />
            <div className="project-content">
              <h3>E-Commerce</h3>
              <p>
                I developed a responsive e-commerce website using only frontend
                technologies. It provides a clean UI and smooth user experience
                for online shopping.
              </p>
              <div className="tags">
                <span>React</span>
                <span>CSS</span>
              </div>
            </div>
          </div>
        </a>
       


       <div className="project-card">
          <img src={hotelImg} alt="project" />
          <a
            href="https://harshitbhatt07.github.io/HotelBookingWebsite/main.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-content">
              <h3>Hotel Green Palace</h3>
              <p>
                I created Hotel Green Palace, a responsive hotel booking website
                using frontend technologies. It provides an easy and smooth
                experience for room booking.
              </p>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
          </a>
        </div>



        {/* Project 2 */}
        <a
          href="https://harshitbhatt07.github.io/WeatherApp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="project-card">
            <img src={weatherImg} alt="project" />
            <div className="project-content">
              <h3>Weather App</h3>
              <p>
                A Weather App using an API fetches real-time weather data from
                online servers to display current conditions and forecasts.
              </p>
              <div className="tags">
                <span>React</span>
                <span>CSS</span>
                <span>API</span>
              </div>
            </div>
          </div>
        </a>

        {/* Project 3 */}
        
      </div>
    </section>
  );
};
