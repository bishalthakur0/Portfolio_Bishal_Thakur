import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
};


const Skills: React.FC = () => {

  const [skills, setSkills] = useState<Skill[]>([
    // Programming Languages
    { name: 'Java', category: 'Programming Languages', description: 'Core language for backend development', icon: 'FaJava' },
    { name: 'Python', category: 'Programming Languages', description: 'Data processing and automation', icon: 'FaPython' },
    { name: 'C#', category: 'Programming Languages', description: 'Microsoft Dynamics 365 development', icon: 'SiCsharp' },
    { name: 'JavaScript', category: 'Programming Languages', description: 'Frontend and full-stack development', icon: 'FaJsSquare' },
    { name: 'SQL', category: 'Programming Languages', description: 'Database querying and management', icon: 'FaDatabase' },

    // Backend Development
    { name: 'Spring Boot', category: 'Backend Development', description: 'Java microservices framework', icon: 'SiSpring' },
    { name: 'REST APIs', category: 'Backend Development', description: 'API design and development', icon: 'FaServer' },
    { name: 'Microservices', category: 'Backend Development', description: 'Distributed system architecture', icon: 'SiMicroservices' },

    // Cloud & DevOps
    { name: 'AWS', category: 'Cloud & DevOps', description: 'Cloud infrastructure and services', icon: 'FaAws' },
    { name: 'Azure', category: 'Cloud & DevOps', description: 'Microsoft cloud platform', icon: 'SiMicrosoftazure' },
    { name: 'Docker', category: 'Cloud & DevOps', description: 'Containerization platform', icon: 'FaDocker' },
    { name: 'CI/CD', category: 'Cloud & DevOps', description: 'Continuous integration and deployment', icon: 'FaGitlab' },
    { name: 'Git', category: 'Cloud & DevOps', description: 'Version control system', icon: 'FaGitAlt' },

    // Frontend
    { name: 'ReactJS', category: 'Frontend', description: 'Component-based UI library', icon: 'FaReact' },
    { name: 'HTML5', category: 'Frontend', description: 'Web markup language', icon: 'SiHtml5' },
    { name: 'CSS3', category: 'Frontend', description: 'Styling and design', icon: 'SiCss3' }
  ]);

  // useEffect(() => {
  //   async function fetchSkills() {
  //     const data = await getSkills();
  //     setSkills(data);
  //   }
  //   fetchSkills();
  // }, []);

  if (skills.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skills.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
