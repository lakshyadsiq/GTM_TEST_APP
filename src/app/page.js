"use client"; // Add this line at the top for App Router

import React, { useState } from 'react';
import CTAButton from '../components/CTAButton';

export default function GtmTestPage() {
    const [formMessageVisible, setFormMessageVisible] = useState(false);

    const handleFormSubmit = (event) => {
        // Prevent the default form submission which reloads the page
        event.preventDefault();

        // Show the success message
        setFormMessageVisible(true);

        // This is the ideal place to push a custom event to the Data Layer for more reliable tracking
        // For advanced users: You can create a "Custom Event" trigger in GTM that listens for 'form_submission_success'
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'form_submission_success',
            'formName': 'Contact Form Demo'
        });

        // Optional: Hide the message after a few seconds
        setTimeout(() => {
            setFormMessageVisible(false);
        }, 5000);

        // Reset the form fields
        event.target.reset();
    };

    return (
        <div className="bg-slate-100 text-slate-800 font-sans">
            <div className="container mx-auto max-w-4xl my-10 px-4">
                
                <header className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 mb-8">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">GTM Lead Scoring Test App</h1>
                    <p className="text-slate-600 mb-6">
                        This Next.js application is designed to test the advanced GTM lead scoring system. 
                        Navigate through different pages and perform actions to see how the scoring works.
                    </p>
                    
                    <div className="flex flex-wrap gap-3">
                        <CTAButton href="/services">Explore Services</CTAButton>
                        <CTAButton href="/pricing" variant="outline">View Pricing</CTAButton>
                        <CTAButton href="/contact" variant="secondary">Contact Us</CTAButton>
                    </div>
                </header>

                <main className="space-y-8">
                    {/* Lead Scoring Explanation */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">🎯 Lead Scoring System</h2>
                        <p className="mb-4">This app implements a sophisticated lead scoring system that tracks user behavior and assigns points based on actions:</p>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-green-700 mb-2">Positive Actions (+Points)</h3>
                                <ul className="space-y-1 text-sm">
                                    <li>• Form submission: <strong>+10 points</strong></li>
                                    <li>• Contact Us click: <strong>+5 points</strong></li>
                                    <li>• Pricing/Contact page visit: <strong>+4 points</strong></li>
                                    <li>• PDF download: <strong>+3 points</strong></li>
                                    <li>• Services page visit: <strong>+2 points</strong></li>
                                    <li>• Blog scroll (75%): <strong>+2 points</strong></li>
                                </ul>
                            </div>
                            
                            <div>
                                <h3 className="font-semibold text-red-700 mb-2">Negative Actions (-Points)</h3>
                                <ul className="space-y-1 text-sm">
                                    <li>• Job application: <strong>-8 points</strong></li>
                                    <li>• Careers page visit: <strong>-6 points</strong></li>
                                </ul>
                                
                                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-blue-800">
                                        <strong>Goal:</strong> When a user reaches ≥8 points, they're classified as a "potential_client" in GA4!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SECTION: Page View & Config Tag Testing */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Page View Tracking</h2>
                        <p>Simply by loading this page, your "All Pages" trigger should have fired. This is perfect for testing your base configuration tags like the <strong>Google Analytics 4 Config Tag</strong>, <strong>Meta Pixel Base Code</strong>, or the <strong>Google Ads Conversion Linker</strong>.</p>
                    </div>

                    {/* SECTION: Button Click Tracking */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Button Click Tracking</h2>
                        <p className="mb-4">Test your click tracking with our CTAs. Each click is tracked and contributes to the lead score.</p>
                        <div className="flex flex-wrap gap-3">
                            <CTAButton>Contact Us</CTAButton>
                            <CTAButton variant="secondary">Get Quote</CTAButton>
                            <CTAButton variant="outline">Learn More</CTAButton>
                        </div>
                    </div>

                    {/* SECTION: Link Click Tracking */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">3. PDF Downloads & Link Tracking</h2>
                        <p className="mb-4">Download our resources to increase your lead score:</p>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <a 
                                    href="/downloads/services-brochure.pdf" 
                                    className="text-blue-600 hover:underline font-medium"
                                    target="_blank"
                                >
                                    📄 Services Brochure (PDF)
                                </a>
                                <span className="ml-2 text-green-600 text-sm">+3 points</span>
                            </div>
                            <div className="flex items-center">
                                <a 
                                    href="/downloads/pricing-guide.pdf" 
                                    className="text-blue-600 hover:underline font-medium"
                                    target="_blank"
                                >
                                    📄 Pricing Guide (PDF)
                                </a>
                                <span className="ml-2 text-green-600 text-sm">+3 points</span>
                            </div>
                            <div className="flex items-center">
                                <a 
                                    href="https://marketingplatform.google.com/about/tag-manager/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-600 hover:underline"
                                >
                                    🔗 External link to Google Tag Manager
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* SECTION: Form Submission Tracking */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Form Submission Tracking</h2>
                        <p className="mb-4">This form submission adds <strong>+10 points</strong> to your lead score and is the highest-value action.</p>
                        <form id="contact-form" className="space-y-4" onSubmit={handleFormSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all shadow-md">Submit Form (+10 points)</button>
                        </form>
                        {formMessageVisible && (
                            <div id="form-message" className="mt-4 p-4 text-center text-green-800 bg-green-100 rounded-lg">
                                Thank you! Your form has been submitted successfully. You earned +10 points!
                            </div>
                        )}
                    </div>

                    {/* Navigation Guide */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-900 mb-3">5. Test Different Pages</h2>
                        <p className="mb-4">Navigate to different pages to see how page visits affect your lead score:</p>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                    <a href="/services" className="text-blue-600 hover:underline font-medium">Services Page</a>
                                    <span className="text-green-600 text-sm">+2 points</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                    <a href="/pricing" className="text-blue-600 hover:underline font-medium">Pricing Page</a>
                                    <span className="text-green-600 text-sm">+4 points</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                    <a href="/contact" className="text-blue-600 hover:underline font-medium">Contact Page</a>
                                    <span className="text-green-600 text-sm">+4 points</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                                    <a href="/blog" className="text-blue-600 hover:underline font-medium">Blog (scroll 75%)</a>
                                    <span className="text-green-600 text-sm">+2 points</span>
                                </div>
                            </div>
                            
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                                    <a href="/careers" className="text-blue-600 hover:underline font-medium">Careers Page</a>
                                    <span className="text-red-600 text-sm">-6 points</span>
                                </div>
                                <div className="p-3 bg-slate-50 rounded-lg text-center text-slate-600 text-sm">
                                    Job applications on careers page: <strong>-8 points</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer id="footer" className="text-center text-slate-500 mt-12 py-6 border-t border-slate-200">
                    <p>&copy; 2025 GTM Lead Scoring Test App. Built for learning and testing.</p>
                </footer>

            </div>
        </div>
    );
}

