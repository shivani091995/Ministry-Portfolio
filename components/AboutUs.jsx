import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-container">
            <h1>Welcome to Our Integrated Platform</h1>
            <p>
                Explore the diverse facets of our operations, seamlessly woven together to serve you better.
                At our integrated platform, we focus on excellence in three key areas:
            </p>

            <div className="section">
                <h2>1. Finance</h2>
                <p>
                    Navigate the complexities of financial management with our dedicated resources and programs.
                    We strive to:
                </p>
                <ul>
                    <li>Enhance financial literacy among our personnel.</li>
                    <li>Provide robust financial tools and guidance for informed decision-making.</li>
                    <li>Ensure the financial well-being of our professionals.</li>
                </ul>
                <p>Discover how we're shaping a financially secure future for our community.</p>
            </div>

            <div className="section">
                <h2>2. Defence</h2>
                <p>
                    In the realm of defence, we are committed to advancing operational efficiency and readiness.
                    Our initiatives include:
                </p>
                <ul>
                    <li>An intuitive online examination platform for recruitment processes.</li>
                    <li>Comprehensive equipment management systems for centralized control.</li>
                    <li>Emergency alert systems for swift communication and response coordination.</li>
                </ul>
                <p>Explore the innovative solutions that safeguard our nation.</p>
            </div>

            <div className="section">
                <h2>3. Education</h2>
                <p>
                    Knowledge is the bedrock of progress. Our educational initiatives are designed to:
                </p>
                <ul>
                    <li>Equip personnel with specialized training tailored to their roles.</li>
                    <li>Foster continuous learning and professional development.</li>
                    <li>Provide the tools necessary for success in diverse domains.</li>
                </ul>
                <p>Join us in building a knowledgeable and skilled force for the challenges of tomorrow.</p>
            </div>

            <div className="section">
                <h2>Get Involved</h2>
                <p>
                    Ready to be a part of our mission? Explore the comprehensive systems, educational programs,
                    and financial resources we offer. For more information or inquiries, contact us.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;
