import React from 'react';
import { BarChart, Database, Code, Brain, PieChart, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <BarChart className="text-blue-600" size={32} />,
      title: "Data Visualization",
      skills: ["Power BI", "Tableau", "D3.js", "Excel Advanced", "Google Data Studio"],
      color: "blue"
    },
    {
      icon: <Database className="text-green-600" size={32} />,
      title: "Data Management",
      skills: ["SQL Server", "MySQL", "PostgreSQL", "Azure Data Factory", "ETL Processes"],
      color: "green"
    },
    {
      icon: <Code className="text-purple-600" size={32} />,
      title: "Programming",
      skills: ["Python", "R", "DAX", "M Query", "JavaScript", "VBA"],
      color: "purple"
    },
    {
      icon: <Brain className="text-orange-600" size={32} />,
      title: "Analytics",
      skills: ["Statistical Analysis", "Predictive Modeling", "Machine Learning", "A/B Testing"],
      color: "orange"
    },
    {
      icon: <PieChart className="text-pink-600" size={32} />,
      title: "Business Intelligence",
      skills: ["KPI Development", "Dashboard Design", "Report Automation", "Data Mining"],
      color: "pink"
    },
    {
      icon: <TrendingUp className="text-cyan-600" size={32} />,
      title: "Business Skills",
      skills: ["Strategic Planning", "Stakeholder Management", "Process Optimization", "Training"],
      color: "cyan"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: "border-blue-200 hover:border-blue-400 hover:shadow-blue-100",
      green: "border-green-200 hover:border-green-400 hover:shadow-green-100",
      purple: "border-purple-200 hover:border-purple-400 hover:shadow-purple-100",
      orange: "border-orange-200 hover:border-orange-400 hover:shadow-orange-100",
      pink: "border-pink-200 hover:border-pink-400 hover:shadow-pink-100",
      cyan: "border-cyan-200 hover:border-cyan-400 hover:shadow-cyan-100"
    };
    return colors[color] || "border-gray-200 hover:border-gray-400";
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive skill set spanning data analysis, visualization, and business intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 border-2 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl ${getColorClasses(category.color)}`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gray-50 p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between py-1">
                    <span className="text-gray-700">{skill}</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < 4 ? 'bg-blue-500' : 'bg-gray-200'
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Microsoft Power BI Certified",
              "Tableau Desktop Specialist",
              "Google Analytics Certified",
              "Azure Data Fundamentals"
            ].map((cert, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="text-blue-600 font-semibold">{cert}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;