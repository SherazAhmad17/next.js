import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden p-8 sm:p-12">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            About Me
          </h1>
          <p className="mt-4 text-xl text-gray-500 font-medium">
            MEAN Stack Developer & Software Engineering Student
          </p>
        </div>

        {/* Bio Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-600 pb-2 inline-block mb-6">
            My Journey
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            I am currently in my 4th semester at university, balancing my studies with hands-on experience as a MERN stack intern. I am passionate about building full-stack web applications and diving deep into software architecture. 
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            From sketching out system designs to writing clean, maintainable code in React and Node.js, I thrive on turning complex problems into scalable, user-friendly digital solutions. Always learning, always building.
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 border-b-4 border-blue-600 pb-2 inline-block mb-6">
            Current Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {['MongoDB', 'Express.js', 'React', 'Node.js', 'Next.js', 'Tailwind CSS', 'Ubuntu / Linux'].map((skill) => (
              <span
                key={skill}
                className="px-5 py-2.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold border border-blue-100 hover:bg-blue-100 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}