import React from 'react';
import { Calendar, MapPin, Award, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior BI and Reporting Analyst",
      company: "TD Bank",
      location: "Toronto, ON",
      period: "2023 - 2024",
      description: "Specialized in creating interactive dashboards and reports, focusing on risk analytics and operational efficiency improvements.",
      achievements: [
        "Collaborated with stakeholders to gather and evaluate requirements, determine scope, design wireframes and mock-ups",
        "Migrated executive-level dashboards from excel to Tableau, increasing report usage and performance by 60%",
        "Implemented automated data quality check in reporting solution",
        "Leveraged Python, SQL and Power Query to analyze high-volume, complex datasets, uncovering actionable trends and risk signals"


      ],
      type: "current"
    },
    {
      title: "Senior BI Developer",
      company: "Accenture Solutions",
      location: "Mumbai, India",
      period: "2018 - 2021",
      description: "Lead business intelligence initiatives across multiple departments, designing and implementing advanced analytics solutions that drive strategic decision-making.",
      achievements: [
        "Led cross-functional team of 5 analysts on enterprise BI implementation",
        "Designed real-time operational PBI and Tableau dashboards for APAC Sale team",
        "Optimized ETL processes reducing data processing time by 20%",
        "Trained 20+ stakeholders on self-service analytics tools"

      ],
      type: "past"
    },
    {
      title: "BI Analyst",
      company: "Accenture Solutions",
      location: "Mumbai, India",
      period: "2015 - 2018",
      description: "Focused on business intelligence reporting and system enhancements, improving data workflows and supporting decision-making with optimized BI solutions",
      achievements: [
        "Enhanced SAP WebI reports by optimizing queries and improving visualization layouts",
        "Upgraded and maintained OBIEE RPD (Repository) to integrate new data sources, refine business models, and improve reporting performance",
        "Developed and optimized SAP BW process chains, streamlining data loading and transformation workflows for improved system performance",
        "Led client calls and provided production support, addressing critical issues, gathering requirements, and ensuring smooth delivery of BI solutions"
      ],
      type: "past"
    },
        {
      title: "Associate BI Analyst",
      company: "Accenture Solutions",
      location: "Mumbai, India",
      period: "2014 - 2015",
      description: "Supported sales production systems by resolving incidents, monitoring data load batches, and collaborating with teams to ensure reliable, accurate, and timely data availability.",
      achievements: [
        "Provided production system support by resolving day-to-day incident and service requests related to Sales processes.",
        "Monitored and managed batch jobs for data loads, identifying and addressing failures to maintain data accuracy and timely availability",
        "Collaborated with cross-functional teams to troubleshoot issues, performed root cause analysis, and implement fixes"
        
      ],
      type: "past"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven track record of delivering impactful analytics solutions across diverse industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-cyan-600 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 bg-white hidden md:block ${
                  exp.type === 'current' ? 'border-blue-600' : 'border-cyan-600'
                } z-10`}></div>

                {/* Content */}
                <div className="md:ml-16 w-full">
                  <div className={`bg-gradient-to-br p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    exp.type === 'current' 
                      ? 'from-blue-50 to-cyan-50 border border-blue-200' 
                      : 'from-gray-50 to-gray-100 border border-gray-200'
                  }`}>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        <div className="flex items-center space-x-4 text-gray-600 mb-2">
                          <div className="flex items-center space-x-1">
                            <Users size={16} />
                            <span className="font-semibold">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`flex items-center space-x-1 px-4 py-2 rounded-full ${
                        exp.type === 'current' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        <Calendar size={16} />
                        <span className="font-semibold">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 mb-3">
                        <Award className="text-yellow-600" size={20} />
                        <span className="font-semibold text-gray-900">Key Achievements:</span>
                      </div>
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Education</h3>
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900 mb-2">MBA - Business Analytics</h4>
                <p className="text-blue-600 font-semibold mb-2">Carleton University</p>
                <p className="text-gray-600">Graduated: 2022 | GPA: 75%</p>
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Engineering</h4>
                <p className="text-blue-600 font-semibold mb-2">VTU</p>
                <p className="text-gray-600">Graduated: 2009 | First Class</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;