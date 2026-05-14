import React from "react";
import "./stocksInSeconds.css";

const StocksInSeconds: React.FC = () => {
  return (
    <div className="stocksInSecondsContainer">
      <h1 className="title">StocksInSeconds.com (Taken offline)</h1>
      <div className="imageSection">
        <img
          src={`${process.env.PUBLIC_URL}/assets/projects/stocks-in-seconds/stocksInSeconds.png`}
          alt="Project"
          className="projectImage"
        />
      </div>
      {/* <div className="linkSection">
        <a
          href="https://www.StocksInSeconds.com/"
          className="projectLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit stocksinseconds.com
        </a>
      </div> */}
      <div className="descriptionContainer">
        <p>
          StocksInSeconds.com is a website for a startup company. I developed
          the backend along with the communications on the frontend. I was able
          to use my knowledge of python and javascript but I had to learn many
          technologies for this project such as Flask API, some AWS, NoSQL, user
          authentication and authorization, cookies, domains, and more.
        </p>
        <p>
          I created the backend in python Flask then realized I needed to host
          it somewhere. I did research and decided that AWS was the best fit for my scenaria.
		  The code development was somewhat simple but the other parts such as SSL/TLS certificates 
		  were more challenging because I did not know how to do most of it. I had to learn about how 
		  authentication works, cookies, HTTPS and SSL/TLS certificates, DNS management, cloud computing, and 
		  basic security concepts. Each of these topics helped me learn a lot about web development and 
		  how to make a secure website.
        </p>
        <p>
          Overall I learned a lot about many aspects of web development. Obviously, I learned some about
		  site development and deployment, but more importantly I learned about lots of security concepts.
		  This project got me interested in penetration testing and ethical hacking
		  after all the research I had to do about web security. I am proud of how this project turned out, 
		  but sadly it was taken offline by the owners due to a lack of time to develop the other parts
		  of the business.
        </p>
      </div>
    </div>
  );
};

export default StocksInSeconds;
