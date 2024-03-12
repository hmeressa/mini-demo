// Skills.js

import React from 'react';
import '../Css/Skill.css'; // Import CSS file for styling

function Skill() {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-content">
                    <div className="skill-item">
                        <h3 className="skill-title">Frontend Development</h3>
                        <p className="skill-description">
                            Proficient in HTML, CSS, and JavaScript. Experience with modern frontend frameworks like React.js.
                        </p>
                    </div>
                    <div className="skill-item">
                        <h3 className="skill-title">UI/UX Design</h3>
                        <p className="skill-description">
                            Familiar with design principles and tools such as Adobe XD and Sketch. 
                            Able to create user-friendly and visually appealing interfaces.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;
