// Profile.js

import React from 'react';
import '../Css/Profile.css'; // Import CSS file for styling

function Profile() {
    return (
        <section id="profile" className="profile-section">
            <div className="container">
                <h2 className="section-title">Profile</h2>
                <div className="profile-content">
                    <img src="../img/testImage.png" alt="Profile" className="profile-picture" />
                    <p className="profile-bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed quis tristique neque, ac fringilla libero.
                    </p>
                     <p className="profile-bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed quis tristique neque, ac fringilla libero.
                    </p>
                     <p className="profile-bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed quis tristique neque, ac fringilla libero.
                    </p>
                     <p className="profile-bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed quis tristique neque, ac fringilla libero.
                    </p>
                     <p className="profile-bio">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed quis tristique neque, ac fringilla libero.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Profile;
