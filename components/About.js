import React from 'react';

const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-white text-lg">{skill}</span>
        <span className="text-white text-lg">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const About = () => {
  const skills = [
    { name: 'Dart', percentage: 90 },
    { name: 'Flutter', percentage: 60 },


    { name: 'Firebase API', percentage: 60 },
    { name: 'State Management', percentage: 60 },
    { name: 'Firebase', percentage: 60 },
    { name: 'Git', percentage: 50 },

    { name: 'Python', percentage: 40 },

  ];

  return (
    <div className="relative h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-16" id="about">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Skills</h2>
        <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;