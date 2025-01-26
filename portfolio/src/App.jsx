import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./components/ui/Card";
import { Button } from "./components/ui/Button";
import "./App.css"; // Import the custom CSS file

const App = () => {
  return (
    <div className="app-container">
      {/* Cover Page */}
      <header className="header">
        <div className="header-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="header-title"
          >
            Portfolio of Dantla Durga Prasad
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="header-subtitle"
          >
            "Creating innovative solutions through code and creativity."
          </motion.p>
        </div>
      </header>

      {/* Personal Information */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section"
      >
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            I am a passionate Software developer with expertise in building
            responsive web applications. My strengths include problem-solving,
            attention to detail, and creativity.
          </p>
          <ul className="contact-list">
            <li>Email: durgaprasaddantla123@gmail.com</li>
            <li>Phone: 7396979744</li>
            <li>
              Socials:{" "}
              <a href="#" className="social-link">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </motion.section>

      {/* Projects Showcase */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="projects-section"
      >
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {["Field Sales Tracking System"].map((project) => (
              <motion.div
                key={project}
                whileHover={{ scale: 1.05 }}
                className="project-card"
              >
                <Card>
                  <CardContent>
                    <h3 className="project-title">{project}</h3>
                    <p className="project-description">
                      A system designed to improve field sales operations with
                      real-time tracking and reporting features.
                    </p>
                    <Button className="project-button">View Details</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Goals */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="section"
      >
        <div className="container">
          <h2 className="section-title">Goals</h2>
          <h3 className="goal-subtitle">Short-Term Goals</h3>
          <ul className="goal-list">
            <li>Master advanced ReactJS.</li>
            <li>Build and deploy a personal blog site.</li>
            <li>Improve my time management skills.</li>
          </ul>

          <h3 className="goal-subtitle">Long-Term Goals</h3>
          <ul className="goal-list">
            <li>Become a lead software developer.</li>
            <li>Launch a tech startup.</li>
            <li>Contribute actively to open-source projects.</li>
          </ul>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Dantla Durga Prasad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
