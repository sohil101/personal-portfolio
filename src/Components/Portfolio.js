import React from 'react';
import img2 from "../Images/Myntra.png"
import img3 from "../Images/Rat in a maze.png"
import img4 from "../Images/Snake Game.png"
import img5 from "../Images/Dad joke Generater.png"
import img6 from "../Images/Expense-Tracker.png"
import img7 from "../Images/NGO.png"
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">My <span>Portfolio</span></h2>
      <div className="portfolio-container">
        <PortfolioItem
          image={img2}
          title="Project 1"
          description="Myntra App Clone."
          id="https://splendid-centaur-e9c540.netlify.app/"
        />
        <PortfolioItem
          image={img3}
          title="Project 2"
          description="Rat In a Maze."
          id="https://rat-in-a-maze2.netlify.app"
        />
        <PortfolioItem
          image={img4}
          title="Project 3"
          description="Snake Game."
          id="https://sanpkakhel.netlify.app"
        />
        <PortfolioItem
          image={img5}
          title="Project 4"
          description="Dad Joke Generater."
          id="https://dad-joke-genrator.netlify.app"
        />
        <PortfolioItem
          image={img6}
          title="Project 5"
          description="Expence Tracker."
          id="https://exprense-tracker.vercel.app/"
        />
        <PortfolioItem
          image={img7}
          title="Project 6"
          description="NGO Website."
          id="https://tangerine-marzipan-7b822b.netlify.app"
        />
      </div>
    </section>
  );
}

export default Portfolio;
