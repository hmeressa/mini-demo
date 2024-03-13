import React from 'react';
import '../Css/About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <img src="../img/testImage.png" alt="Profile" className="profile-picture" />
                    <div className="bio">
                        <p>
                            Hello, I'm <b>Hiluf Meressa,</b> a passionate and dedicated <b>Software Developer</b>. 
                            I have a strong background in <b>Software Engineering</b> and love crafting 
                            innovative solutions to complex problems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
