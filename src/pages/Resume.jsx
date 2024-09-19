const Resume = () => {
    const skills = [
        "HTML", "CSS", "JavaScript", "MERN Stack", "MongoDB", "Express.js",
        "React.js", "Node.js", "GraphQL", "Sequelize", "PostgreSQL", "Adobe Illustrator",
        "Figma", "Sketch", "Adobe XD", "Adobe CC", "Adobe Photoshop", 
    ];

    const proficiencies = [
        "Creativity", "Time management", "Problem solving", "Leadership",
        "Attention to detail", "Initiative", "Communication",
        "Strategic thinking", "Adaptability", "Team player", "Conflict resolution"
    ];

    const experiences = [
        {
            title: "Tesla | Vehicle Operator",
            period: "March 2024 - Present",
            location: "San Francisco, CA",
            description: ""
        },
        {
            title: "Waymo | Senior Process Executive - Data",
            period: "Jun 2023 - Oct 2023",
            location: "San Francisco, CA",
            description: "Performed simulations on new software to find logic errors and problematic maneuvers in the autonomous driving vehicle"
        },
        {
            title: "Sutter Health | Desktop Technician",
            period: "Aug 2021 - Oct 2021",
            location: "San Francisco, CA",
            description: "Imaged over 800+ sitewide machines across multiple campuses providing important security updates for all computers in the hospital, clinic, and medical offices"
        }
    ];

    return (
        <div className="container my-4 position-relative">
            <div className="text-center mb-4">
                <a className="btn btn-danger position-absolute top-0 end-0" href="./src/assets/Resume 1130.pdf" download>
                    Download Resume
                </a>
            </div>

            <div className="row">
                <div className="col-12 col-lg-3 mb-4">
                    <aside>
                        <h4>Skills</h4>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </aside>
                    <br></br>
                    <aside>
                        <h4>Soft Skills</h4>
                        <ul>
                            {proficiencies.map((prof, index) => (
                                <li key={index}>{prof}</li>
                            ))}
                        </ul>
                    </aside>
                </div>

                <div className="col-12 col-lg-9">
                    <section>
                        <h2 style={{ color: 'red', fontWeight: 'bold' }}>Experience</h2>
                        {experiences.map((exp, index) => (
                            <div key={index} className="mb-4">
                                <h4>{exp.title}</h4>
                                <p>{exp.period}</p>
                                <p><em>{exp.location}</em></p>
                                {exp.description && <p>{exp.description}</p>}
                            </div>
                        ))}
                    </section>

                    <section>
                        <h2 style={{ color: 'red', fontWeight: 'bold' }}>Education</h2>
                        <div>
                            <h5>San Jose State University, Bachelor of Arts</h5>
                            <p>August 2017 - May 2020</p>
                            <p>Design Studies with a Minor in Advertising</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Resume;
