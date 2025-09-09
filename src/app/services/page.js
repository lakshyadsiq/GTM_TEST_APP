"use client";

import CTAButton from '../../components/CTAButton';

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimization", "Performance Optimization", "Content Management"],
      price: "Starting at $2,500"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to grow your online presence and drive conversions.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Marketing", "Email Campaigns"],
      price: "Starting at $1,500/month"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration, inventory management, and analytics.",
      features: ["Payment Gateway Integration", "Inventory Management", "Order Processing", "Analytics Dashboard"],
      price: "Starting at $3,500"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["Cross-platform Development", "Native Performance", "App Store Optimization", "Push Notifications"],
      price: "Starting at $5,000"
    },
    {
      title: "Consulting Services",
      description: "Strategic technology consulting to help your business make informed decisions about digital transformation.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Training & Support"],
      price: "Starting at $200/hour"
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your digital assets running smoothly.",
      features: ["24/7 Monitoring", "Regular Updates", "Security Patches", "Technical Support"],
      price: "Starting at $500/month"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern marketplace. 
            From custom web development to strategic consulting, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-slate-200 pt-4">
                <div className="text-lg font-semibold text-slate-900 mb-3">{service.price}</div>
                <CTAButton 
                  href="/contact" 
                  className="w-full text-center inline-block"
                >
                  Get Quote
                </CTAButton>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a personalized quote. 
            Our team is ready to help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact">
              Contact Us
            </CTAButton>
            <CTAButton href="/pricing" variant="outline">
              View Pricing
            </CTAButton>
          </div>
        </div>

        {/* Download Brochure Section */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mt-8 text-center">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Want to Learn More?</h3>
          <p className="text-blue-700 mb-4">Download our comprehensive services brochure with detailed information about all our offerings.</p>
          <CTAButton 
            href="/downloads/services-brochure.pdf" 
            variant="primary"
            className="inline-flex items-center"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Brochure
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
