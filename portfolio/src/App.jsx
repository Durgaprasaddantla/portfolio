import React, { useState } from "react";
import "./App.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header>
      <div className="container">
        <h1 className="logo">Portfolio</h1>
        <nav>
          <ul className={`nav-links ${menuActive ? "active" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <button
            id="menu-toggle"
            className="hamburger"
            onClick={() => setMenuActive(!menuActive)}
          >
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="hero">
    <div className="hero-content">
      <h2>
        Welcome to <span className="animated-text">My Portfolio</span>
      </h2>
      <p>
        Hi! I am DANTlA DURGA PRASAD, a computer science student at JNTU GV
        passionate about coding, design, and technology!
      </p>
      <a href="#about" className="btn">
        Know More
      </a>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="about">
    <h2>About Me</h2>
    <p>
      I am a computer science enthusiast skilled in web development, algorithms,
      and problem-solving. I enjoy building innovative solutions.
    </p>
  </section>
);

const Projects = () => {
  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio showcasing technical skills, education and projects.",
    },
    {
      title: "Field Sales Tracking System",
      description:
        "Designed a frontend application using React.js and made Real-Time Monitoring, Expense and Attendance Tracking, Auto-generate Report.",
    },
    {
      title: "YouTube Clone Frontend",
      description:
        "Designed a clone for YouTube frontend using HTML and CSS as a static webpage.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="4"
          required
        ></textarea>
        <button type="submit" className="btn">
          Send
        </button>
      </form>
      <div className="social-icons">
        <a
          href="https://www.instagram.com/your_profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram icon"
          />
        </a>
        <a href="mailto:durgaprasaddantla123@gmail.com" aria-label="Email">
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
            alt="Email icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/durga-prasad-dantla"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn icon"
          />
        </a>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer>
    <p>&copy; Copyright @ 2025, All rights reserved.</p>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
