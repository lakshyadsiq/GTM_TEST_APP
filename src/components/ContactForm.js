"use client";

import { useState, useEffect } from 'react';

export default function ContactForm({ formType = "contact", onSuccess = null }) {
  const [formVisible, setFormVisible] = useState(true);
  const [messageVisible, setMessageVisible] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    // Hide form and show success message
    setFormVisible(false);
    setMessageVisible(true);

    // Push custom event to dataLayer for GTM tracking
    window.dataLayer = window.dataLayer || [];
    
    if (formType === "application") {
      // For job applications - this has negative scoring impact
      window.dataLayer.push({
        'event': 'application_submission',
        'formName': 'Job Application Form',
        'jobTitle': event.target.jobTitle?.value || 'General Application'
      });
    } else {
      // For contact forms - this has positive scoring impact
      window.dataLayer.push({
        'event': 'form_submission_success',
        'formName': 'Contact Form'
      });
    }

    // Call custom success handler if provided
    if (onSuccess) {
      onSuccess();
    }

    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      setMessageVisible(false);
      setFormVisible(true);
    }, 5000);
  };

  if (!formVisible) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <div className="text-center">
          <div className="text-green-800 text-lg font-medium mb-2">
            {formType === "application" ? "Application Submitted!" : "Thank You!"}
          </div>
          <div className="text-green-600">
            {formType === "application" 
              ? "Your job application has been received. We'll be in touch soon!"
              : "Your message has been sent successfully. We'll get back to you shortly!"
            }
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your phone number"
        />
      </div>

      {formType === "application" && (
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 mb-1">
            Position Applying For
          </label>
          <select
            id="jobTitle"
            name="jobTitle"
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select a position</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
            <option value="Project Manager">Project Manager</option>
            <option value="Marketing Specialist">Marketing Specialist</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
          {formType === "application" ? "Cover Letter / Additional Information" : "Message *"}
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required={formType !== "application"}
          className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder={formType === "application" 
            ? "Tell us why you're interested in this position..."
            : "How can we help you?"
          }
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm"
      >
        {formType === "application" ? "Submit Application" : "Send Message"}
      </button>
    </form>
  );
}
