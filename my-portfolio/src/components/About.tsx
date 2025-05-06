import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from '../assets/Prakash.png'
import { Box } from '@mui/material';
function About() {
    return (
        <Box component="section">
            <div className="container">
                <div className="about-section">
                    <div className="image-wrapper">
                        <img src={profilePic} />
                    </div>
                    <div className="content">
                        <div className="linkedin_icon">
                            <a href="https://www.linkedin.com/in/prakash-sathiakumar-29761526/" target="_blank" rel="noreferrer"> <LinkedInIcon /></a>
                        </div>
                        <h1>Prakash Sathiakumar</h1>
                        <p>Front End Engineer</p>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default About