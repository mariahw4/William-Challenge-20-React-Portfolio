export default function Resume() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Git', 'GitHub', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD'];

    return (
        <div className="row">
        <div className="container my-4">
            <div className="button-section text-center mb-4">
                <a className="btn downloadbtn btn-secondary m-2" href="" download>Download Resume</a>
            </div>
        </div>
            <div className="row">
                <div className="col-12 col-lg-3 mb-4">
                    <aside>
                        <h3>Skills</h3>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </aside>
                </div>
                <div className="col-12 col-lg-9">
                    <h2>EXPERIENCE</h2>
                    <div className="experience">
                        <h4>Tesla | Vehicle Operator</h4>
                        <p>March 2024 - Present </p>
                        <p><span className="employment-italic">San Francisco, CA</span></p>
                        <p></p>
                    </div>
                    <div className="experience">
                        <h4>Waymo | Senior Process Executive - Data</h4>
                        <p>Jun 2023 - Oct 2023</p>
                        <p><span className="employment-italic">San Francisco, CA</span></p>
                        <p>Performed simulations on new software to find logic errors and problematic maneuvers in the autonomous driving vehicle</p>
                    </div>
                    <div className="experience">
                        <h4>Sutter Health | Desktop Technician</h4>
                        <p>Aug 2021 - Oct 2021</p>
                        <p><span className="employment-italic">San Francisco, CA</span></p>
                        <p>Imaged over 800+ sitewide machines across multiple campuses providing important security updates for all computers in the hospital, clinic, and medical offices</p>
                    </div>
                </div>
                <div className="col-12 col-lg-9">
                    <h2>EDUCATION</h2>
                    <div className="education">
                        <h4>San Jose State University, Bachelors of the Arts</h4>
                        <p>August 2017 - May 2020</p>
                        <p>Design Studies with a Minor in Advertising</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
