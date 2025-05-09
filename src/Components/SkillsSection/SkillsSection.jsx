import React from "react";
import "./SkillsSection.css"

function SkillsSection() {
    return (
        <div id="SkillsSection">

            {/* Skills */}
            <section>
                <h2>Skills</h2>
                <div style={{ clear: 'both' }}></div>

                <div className="all_skills">
                    <div className="skill">
                        <img src="/assets/python.jpg" alt="Python logo" />
                        <h6>Python</h6>
                        <p>Duration?</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/flask.png" alt="Flask logo" />
                        <h6>Flask</h6>
                        <p>Duration?</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/Django.jpg" alt="Django logo" />
                        <h6>Django</h6>
                        <p>Duration?</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/Docker.png" alt="Docker logo" />
                        <h6>Docker</h6>
                        <p>duration</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/Kubernetes.jpg" alt="Kubernetes logo" />
                        <h6>Kubernetes</h6>
                        <p>duration</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/Openshift.jpg" alt="Openshift logo" />
                        <h6>Openshift</h6>
                        <p>duration</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/MongoDB.jpg" alt="MognoDB logo" />
                        <h6>MongoDB</h6>
                        <p>duration</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/Tekton.png" alt="Tekton logo" />
                        <h6>Tekton</h6>
                        <p>duration</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/IBM%20Cloud.jpg" alt="IBM Cloud logo" />
                        <h6>IBM Cloud</h6>
                        <p>duration</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/GitHub.png" alt="GitHub logo" />
                        <h6>GitHub</h6>
                        <p>duration</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/react.png" alt="react logo" />
                        <h6>React</h6>
                        <p>1 month</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/Vite.png" alt="Vite logo" />
                        <h6>Vite</h6>
                        <p>duration?</p>
                    </div>

                    <div className="skill">
                        <img src="/assets/Bootstrap.png" alt="Bootstrap logo" />
                        <h6>Bootstrap</h6>
                        <p>duration?</p>
                    </div>

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
                </div>
            </section>
        </div>
    )
}

export default SkillsSection;