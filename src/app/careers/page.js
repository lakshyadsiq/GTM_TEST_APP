"use client";

import { useState } from 'react';
import ContactForm from '../../components/ContactForm';

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote / New York",
      type: "Full-time",
      experience: "2-5 years",
      description: "Join our frontend team to build amazing user experiences using React, Next.js, and modern CSS frameworks.",
      requirements: [
        "3+ years of experience with React and JavaScript",
        "Strong knowledge of HTML5, CSS3, and responsive design",
        "Experience with Next.js or similar frameworks",
        "Familiarity with version control systems (Git)",
        "Understanding of web performance optimization"
      ],
      responsibilities: [
        "Develop responsive web applications using React and Next.js",
        "Collaborate with designers to implement pixel-perfect interfaces",
        "Optimize applications for maximum speed and scalability",
        "Participate in code reviews and maintain coding standards",
        "Work closely with backend developers for API integration"
      ]
    },
    {
      id: 2,
      title: "Backend Developer",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "3-6 years",
      description: "We're looking for a skilled backend developer to help us build scalable and robust server-side applications.",
      requirements: [
        "Strong experience with Node.js and Express.js",
        "Knowledge of database design (PostgreSQL, MongoDB)",
        "Experience with RESTful APIs and GraphQL",
        "Understanding of cloud services (AWS, GCP, or Azure)",
        "Familiarity with containerization (Docker, Kubernetes)"
      ],
      responsibilities: [
        "Design and develop RESTful APIs and microservices",
        "Implement database schemas and optimize queries",
        "Ensure application security and data protection",
        "Collaborate with frontend developers on API integration",
        "Monitor and maintain production systems"
      ]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      location: "Austin, TX",
      type: "Full-time",
      experience: "4-7 years",
      description: "Join our team as a full stack developer and work on end-to-end solutions using modern technologies.",
      requirements: [
        "Experience with both frontend (React/Vue) and backend (Node.js/Python)",
        "Strong database knowledge (SQL and NoSQL)",
        "Understanding of DevOps practices and CI/CD",
        "Experience with cloud platforms and deployment",
        "Knowledge of testing frameworks and methodologies"
      ],
      responsibilities: [
        "Develop full-stack web applications from concept to deployment",
        "Design database schemas and implement business logic",
        "Create responsive user interfaces and optimize user experience",
        "Implement automated testing and deployment pipelines",
        "Mentor junior developers and contribute to technical decisions"
      ]
    },
    {
      id: 4,
      title: "UI/UX Designer",
      location: "Remote",
      type: "Full-time",
      experience: "2-4 years",
      description: "We're seeking a creative UI/UX designer to help us create intuitive and engaging user experiences.",
      requirements: [
        "Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)",
        "Strong understanding of user-centered design principles",
        "Experience with wireframing and prototyping",
        "Knowledge of web and mobile design best practices",
        "Portfolio demonstrating strong design skills"
      ],
      responsibilities: [
        "Create wireframes, mockups, and interactive prototypes",
        "Conduct user research and usability testing",
        "Collaborate with developers to ensure design implementation",
        "Maintain and evolve design systems and style guides",
        "Present design concepts to clients and stakeholders"
      ]
    },
    {
      id: 5,
      title: "Project Manager",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "3-6 years",
      description: "Lead our project delivery team and ensure successful completion of client projects on time and within budget.",
      requirements: [
        "PMP or similar project management certification preferred",
        "Experience with Agile/Scrum methodologies",
        "Strong communication and leadership skills",
        "Experience managing technical projects",
        "Proficiency with project management tools (Jira, Asana, etc.)"
      ],
      responsibilities: [
        "Plan and manage project timelines, resources, and deliverables",
        "Coordinate between development teams and clients",
        "Facilitate Agile ceremonies and sprint planning",
        "Monitor project progress and manage risks",
        "Ensure quality standards and client satisfaction"
      ]
    },
    {
      id: 6,
      title: "Marketing Specialist",
      location: "Remote / Boston",
      type: "Full-time",
      experience: "2-4 years",
      description: "Help us grow our brand and reach new clients through strategic marketing initiatives and campaigns.",
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related field",
        "Experience with digital marketing channels (SEO, PPC, Social Media)",
        "Strong analytical skills and experience with marketing tools",
        "Excellent writing and communication skills",
        "Knowledge of marketing automation platforms"
      ],
      responsibilities: [
        "Develop and execute digital marketing campaigns",
        "Manage social media presence and content calendar",
        "Analyze marketing metrics and optimize campaigns",
        "Create marketing materials and content",
        "Support lead generation and client acquisition efforts"
      ]
    }
  ];

  const benefits = [
    "Competitive salary and equity packages",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work arrangements and remote options",
    "Professional development and learning budget",
    "Unlimited PTO and flexible holidays",
    "Modern equipment and home office stipend",
    "Team building events and company retreats",
    "401(k) with company matching"
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for creating 
            exceptional digital experiences. Join us and help build the future of web development.
          </p>
        </div>

        {/* Company Culture */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why Work With Us?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Innovation First</h3>
              <p className="text-slate-600">Work with cutting-edge technologies and push the boundaries of what's possible.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Team Collaboration</h3>
              <p className="text-slate-600">Join a supportive team where everyone's ideas are valued and contributions matter.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Growth Opportunities</h3>
              <p className="text-slate-600">Advance your career with mentorship, training, and challenging projects.</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="border-t border-slate-200 pt-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">Benefits & Perks</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Current Openings</h2>
          
          <div className="grid gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {selectedJob === job.id ? 'Hide Details' : 'View Details'}
                  </button>
                </div>
                
                <p className="text-slate-600 mb-4">{job.description}</p>
                
                {selectedJob === job.id && (
                  <div className="border-t border-slate-200 pt-6 mt-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-4 h-4 text-blue-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-slate-700 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {job.responsibilities.map((resp, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-slate-700 text-sm">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Apply Now</h2>
          <p className="text-slate-600 text-center mb-8">
            Interested in joining our team? Fill out the application form below and we'll get back to you soon.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm formType="application" />
          </div>
        </div>

        {/* No Perfect Match */}
        <div className="bg-slate-100 rounded-xl p-8 mt-8 text-center">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Don't See a Perfect Match?</h3>
          <p className="text-slate-600 mb-6">
            We're always interested in hearing from talented individuals. Send us your resume and 
            tell us about your skills and interests. We'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@gtmtestapp.com"
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Us Your Resume
          </a>
        </div>
      </div>
    </div>
  );
}
