"use client"; // Add this line at the top for App Router

import React, { useState, useEffect } from 'react';

// --- Configuration ---
// ⬇️ 1. REPLACE 'GTM-XXXXXXX' WITH YOUR ACTUAL GTM CONTAINER ID ⬇️
const GTM_ID = 'GTM-KD9SZZJ4';
// ---------------------

export default function GtmTestPage() {
    const [formMessageVisible, setFormMessageVisible] = useState(false);

    // This useEffect hook replaces the next/script component to inject the GTM script
    // This approach is framework-agnostic and resolves the compilation error.
    useEffect(() => {
        const script = document.createElement('script');
        script.id = 'gtm-script';
        script.innerHTML = `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
        `;
        document.head.appendChild(script);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            const existingScript = document.getElementById('gtm-script');
            if (existingScript) {
                document.head.removeChild(existingScript);
            }
        };
    }, []); // The empty dependency array ensures this runs only once when the component mounts

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
        <>
            {/* The <noscript> part of the GTM tag is standard HTML and can be kept. */}
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
            
            <div className="bg-slate-100 text-slate-800 font-sans">
                <div className="container mx-auto max-w-4xl my-10 px-4">
                    
                    <header className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 mb-8">
                        <h1 className="text-4xl font-bold text-slate-900 mb-2">GTM Testing Ground (Next.js)</h1>
                        <p className="text-slate-600">This is a demo website to help you test your Google Tag Manager implementation. Use GTM's "Preview" mode to see your tags fire in real-time as you interact with the elements below.</p>
                    </header>

                    <main className="space-y-8">
                        {/* SECTION: Page View & Config Tag Testing */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">1. Page View Tracking</h2>
                            <p>Simply by loading this page, your "All Pages" trigger should have fired. This is perfect for testing your base configuration tags like the <strong>Google Analytics 4 Config Tag</strong>, <strong>Meta Pixel Base Code</strong>, or the <strong>Google Ads Conversion Linker</strong>.</p>
                        </div>

                        {/* SECTION: Button Click Tracking */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">2. Button Click Tracking</h2>
                            <p className="mb-4">This is where you can test your `GA4 - Event - Contact Us Click` tag. Create a trigger in GTM that listens for a click on a button with the text "Contact Us".</p>
                            <button id="contact-us-btn" className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all shadow-md">
                                Contact Us
                            </button>
                        </div>

                        {/* SECTION: Link Click Tracking */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">3. Link Click Tracking</h2>
                            <p className="mb-4">You can track different types of link clicks. For example, you can create a trigger to track clicks on all outbound links.</p>
                            <ul className="list-disc list-inside space-y-2">
                                <li><a href="#footer" className="text-blue-600 hover:underline">This is an internal link.</a></li>
                                <li><a href="https://marketingplatform.google.com/about/tag-manager/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">This is an outbound link to Google.</a></li>
                            </ul>
                        </div>

                        {/* SECTION: Form Submission Tracking */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                            <h2 className="text-2xl font-bold text-slate-900 mb-3">4. Form Submission Tracking</h2>
                            <p className="mb-4">Tracking form submissions is a key conversion goal. You can trigger tags when this form is successfully submitted. The best practice is to use the custom 'form_submission_success' event we're pushing to the Data Layer.</p>
                            <form id="contact-form" className="space-y-4" onSubmit={handleFormSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                                    <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                                    <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-all shadow-md">Submit Form</button>
                            </form>
                            {formMessageVisible && (
                                <div id="form-message" className="mt-4 p-4 text-center text-green-800 bg-green-100 rounded-lg">
                                    Thank you! Your form has been submitted successfully.
                                </div>
                            )}
                        </div>
                    </main>

                    <footer id="footer" className="text-center text-slate-500 mt-12 py-6 border-t border-slate-200">
                        <p>&copy; 2025 GTM Testing Ground. Built for learning.</p>
                    </footer>

                </div>
            </div>
        </>
    );
}

