// Projects.js

import React from 'react';
import '../Css/Project.css'; // Import CSS file for styling

function Project() {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-content">
                    <div className="project-item">
                        <h3 className="project-title">Project 1</h3>
                        <p className="project-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed quis tristique neque, ac fringilla libero.
                        </p>
                    </div>
                    <div className="project-item">
                        <h3 className="project-title">Project 2</h3>
                        <p className="project-description">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Project;
