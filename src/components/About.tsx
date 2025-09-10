import React from 'react';
import { User, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <User size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-4">Professional Profile</h3>
                <p className="text-blue-100 leading-relaxed">
                  Passionate BI & Reporting Analyst with expertise in transforming raw data into 
                  compelling visual stories. I specialize in creating interactive dashboards, 
                  automated reports, and data-driven solutions that empower organizations to 
                  make informed strategic decisions.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">My Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To bridge the gap between complex data and actionable insights, helping 
                  businesses unlock the full potential of their data assets through innovative 
                  analytics and visualization techniques.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-cyan-100 p-3 rounded-lg">
                <Award className="text-cyan-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Core Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Committed to accuracy, clarity, and continuous learning. I believe in 
                  creating solutions that not only solve immediate problems but also 
                  provide long-term value and scalability.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Advanced proficiency in Power BI, Tableau, and SQL
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Experience with Python and SQL for data analysis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Strong background in data engineering and modeling
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Proven track record of delivering actionable insights
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;