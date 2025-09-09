"use client";

import CTAButton from '../../components/CTAButton';

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$999",
      period: "one-time",
      description: "Perfect for small businesses just getting started online",
      features: [
        "5-page website",
        "Mobile responsive design",
        "Basic SEO optimization",
        "Contact form integration",
        "1 month free maintenance",
        "Email support"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "one-time",
      description: "Ideal for growing businesses that need more features",
      features: [
        "10-page website",
        "Custom design",
        "Advanced SEO optimization",
        "E-commerce functionality",
        "Analytics integration",
        "3 months free maintenance",
        "Priority email support",
        "Social media integration"
      ],
      popular: true,
      cta: "Most Popular"
    },
    {
      name: "Enterprise",
      price: "$5,999",
      period: "one-time",
      description: "For large businesses with complex requirements",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced integrations",
        "Multi-language support",
        "Custom admin panel",
        "6 months free maintenance",
        "24/7 phone & email support",
        "Training & documentation",
        "Performance optimization"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const addons = [
    { name: "Additional Page", price: "$150", description: "Add extra pages to your website" },
    { name: "E-commerce Setup", price: "$500", description: "Full online store functionality" },
    { name: "SEO Package", price: "$300", description: "Advanced SEO optimization and setup" },
    { name: "Monthly Maintenance", price: "$200", description: "Ongoing updates and support" },
    { name: "Logo Design", price: "$250", description: "Professional logo design service" },
    { name: "Content Writing", price: "$100", description: "Per page professional copywriting" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. All plans include our standard features 
            with no hidden fees or surprise charges.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg border-2 p-8 relative ${
                plan.popular ? 'border-blue-500 scale-105' : 'border-slate-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-slate-900 mb-1">
                  {plan.price}
                  <span className="text-lg font-normal text-slate-500">/{plan.period}</span>
                </div>
                <p className="text-slate-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <CTAButton 
                href="/contact"
                variant={plan.popular ? "primary" : "outline"}
                className="w-full text-center"
              >
                {plan.cta}
              </CTAButton>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Optional Add-ons</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-slate-900">{addon.name}</h3>
                  <span className="text-lg font-bold text-blue-600">{addon.price}</span>
                </div>
                <p className="text-sm text-slate-600">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">What's included in the maintenance period?</h3>
              <p className="text-slate-600">Regular updates, security patches, bug fixes, and minor content changes are all included during your free maintenance period.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Can I upgrade my plan later?</h3>
              <p className="text-slate-600">Absolutely! You can upgrade to a higher plan at any time. We'll credit your existing investment toward the new plan.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Do you offer payment plans?</h3>
              <p className="text-slate-600">Yes, we offer flexible payment plans for projects over $2,000. Contact us to discuss options that work for your budget.</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">What if I need something custom?</h3>
              <p className="text-slate-600">We love custom projects! Contact us with your requirements and we'll provide a detailed quote for your specific needs.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Have questions about pricing or need a custom quote? Our team is here to help you find the perfect solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="secondary">
              Contact Us
            </CTAButton>
            <CTAButton 
              href="/downloads/pricing-guide.pdf" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-700"
            >
              Download Pricing Guide
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
