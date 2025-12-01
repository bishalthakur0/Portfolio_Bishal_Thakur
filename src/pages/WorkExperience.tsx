import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';


const WorkExperience: React.FC = () => {

  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>([
    {
      timelineType: 'work',
      name: 'Softinfo Dynamics Solutions',
      title: 'Technical Consultant',
      techStack: 'X++, C#, Azure, D365 F&O, REST APIs, SQL, Git, CI/CD',
      summaryPoints: ['Engineered and customized backend workflows using X++ and C#, improving module performance and reducing recurring production issues by 30%', 'Optimized REST API integrations, Azure connectors, and background processes, improving data sync reliability by 25%', 'Automated deployment/debugging flows using Azure DevOps + Git, reducing turnaround time for hotfixes by 40%'],
      dateRange: 'Oct 2025 – Present'
    },
    {
      timelineType: 'work',
      name: 'Yours Technology',
      title: 'Software Developer Intern',
      techStack: 'ReactJS, JavaScript, REST APIs, GitHub Actions, CI/CD',
      summaryPoints: ['Developed and optimized React + REST API integrations, resolving 95% of frontend-backend bugs', 'Built reusable UI components that increased maintainability and reduced sprint delivery time by 20%', 'Improved CI/CD pipelines using GitHub Actions, cutting deployment failures by 35%'],
      dateRange: 'Jan 2024 – May 2024'
    },
    {
      timelineType: 'work',
      name: 'Medhavart Systems',
      title: 'Data Analytics Intern',
      techStack: 'SQL, Python, ETL, Power BI, Linux',
      summaryPoints: ['Developed robust SQL-based ETL pipelines on Linux, improving data throughput by 40%', 'Automated data-processing scripts in Python, cutting execution time by 75%', 'Built Power BI dashboards that improved decision-making speed by 30%'],
      dateRange: 'Jul 2023 – Sep 2023'
    },
    {
      timelineType: 'education',
      name: 'Jain (Deemed-to-be University), Bengaluru',
      title: 'B.Tech — Computer Science & Engineering',
      techStack: '',
      summaryPoints: ['CGPA: 8.4 / 10', 'Awarded Study in India Scholarship — top 5% among 10,000+ applicants'],
      dateRange: 'Sep 2021 – Jul 2025'
    }
  ]);

  // useEffect(() => {
  //   async function fetchTimelineItem() {
  //     const data = await getTimeline();
  //     setTimeLineData(data);
  //   }
  //   fetchTimelineItem();
  // }, []);


  if (!timeLineData) return <div>Loading...</div>;
  console.log("🚀 ~ timeLineData:", timeLineData)

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' } // Lighter red for education
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' } // Softer red for education icon
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
