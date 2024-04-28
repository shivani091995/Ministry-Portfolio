import React from 'react';
import Image1 from "../assets/def1.webp";
import Image2 from "../assets/def2.jpg";
import Image3 from "../assets/fin2.webp";
import Image4 from "../assets/fin1.jpeg";
import Image5 from "../assets/edu1.avif";
import Image6 from "../assets/edu2.jpg";
import "./Homecontent.css";

const HomeContent = () => {
    return (
        <div className="homecontent">
            {/* <h1>Finance</h1> */}
            <p>
            </p>
            <div className="first-des">
                <div className='des-text'>
                    <h2>Defence</h2>
                    <p>
                    In the realm of defence, we are committed to advancing operational efficiency and readiness. Our initiatives include:
                    <ul>
                        <li>An intuitive online examination platform for recruitment processes.</li>
                        <li>Comprehensive equipment management systems for centralized control.</li>
                        <li>Emergency alert systems for swift communication and response coordination.</li>
                    </ul>
                    Explore the innovative solutions that safeguard our nation.

                    </p>
                </div>
                <div className='image'>
                    <img alt='imghome' src={Image1}></img>
                    <img alt='imghome' src={Image2}></img>

                </div>
            </div>
            
            {/* <div className="first-des-reverse">
                <div className='des-text'>
                    <h2>Finance</h2>
                    <p>Navigate the complexities of financial management with our dedicated resources and programs. We strive to:
                        <ul>
                            <li>Enhance financial literacy among our personnel.</li>
                            <li>Provide robust financial tools and guidance for informed decision-making.</li>
                            <li>Ensure the financial well-being of our professionals.</li>
                        </ul>
                    Discover how we're shaping a financially secure future for our community.
                    </p>
                </div>
                <div className='image'>
                    <img alt='imghome' src={Image3}></img>
                    <img alt='imghome' src={Image4}></img>

                </div>
            </div> */}
            
            {/* <h1>Defence</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, vitae sunt beatae deserunt
                temporibus dolorum blanditiis adipisci tempore exercitationem expedita provident distinctio dignissimos,
                eligendi quisquam suscipit placeat aut. Placeat, aspernatur?
            </p> */}
            <div className="first-des-reverse">
                <div className='des-text'>
                    <h2>Education</h2>
                    <p>Knowledge is the bedrock of progress. Our educational initiatives are designed to:
                        <ul>
                            <li>Equip personnel with specialized training tailored to their roles.</li>
                            <li>Foster continuous learning and professional development.</li>
                            <li>Provide the tools necessary for success in diverse domains.</li>
                        </ul>
                   
                    Join us in building a knowledgeable and skilled force for the challenges of tomorrow.

                    </p>
                </div>
                <div className='image'>
                    <img alt='imghome' src={Image5}></img>
                    <img alt='imghome' src={Image6}></img>

                </div>
            </div>
        </div>
    );
};

export default HomeContent;
