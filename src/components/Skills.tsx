import { Avatar, Box, Chip } from "@mui/material"
import ReactLogo from '../assets/react-logo-svg.svg'
import htmlLogo from '../assets/w3_html5-icon.svg'
import csssLogo from '../assets/w3_css-official.svg'
import JsLogo from '../assets/javascript-logo.svg'
import TSLogo from '../assets/typescriptlang-icon.svg'
import NodeLogo from '../assets/nodejs-icon.svg'
import expressLogo from '../assets/expressjs-icon.svg'
const skillLabels = [
    'React',
    'TypeScript',
    'Javascript',
    'Nodejs',
    'ExpressJs',
    'HTML',
    'CSS'
]
const skillLogos = {
    'React': ReactLogo,
    'TypeScript': TSLogo,
    'Javascript': JsLogo,
    'Nodejs': NodeLogo,
    'ExpressJs': expressLogo,
    'HTML': htmlLogo,
    'CSS': csssLogo
};
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
                                Building state-of-art, ease of use web applications is truly a passion of mine.
                            </p>
                            <p>
                                Have 13+ years of experience building scalable
                                web applications, specializing in React and modern JavaScript
                                frameworks with a focus on performance optimization and diagnostics.</p>
                            <p>
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
                <div className="skills-container" >

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
                            <div className="skillset-title">
                                <h1>Skill Set</h1>
                            </div>
                            <div className="flex-chips">

                                {skillLabels.map(skill => (
                                    <>
                                        <Chip label={skill} className="chip" avatar={<Avatar src={skillLogos[skill]} />} />
                                    </>
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