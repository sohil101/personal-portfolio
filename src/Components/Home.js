/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import img1 from  ".././Images/pic.png"
const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Sohil Khan</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>Graduate | Full-Stack Dev Enthusiast | Strategic Problem-Solver | Passionate About Programming & Innovation</p>
        <div className="social-media">
          <a href="#twitter"><i className='bx bxl-twitter'></i></a>
          <a href="#instagram"><i className='bx bxl-instagram'></i></a>
          <a href="https://github.com/Sohil101"><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/sohil101/"><i className='bx bxl-linkedin'></i></a>
        </div>
        <a href="https://drive.google.com/file/d/1o7uTCOEpWkCtPDfyzUlTS2Z0Qx7_o6KI/view?usp=sharing" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <img src={img1} alt="profile" />
      </div>
    </section>
  );
}

export default Home;
