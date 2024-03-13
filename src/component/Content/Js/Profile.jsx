import React from 'react';
import '../Css/Profile.css'; // Import CSS file for styling

const Profile = () => {
    return (
        <section id="profile" className="profile-section">
            <div className="container">
                <h2 className="section-title">Profile</h2>
                <div className="profile-content">
                    <div className="profile-links">
                        <a href="https://github.com/hmeressa" target="_blank" rel="noopener noreferrer">
                                <img src="../img/github.png" alt="Git Hub" className="skill-icon" title="Git Hub" />
                        </a>
                        <a href="https://www.linkedin.com/in/hmeressa/" target="_blank" rel="noopener noreferrer">
                                <img src="../img/linkedin.png" alt="Linkedin" className="skill-icon" title="Linked in" />
                        </a>
                        <a href="https://stackoverflow.com/users/20614075/hmeressa" target="_blank" rel="noopener noreferrer">
                                <img src="../img/stackoverflow.png" alt="Stack overflow" className="skill-icon" title="Stack Overflow" />
                        </a>
                        <a href="https://leetcode.com/hmkahsay" target="_blank" rel="noopener noreferrer">
                                <img src="../img/leetcode.jpeg" alt="Leetcode" className="skill-icon" title="Leetcode" />
                        </a>
                        <a href="hmkahsay@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src="../img/gmail.png" alt="GMAIL" className="skill-icon" title="GMAIL" />
                        </a>
                         <a href="../file/Hiluf Meressa Kahsay-1.pdf" target="_blank" rel="noopener noreferrer">
                                <img src="../img/cv.png" alt="CV" className="skill-icon" title="CV" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
