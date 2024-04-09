import React from "react";
import img2 from "../Images/pic.png";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={img2} alt="profile" />
      </div>
      <div className="about-content">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
        <h3>Full Stack Developer</h3>
        <p>
        A passionate and skilled Fullstack Developer with expertise in Java, HTML,
        CSS, JavaScript, React.js, and Servlets. As a recent graduate, I possess
        strong knowledge in Data Structures and Algorithms, which enables me
        to build efficient and optimized solutions. I have hands-on experience in
        creating web applications and have successfully completed projects
        showcasing my abilities in both front-end and back-end development. I
        am eager to contribute my creativity, adaptability, and problem-solving
        skills to a dynamic development team.
        </p>
        <a href="#read_more" className="btn">
          Read More
        </a>
      </div>
    </section>
  );
};

export default About;
