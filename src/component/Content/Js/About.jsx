// About.js
import React from 'react';
import '../Css/About.css'; 

function About() {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <img src="profile-pic.jpg" alt="Profile" className="profile-picture" />
                    <p className="bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tristique neque, ac fringilla libero. 
                        Phasellus sit amet felis vitae arcu vestibulum tincidunt.
                    </p>
                    <p className="bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tristique neque, ac fringilla libero. 
                        Phasellus sit amet felis vitae arcu vestibulum tincidunt.
                    </p>
                    <p className="bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tristique neque, ac fringilla libero. 
                        Phasellus sit amet felis vitae arcu vestibulum tincidunt.
                    </p>
                    <p className="bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tristique neque, ac fringilla libero. 
                        Phasellus sit amet felis vitae arcu vestibulum tincidunt.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
