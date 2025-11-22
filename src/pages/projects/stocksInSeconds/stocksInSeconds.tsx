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
      <div className="linkSection">
        <a
          href="https://www.StocksInSeconds.com/"
          className="projectLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit stocksinseconds.com
        </a>
      </div>
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
          it somewhere. I did research and decided that AWS was the best fit due
          to its generous free tier of Lambda, API Gateway, and DynamoDB. I
          spent a lot of time learning how AWS works and how to deploy my code
          easily and efficiently. I then created the authentication system using
          Microsoft msal. This created multiple issues that I had to learn about
          such as how cookies work and and safaris strict cookie policy. The
          backend being hosted on a different domain than the frontend messed up
          the cookies so I had to figure out how to use AWS to use a sub domain
          of the website. I finally had to setup payment using stripe to make it
          easy and secure.
        </p>
        <p>
          Overall I learned a lot about many aspects of web development. I had a
          lot of practice with each of the technologies due to my learning
          mistakes along with shifts in the requirements. I feel as though I am
          fairly proficient in python and javascript now but still have plenty
          of learning to do with AWS and depoloyment in general.
        </p>
      </div>
    </div>
  );
};

export default StocksInSeconds;
