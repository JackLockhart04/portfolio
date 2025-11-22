import React from "react";
import "./courseGenius.css";

const CourseGenius: React.FC = () => {
  return (
    <div className="courseGeniusContainer">
      <h1 className="title">CourseGenius.free.nf (In development)</h1>
      <div className="imageSection">
        <img
          src={`${process.env.PUBLIC_URL}/assets/projects/course-genius/courseGenius.png`}
          alt="Project"
          className="projectImage"
        />
      </div>
      <div className="linkSection">
        <a
          href="https://www.coursegenius.free.nf/"
          className="projectLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit CourseGenius.free.nf
        </a>
        <a
          href="https://github.com/JackLockhart04/course-genius"
          className="projectLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
      <div className="descriptionContainer">
        <p>
          Course Genius is a web application that I am creating to help myself
          and other students organize everything about their courses better.
          Course Genius is going to be used to track how students are doing in
          courses with customizable letter grade ranges, letter grade GPA
          values, and plan ahead using a flow chart.
        </p>
        <p>
          I created the backend in Java using SpringBoot and deploying to AWS
          Lambda which worked great with AWS API Gateway but I did not like the
          costs of API Gateway so I switched to CloudFront due to its generous
          forever free tier. I could not get Spring boot to work with CloudFront
          because the data was not in the correct format so I created my own API
          handler in Java. This also allowed my build to be much smaller than
          when I used SpringBoot. I also set up a MySql database on a free
          Oracle Cloud virtual machine to store necessary data. The frontend is
          pretty simple so far and is built in React.
        </p>
        <p>
          So far this project has been a lot easier than other stuff I have
          built because I was organized and planned most of the stuff out before
          coding. It is more complicated on the backend but with a plan of how
          everything should work, it is pretty easy to implement.
        </p>
      </div>
    </div>
  );
};

export default CourseGenius;
