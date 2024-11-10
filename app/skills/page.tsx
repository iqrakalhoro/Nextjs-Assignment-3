import React from 'react';

const skills = [
  { name: 'HTML', percentage: 55, barClass: 'blue-bar' },
  { name: 'Graphic Design', percentage: 80, barClass: 'green-bar' },
  { name: 'CSS', percentage: 60, barClass: 'blue-bar' },
  { name: 'Typescript', percentage: 80, barClass: 'purple-bar' },
  { name: 'Javascript', percentage: 65, barClass: 'yellow-bar' },
  { name: 'WordPress', percentage: 70, barClass: 'indigo-bar' },
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h3 className="skills-subtitle">Why Choose Me</h3>
          <h1 className="skills-title">My Skills</h1>
        </div>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill">
              <div className="skill-info">
                <small>{skill.name}</small>
                <small>{skill.percentage}%</small>
              </div>
              <div className="skill-bar-bg">
                <div
                  className={`skill-bar ${skill.barClass}`}
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <SkillsSection />
    </div>
  );
};

export default App;
