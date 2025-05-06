import { Box, Chip } from "@mui/material"
const skillLabels = [
    'React',
    'TypeScript',
    'Javascript',
    'Nodejs',
    'ExpressJs',
    'HTML',
    'CSS'
]
function Skills() {
    return (
        <>
            <Box component="section" id='about' style={{ backgroundColor: "blueviolet" }}>
                {/* <section> */}
                <div className="about-container">
                    <h1>About me</h1>
                    <div className="skills-grid">
                        <div className="skill">
                            <p>
                                Have 13+ years of experience building scalable
                                web applications, specializing in React and modern JavaScript
                                frameworks with a focus on performance optimization and diagnostics.
                                Proven expertise in architecting reliable frontend solutions, debugging
                                complex production issues, and implementing security best practices.
                            </p>
                            {/*   <ul>
                            <li>
                              
                            </li>
                            <li>
                                <p>
                                    Proven expertise in architecting reliable frontend solutions, debugging
                                    complex production issues, and implementing security best practices.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Strong experience with CSS, pre-compilers, and responsive design
                                    principles to create intuitive user interfaces.
                                </p>
                            </li>
                        </ul> */}


                        </div>
                    </div>
                </div>
                {/* </section> */}
            </Box>
            <Box component="section" id="skills" className="skills-section">
                {/* <section style={{ backgroundColor: 'purple', padding: '5px' }}> */}
                <div className="skills-container">

                    <div className="skills-grid">
                        <div className="skill">

                            {/*   <ul>
                            <li>
                              
                            </li>
                            <li>
                                <p>
                                    Proven expertise in architecting reliable frontend solutions, debugging
                                    complex production issues, and implementing security best practices.
                                </p>
                            </li>
                            <li>
                                <p>
                                    Strong experience with CSS, pre-compilers, and responsive design
                                    principles to create intuitive user interfaces.
                                </p>
                            </li>
                        </ul> */}

                            <div className="flex-chips">
                                <span className="chip-title">Tech Stack:</span>
                                {skillLabels.map(skill => (
                                    <Chip label={skill} className="chip" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* </section> */}
            </Box >
        </>
    )
}

export default Skills