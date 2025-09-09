"use client";

import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to start your project? Have questions about our services? 
            We'd love to hear from you. Get in touch and let's discuss how we can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">hello@gtmtestapp.com</p>
                    <p className="text-slate-600">support@gtmtestapp.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                    <p className="text-slate-600">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Office</h3>
                    <p className="text-slate-600">123 Business Ave</p>
                    <p className="text-slate-600">Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Business Hours</h2>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-700">Monday - Friday</span>
                  <span className="text-slate-900 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Saturday</span>
                  <span className="text-slate-900 font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-700">Sunday</span>
                  <span className="text-slate-900 font-medium">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>Emergency Support:</strong> For existing clients with critical issues, 
                  we offer 24/7 emergency support. Please call our main number and follow the prompts.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Actions</h2>
              
              <div className="space-y-4">
                <a
                  href="/services"
                  className="block p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-1">View Our Services</h3>
                  <p className="text-slate-600 text-sm">See what we offer and find the right solution for you</p>
                </a>
                
                <a
                  href="/pricing"
                  className="block p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-1">Check Pricing</h3>
                  <p className="text-slate-600 text-sm">Transparent pricing for all our services</p>
                </a>
                
                <a
                  href="/downloads/company-brochure.pdf"
                  className="block p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <h3 className="font-semibold text-slate-900 mb-1">Download Brochure</h3>
                  <p className="text-slate-600 text-sm">Get detailed information about our company</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">How quickly do you respond to inquiries?</h3>
                <p className="text-slate-600">We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Do you offer free consultations?</h3>
                <p className="text-slate-600">Yes! We offer a free 30-minute consultation to discuss your project and how we can help achieve your goals.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">What information should I include in my inquiry?</h3>
                <p className="text-slate-600">Please include details about your project, timeline, budget range, and any specific requirements you have.</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Do you work with clients remotely?</h3>
                <p className="text-slate-600">Absolutely! We work with clients worldwide and have systems in place for effective remote collaboration.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">What's your typical project timeline?</h3>
                <p className="text-slate-600">Project timelines vary based on scope and complexity. Most websites take 4-8 weeks, while larger applications can take 3-6 months.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Do you provide ongoing support?</h3>
                <p className="text-slate-600">Yes, we offer various maintenance and support packages to keep your digital assets running smoothly after launch.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
