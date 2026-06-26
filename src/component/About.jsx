import React from "react";
import "./About.css";
import profile from "../assets/mee4.jfif";

export const About = () => {
  return (
    <section className="about" id="aboutmee">
      <h1 className="about-title">
        <span>About Me</span>
      </h1>

      <div className="about-container">
        {/* Left Image */}
        <div className="about-image">
          <img src={profile} alt="Himanshu Bhatt" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <p className="intro">
            Hello! I'm <b>Himanshu Bhatt</b>, a passionate Full Stack Web
            Developer and a <b>Diploma in Information Technology (2026 Passout)</b>.
            I enjoy building modern, responsive, and user-friendly web
            applications using the MERN Stack. I am passionate about solving
            real-world problems through technology and continuously improving my
            development skills by working on practical projects.
          </p>

          <div className="info-box">
            <p>
              <b>Education:</b> Diploma in Information Technology (2026 Passout)
            </p>
          </div>

          <div className="info-box">
            <p>
              <b>Specialization:</b> MERN Stack Development (MongoDB, Express.js,
              React.js & Node.js)
            </p>
          </div>

          <div className="info-box">
            <p>
              <b>Strengths:</b> Problem Solving, Quick Learner, Teamwork,
              Communication & Adaptability
            </p>
          </div>

          <div className="info-box">
            <p>
              <b>Experience:</b> Developed multiple responsive web applications,
              portfolio websites, and full-stack projects using modern web
              technologies.
            </p>
          </div>

          <p className="goal">
            My goal is to become a skilled Full Stack Software Engineer and
            contribute to innovative, scalable, and high-performance web
            applications. I am always eager to learn new technologies, improve
            my coding skills, and deliver quality solutions that create a great
            user experience.
          </p>

          <button className="btn">Read More</button>
        </div>
      </div>
    </section>
  );
};