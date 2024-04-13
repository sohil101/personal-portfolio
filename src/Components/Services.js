import React from 'react';
import ServiceBox from './ServiceBox';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
        <ServiceBox
          iconClass="bx bx-code"
          title="Web Development"
          description="Bringing your vision to life with meticulously crafted websites that blend creativity, functionality, and user experience seamlessly."
        />
        <ServiceBox
          iconClass="bx bx-paint"
          title="UI/UX Design"
          description="From wireframes to pixel-perfect designs, I specialize in creating intuitive and visually appealing interfaces that captivate users and enhance usability."
        />
        <ServiceBox
          iconClass="bx bx-mobile"
          title="Java Development"
          description="Harness the power of Java to develop high-performance backend solutions and server-side logic, ensuring seamless functionality and reliability."
        />
      </div>
    </section>
  );
}

export default Services;
