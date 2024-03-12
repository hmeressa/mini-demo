// Contact.js

import React from 'react';
import '../Css/Contact.css'; // Import CSS file for styling

function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Contact</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <div className="contact-item">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className="contact-item">
                            <label htmlFor="email">Email:</label>
                            <input type="text" id="email" name="email" />
                        </div>
                        <div className="contact-item">
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message"></textarea>
                        </div>
                        <button className="contact-submit" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
