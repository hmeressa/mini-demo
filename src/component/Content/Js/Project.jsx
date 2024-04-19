// Projects.js

import React from 'react';
import '../Css/Project.css'; // Import CSS file for styling

const Project = ()=> {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-content">
                    <div className="project-item">
                        <div className="project-item">
    <h3 className="project-title">Supply Chain Management (SCM)</h3>
    <p className="project-description">
        Supply Chain Management (SCM) is a comprehensive software solution aimed at optimizing logistics, inventory management, and procurement processes. It provides businesses with a robust platform to streamline their supply chain operations, improve efficiency, and reduce costs.
        <br/><br/>
        This project utilizes a combination of modern technologies to deliver its functionalities. On the backend, it leverages the Laravel framework and On the frontend, the project employs React
        <br/><br/>
        Together, Laravel and React form a powerful tech stack that drives the Supply Chain Management project, providing businesses with an efficient and effective solution for managing their supply chain operations.
    </p>
</div>

                    </div>
                   <div className="project-item">
    <h3 className="project-title">Service Desk (SD)</h3>
    <p className="project-description">
        The Service Desk (SD) project is a sophisticated software solution designed to efficiently manage service requests, track incidents, and facilitate communication between users and support staff.
        <br/><br/>
        This project plays a critical role in ensuring seamless operation and support within an organization. It enables users to submit service requests, report incidents, and seek assistance from the support team. Meanwhile, support staff can efficiently manage and resolve these requests, ensuring minimal disruption to business operations.
        <br/><br/>
        Leveraging Node.js with Express.js, the SD project boasts a scalable and robust backend infrastructure. Node.js provides a lightweight and efficient runtime environment for building server-side applications, while Express.js simplifies the development of web applications with its minimalist and flexible framework.
        <br/><br/>
        On the frontend, the project harnesses the power of React, a JavaScript library renowned for its ability to create dynamic and interactive user interfaces. With React, users can seamlessly interact with the service desk platform, submit requests, and track the status of their incidents in real-time.
        <br/><br/>
        Together, Node.js, Express.js, and React form a formidable tech stack that drives the Service Desk project, delivering a seamless and efficient solution for managing service requests and incidents within an organization.
    </p>
</div>


                    <div className="project-item">
    <h3 className="project-title">Project Management (PM)</h3>
    <p className="project-description">
        The Project Management (PM) project offers a comprehensive solution for planning, organizing, and tracking project progress. It serves as a vital tool for businesses and organizations to efficiently manage their projects, allocate resources, and monitor milestones.
        <br/><br/>
        This project is designed to streamline the project management process, providing users with the necessary tools and features to effectively oversee their projects from start to finish. It enables users to create project plans, assign tasks, set deadlines, and monitor the progress of each task in real-time.
        <br/><br/>
        Developed with React on the frontend and Node.js with Express.js on the backend, the PM project boasts a modern and powerful tech stack. React enhances the user experience by delivering a dynamic and interactive interface, allowing users to navigate the project management platform with ease and efficiency.
        <br/><br/>
        On the backend, Node.js with Express.js provides a robust and scalable infrastructure for handling the project management operations. Node.js offers a lightweight and efficient runtime environment, while Express.js simplifies the development of RESTful APIs and server-side logic.
        <br/><br/>
        Together, React on the frontend and Node.js with Express.js on the backend form a cohesive and efficient tech stack that drives the Project Management project, empowering businesses to effectively manage their projects and achieve their goals.
    </p>
</div>

                </div>
            </div>
        </section>
    );
}

export default Project;
