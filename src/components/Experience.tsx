import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Box } from '@mui/material';
function Experience() {
    return (
        <Box component="section">
            <div id='experience'>
                <div className="experience-container">
                    <h1>Experience</h1>
                    <VerticalTimeline>
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={{ background: 'beige', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.08) ' }}
                            date="2020 - present"
                            iconStyle={{ background: '#6E07F3', color: '#fff' }}
                            icon={<WorkHistoryIcon />}>
                            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">HCL America Inc., Client-Apple</h4>
                            <h4 className="vertical-timeline-element-subtitle">Sunnyvale, CA</h4>
                            <p>
                                Frontend Architecture, React Development, UI/UX Design, Performance Optimization, Cloud Migration,
                                Technical Mentorship
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.08) ' }}
                            date="2017 - 2020"
                            iconStyle={{ background: '#6E07F3', color: '#fff' }}
                            icon={<WorkHistoryIcon />}>
                            <h3 className="vertical-timeline-element-title">Technology Lead</h3>
                            <h4 className="vertical-timeline-element-subtitle">Infosys, Client-Apple</h4>
                            <h4 className="vertical-timeline-element-subtitle">Sunnyvale, CA</h4>
                            <p>
                                React Development, Frontend Performance Optimization
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.08) ' }}
                            date="2017 - 2020"
                            iconStyle={{ background: '#6E07F3', color: '#fff' }}
                            icon={<WorkHistoryIcon />}>
                            <h3 className="vertical-timeline-element-title">Technology Lead</h3>
                            <h4 className="vertical-timeline-element-subtitle">Infosys, Client-Apple</h4>
                            <h4 className="vertical-timeline-element-subtitle">Sunnyvale, CA</h4>
                            <p>
                                React Development, Frontend Performance Optimization
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.08) ' }}
                            date="2014 - 2016"
                            iconStyle={{ background: '#6E07F3', color: '#fff' }}
                            icon={<WorkHistoryIcon />}>
                            <h3 className="vertical-timeline-element-title">Technology Analyst</h3>
                            <h4 className="vertical-timeline-element-subtitle">Infosys, Client-Apple</h4>
                            <h4 className="vertical-timeline-element-subtitle">Bangalore, India</h4>
                            <p>
                                React Development, Frontend Performance Optimization
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.08) ' }}
                            date="2011 - 2013"
                            iconStyle={{ background: '#6E07F3', color: '#fff' }}
                            icon={<WorkHistoryIcon />}>
                            <h3 className="vertical-timeline-element-title">Senior Systems Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Infosys, Client-Apple</h4>
                            <h4 className="vertical-timeline-element-subtitle">Chennai, India</h4>
                            <p>
                                React Development, Frontend Performance Optimization
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement className="vertical-timeline-element--work"
                            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
                            contentArrowStyle={{ borderRight: '7px solid rgba(0, 0, 0, 0.08) ' }}
                            date="2011 - 2011"
                            iconStyle={{ background: '#6E07F3', color: '#fff' }}
                            icon={<WorkHistoryIcon />}>
                            <h3 className="vertical-timeline-element-title">Intern,</h3>
                            <h4 className="vertical-timeline-element-subtitle">Infosys</h4>
                            <h4 className="vertical-timeline-element-subtitle">Mysore, India</h4>
                            <p>
                                React Development, Frontend Performance Optimization
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </Box>
    )
}

export default Experience