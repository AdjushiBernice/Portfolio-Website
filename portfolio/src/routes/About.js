import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg2";
import HeroImg2 from "../components/HeroImg2";
const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="ABOUT ME." text="Hello! I am Adjushi Akpevwe Favour,a Node.js developer with experience in TypeScript, React, MongoDB, GraphQL, Express.js, Docker, and JavaScript.
          I am passionate about building scalable, reliable, and performant applications that meet the needs of my clients and users.
          My expertise in TypeScript allows me to create well-structured and maintainable codebases, while my experience with React and MongoDB enables me to build intuitive and dynamic user interfaces and scalable database solutions, respectively. I am proficient in using GraphQL to build efficient and flexible APIs that can retrieve data from multiple sources, providing a seamless and responsive user experience.
          Furthermore, my knowledge of Express.js allows me to create robust server-side applications that can handle high traffic loads, while my experience with Docker enables me to containerize and deploy applications more efficiently.
          I am a proactive problem solver who loves to learn new technologies and apply them to my work. I take pride in delivering clean, efficient, and maintainable code that meets my clients' needs. I am also a great team player and enjoy collaborating with others to achieve common goals.
          I am always looking for new challenges and opportunities to grow my skills as a developer." />
      <Footer />
    </div>
  );
};

export default About;
