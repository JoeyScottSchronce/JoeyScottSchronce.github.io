import React from 'react';

function Starter() {

//    let recommendation = document.getElementById("new_recommendation");
//    // If the user has left a recommendation, display a pop-up
//    if (recommendation.value != null && recommendation.value.trim() !== "") {
//        console.log("New recommendation added");
//        //Call showPopup here
//        showPopup(true);
//    }
//
//    // Get the message of the new recommendation
//
//    // Create a new 'recommendation' element and set its value to the user's message
//    let element = document.createElement("div");
//    element.setAttribute("class","recommendation");
//    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
//    // Add this element to the end of the list of recommendations
//    document.getElementById("all_recommendations").appendChild(element);
//
//    // Reset the value of the textarea
//    recommendation.value = "";
//
//    function showPopup(bool) {
//        if (bool) {
//            document.getElementById('popup').style.visibility = 'visible'
//        } else {
//            document.getElementById('popup').style.visibility = 'hidden'
//        }
//    }

        return (
            <div>
                <div className="top"></div>
                {/* About Me */}
                <section id="about-me" className="container">
                    <div>
                        <img
                            src="/assets/Professional%20Photo%20(2020).jpg"
                            className="profile_image"
                            alt="photo of Joey Schronce"
                        />
                    </div>
                    <div>
                        <h1 className="title">
                            Hi! Welcome to <br/> my portfolio {' '}
                            <img src="/assets/waving-hand.png" alt="waving hand" width="60px" />
                        </h1>
                    </div>
                </section>
                <div className="main-p">
                    <p>
                        I'm in the process of developing a strong foundation in Web Development and Software Engineering. I am excited to
                        embark on a fulfilling journey where I can continuously learn and grow while making meaningful contributions. I am
                        seeking an entry-level position in one of these fields and I'm eager to apply my growing knowledge and skills to
                        begin my new career.
                    </p>
                </div>

                {/* Skills */}
                <section id="skills">
                    <h2>Skills</h2>
                    <div style={{ clear: 'both' }}></div>

                    <div className="all_skills">
                        <div className="skill">
                            <img src="/assets/html5.png" alt="html logo" />
                            <h6>HTML</h6>
                            <p>4 months</p>
                        </div>

                        <div className="skill">
                            <img src="/assets/CSS3.png" alt="css logo" />
                            <h6>CSS</h6>
                            <p>4 months</p>
                        </div>

                        <div className="skill">
                            <img src="/assets/js.jpeg" alt="javascript logo" />
                            <h6>JavaScript</h6>
                            <p>4 months</p>
                        </div>

                        <div className="skill">
                            <img src="/assets/react.png" alt="react logo" />
                            <h6>React</h6>
                            <p>1 month</p>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="projects" id="projects">
                    <h2>Projects</h2>
                    <div style={{ clear: 'both' }}></div>

                    <div id="projects-container" className="projects-container">
                        <div className="project-card">
                            <h3>Speed Reader Program</h3>
                            <ul>
                                <li>
                                    I developed a speed reading Windows program using Python and the Tinker library. It allows you to upload text
                                    from a file or the clipboard, then it displays one word at a time. It has several features including a go and
                                    back button, slow down and speed up buttons, and even displays a percentage of 'text completed' as you read.
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="project-card">
                            <h3>Unit Conversions website</h3>
                            <ul>
                                <li>
                                    I developed a 'unit conversion' website, using HTML, CSS, and javascript, that converts temperature, weight,
                                    and distance. It changes Celsius to Fahrenheit, Kilograms to Pounds, and Kilometers to Miles.
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="project-card">
                            <h3>Simple Interest Calculator</h3>
                            <ul>
                                <li>
                                    I developed a simple interest calculator that takes an amount, a rate, and a year, then returns a statement: "If
                                    you deposit an amount, at an interest rate of rate %, You will receive an amount of total, in the year
                                    timeline".
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div style={{ clear: 'both' }}></div>

                {/* Recommendations */}
                <section id="recommendations">
                    <h2>Recommendations</h2>
                    <div style={{ clear: 'both' }}></div>
                    <div className="all_recommendations" id="all_recommendations">
                        <div className="recommendation">
                            <span>&#8220;</span>
                            Hi, I'm John Monroe, Lead Software Engineer at Warren Inc. Working with Joey was a game-changer for our team. His
                            deep understanding of AI and software engineering, combined with a knack for innovative solutions, truly set him
                            apart.
                            <span>&#8221;</span>
                        </div>
                        <div className="recommendation">
                            <span>&#8220;</span>
                            I'm Sara, Senior Web Developer at Finn Tech. Joey consistently demonstrated exceptional skill in web development and
                            a thorough understanding of best practices. His contributions significantly improved our project's structure and
                            performance.
                            <span>&#8221;</span>
                        </div>
                        <div className="recommendation">
                            <span>&#8220;</span>
                            Hey, I'm Bruno Mars, singer and songwriter. Joey is a standout in the realm of generative AI and Python development.
                            His expertise drove our sound project forward, blending creativity with precision to deliver "The Funk".
                            <span>&#8221;</span>
                        </div>
                    </div>
                </section>

                {/* Recommendation Form */}
                <section id="contact">
                    <div className="flex_center">
                        <fieldset>
                            <legend className="introduction">Leave a Recommendation</legend>
                            <input type="text" placeholder="Name (Optional)" /> <br />
                            <textarea id="new_recommendation" cols="500" rows="10" placeholder="Message"></textarea>
                            <div className="flex_center">
                                <button id="recommend_btn" onClick={() => addRecommendation()}>Submit</button>
                            </div>
                        </fieldset>
                    </div>
                </section>

                <div className="iconbutton">
                    <a href="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="white"
                            width="63px"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </a>
                </div>

                <div id="popup" className="flex_center">
                    <img src="" alt="checkmark" />
                    <h3> Thank you for your recommendation! </h3>
                </div>
            </div>
        );
    }

export default Starter