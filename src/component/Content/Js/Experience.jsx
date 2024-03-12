// Experience.js

import React from 'react';
import '../Css/Experience.css'; 
function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-content">
                     <div className="experience-item">
                        <h3 className="experience-title">Frontend Developer</h3>
                        <p className="experience-date">May 2019 - Present</p>
                        <p className="experience-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed quis tristique neque, ac fringilla libero.
                        </p>

                        <h3 className="experience-title">UI/UX Designer</h3>
                        <p className="experience-date">January 2017 - April 2019</p>
                        <p className="experience-description">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="experience-item">
                        <h3 className="experience-title">Frontend Developer</h3>
                        <p className="experience-date">May 2019 - Present</p>
                        <p className="experience-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Sed quis tristique neque, ac fringilla libero.
                        </p>
                        <h3 className="experience-title">UI/UX Designer</h3>
                        <p className="experience-date">January 2017 - April 2019</p>
                        <p className="experience-description">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
