import React from 'react';
import { ExternalLink, Github, BarChart3, TrendingUp, PieChart, Activity } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sales Performance Dashboard",
      description: "Interactive Power BI dashboard tracking KPIs across multiple regions with real-time data integration and automated alerts for performance deviations.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Power BI", "SQL Server", "DAX", "Power Automate"],
      icon: <BarChart3 className="text-blue-600" size={32} />,
      metrics: "Increased decision speed by 40%"
    },
    {
      title: "Customer Analytics Platform",
      description: "Comprehensive Tableau solution analyzing customer behavior patterns, churn prediction, and segmentation with machine learning integration.",
      image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Tableau", "Python", "PostgreSQL", "R"],
      icon: <TrendingUp className="text-green-600" size={32} />,
      metrics: "Reduced churn by 25%"
    },
    {
      title: "Financial Reporting Suite",
      description: "Automated monthly and quarterly financial reports with dynamic forecasting models and variance analysis for executive leadership.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Excel VBA", "Power Query", "SQL", "Power BI"],
      icon: <PieChart className="text-purple-600" size={32} />,
      metrics: "Saved 20 hours weekly"
    },
    {
      title: "Operations Efficiency Tracker",
      description: "Real-time operational dashboard monitoring production metrics, quality indicators, and resource utilization with predictive maintenance alerts.",
      image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Power BI", "Azure IoT", "Python", "Time Series"],
      icon: <Activity className="text-orange-600" size={32} />,
      metrics: "Improved efficiency by 30%"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing data-driven solutions that deliver measurable business impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 bg-white rounded-lg p-2 shadow-lg">
                  {project.icon}
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.metrics}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-semibold">
                    <ExternalLink size={16} />
                    <span>View Live</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 font-semibold">
                    <Github size={16} />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
          >
            View All Projects
            <ExternalLink className="ml-2" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;