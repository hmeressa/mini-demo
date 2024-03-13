// Experience.js

import React from 'react';
import '../Css/Experience.css'; 
const Experience = ()=> {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="experience-content">
                     <div className="experience-item">
                        <h3 className="experience-title">Backend Developer</h3>
                        <p className="experience-date">Feb. 2023 - Present</p>
                       <p className="experience-description">
                            <a href="https://ienetworks.co/" target="_blank" rel="noopener noreferrer">IE Network Solutions</a> | Addis Abeba, Ethiopia
                       </p>

                        <p className="experience-description">
                          NodeJs (Express, Nest), Laravel, Jenkins, MySQL, PostgreSQL, Docker, RabbitMQ, DevOps.
                        </p>

                        <h3 className="experience-title">UI/UX Designer</h3>
                        <p className="experience-date">January 2017 - April 2019</p>
                        <p className="experience-description">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur.
                        </p>
                    </div>

                     <div className="experience-item">
                        <h3 className="experience-title">Full stack Web Developer</h3>
                        <p className="experience-date">Oct. 2022 - January 2023</p>
                       <p className="experience-description">
                            <a href="https://icladdis.com/" target="_blank" rel="noopener noreferrer">International Clinical Laboratory (ICL)</a> | Addis Abeba, Ethiopia
                       </p>
                        <p className="experience-description">
                            Laravel, Spring Boot, MySQL, ReactJs, Docker, Jenkins
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
