import React from 'react';

function Starter() {

        return (
            <div>

                {/* Skills */}
                <section id="Skills">
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
            </div>
        );
    }

export default Starter