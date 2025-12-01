import React from 'react';
import './Blogs.css';
import { FaMedium, FaDev } from 'react-icons/fa';

const blogs = [
  {
    title: "Coming Soon: Technical Blog Posts",
    platform: "Medium / Dev.to",
    icon: <FaMedium />,
    link: "https://medium.com/",
    description: "I'll be sharing insights on backend development, distributed systems, microservices, and cloud technologies.",
  },
  {
    title: "System Design & Architecture",
    platform: "Planned",
    icon: <FaDev />,
    link: "#",
    description: "Deep dives into scalable system design patterns and architectural decisions.",
  },
  {
    title: "Java & Spring Boot Best Practices",
    platform: "Planned",
    icon: <FaMedium />,
    link: "#",
    description: "Practical guides on building robust microservices with Java and Spring Boot.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">✍️ My Blog Posts</h2>
      <p className="blogs-intro">A collection of my thoughts and tutorials on software development.</p>
      <div className="blogs-grid">
        {blogs.map((blog, index) => (
          <a href={blog.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{blog.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <span className="blog-platform">{blog.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
