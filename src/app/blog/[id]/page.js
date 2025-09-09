"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const params = useParams();
  const postId = params.id;

  // In a real app, you'd fetch this data based on the ID
  const blogPosts = {
    "1": {
      title: "The Future of Web Development: Trends to Watch in 2024",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      content: `
        <p>The web development landscape is constantly evolving, and 2024 promises to be an exciting year with several groundbreaking trends that will shape how we build and interact with web applications.</p>

        <h2>Artificial Intelligence Integration</h2>
        <p>AI is no longer a futuristic concept—it's becoming an integral part of web development. From automated code generation to intelligent user interfaces, AI is revolutionizing how we approach development challenges.</p>

        <p>Modern frameworks like Next.js and React are incorporating AI-powered features that help developers write better code faster. Tools like GitHub Copilot and ChatGPT are becoming essential parts of the developer toolkit.</p>

        <h2>Performance-First Development</h2>
        <p>With Core Web Vitals becoming increasingly important for SEO rankings, performance optimization is no longer optional. Developers are focusing on:</p>

        <ul>
          <li>Lazy loading and code splitting</li>
          <li>Server-side rendering and static site generation</li>
          <li>Edge computing and CDN optimization</li>
          <li>Progressive Web Apps (PWAs)</li>
        </ul>

        <h2>The Rise of Web Components</h2>
        <p>Web Components are gaining traction as a framework-agnostic way to build reusable UI elements. This technology allows developers to create custom HTML elements that work across different frameworks and libraries.</p>

        <p>Major browsers now have full support for Web Components, making them a viable option for large-scale applications that need to maintain consistency across different technology stacks.</p>

        <h2>Advanced CSS Features</h2>
        <p>CSS continues to evolve with powerful new features that reduce the need for JavaScript in many scenarios:</p>

        <ul>
          <li>Container queries for responsive design</li>
          <li>CSS Grid and Flexbox enhancements</li>
          <li>Custom properties and functions</li>
          <li>Advanced animations and transitions</li>
        </ul>

        <h2>Security-First Approach</h2>
        <p>With increasing cyber threats, security is becoming a primary concern in web development. Modern applications are implementing:</p>

        <ul>
          <li>Zero-trust security models</li>
          <li>Content Security Policies (CSP)</li>
          <li>Secure authentication and authorization</li>
          <li>Regular security audits and testing</li>
        </ul>

        <h2>Conclusion</h2>
        <p>The future of web development is bright and full of opportunities. By staying current with these trends and continuously learning new technologies, developers can build more efficient, secure, and user-friendly applications.</p>

        <p>As we move forward into 2024, the key to success will be balancing innovation with practicality, always keeping the end user's experience at the center of our development decisions.</p>
      `
    },
    "2": {
      title: "Building Scalable E-commerce Solutions: A Complete Guide",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      content: `
        <p>Building a scalable e-commerce solution requires careful planning, robust architecture, and attention to performance from day one. This comprehensive guide will walk you through the essential considerations and best practices.</p>

        <h2>Architecture Planning</h2>
        <p>The foundation of any scalable e-commerce platform starts with solid architectural decisions. Consider these key components:</p>

        <ul>
          <li>Microservices vs monolithic architecture</li>
          <li>Database design and normalization</li>
          <li>Caching strategies</li>
          <li>Load balancing and CDN implementation</li>
        </ul>

        <h2>Technology Stack Selection</h2>
        <p>Choosing the right technology stack is crucial for long-term success. Popular combinations include:</p>

        <h3>Frontend Technologies</h3>
        <ul>
          <li>React with Next.js for server-side rendering</li>
          <li>Vue.js with Nuxt.js for rapid development</li>
          <li>Angular for enterprise-level applications</li>
        </ul>

        <h3>Backend Technologies</h3>
        <ul>
          <li>Node.js with Express for JavaScript environments</li>
          <li>Python with Django or FastAPI</li>
          <li>PHP with Laravel or Symfony</li>
          <li>Ruby on Rails for rapid prototyping</li>
        </ul>

        <h2>Database Considerations</h2>
        <p>E-commerce applications have specific database requirements that need careful consideration:</p>

        <h3>Relational Databases</h3>
        <p>PostgreSQL and MySQL remain popular choices for their ACID compliance and mature ecosystem. They're ideal for handling complex relationships between products, orders, and customers.</p>

        <h3>NoSQL Solutions</h3>
        <p>MongoDB and DynamoDB can be excellent for product catalogs and user session data, providing flexibility and horizontal scaling capabilities.</p>

        <h2>Payment Integration</h2>
        <p>Secure payment processing is non-negotiable in e-commerce. Consider these factors:</p>

        <ul>
          <li>PCI DSS compliance requirements</li>
          <li>Multiple payment gateway support</li>
          <li>International currency handling</li>
          <li>Fraud detection and prevention</li>
        </ul>

        <h2>Performance Optimization</h2>
        <p>E-commerce sites must load quickly to prevent cart abandonment:</p>

        <ul>
          <li>Image optimization and lazy loading</li>
          <li>Redis or Memcached for session storage</li>
          <li>Database query optimization</li>
          <li>Asynchronous processing for heavy operations</li>
        </ul>

        <h2>Security Best Practices</h2>
        <p>Protecting customer data and payment information is paramount:</p>

        <ul>
          <li>SSL/TLS encryption for all communications</li>
          <li>Input validation and sanitization</li>
          <li>Regular security audits and penetration testing</li>
          <li>Secure API design with rate limiting</li>
        </ul>

        <h2>Monitoring and Analytics</h2>
        <p>Understanding your application's performance and user behavior is crucial:</p>

        <ul>
          <li>Application performance monitoring (APM)</li>
          <li>User behavior analytics</li>
          <li>Conversion funnel analysis</li>
          <li>A/B testing capabilities</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Building a scalable e-commerce solution is a complex undertaking that requires expertise in multiple areas. By following these guidelines and best practices, you can create a platform that grows with your business and provides an excellent user experience.</p>

        <p>Remember that scalability isn't just about handling more traffic—it's about maintaining performance, security, and reliability as your business grows.</p>
      `
    }
  };

  const post = blogPosts[postId] || blogPosts["1"];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto max-w-4xl px-4 py-8">
        
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-slate-900">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-900">Blog</Link>
            <span>/</span>
            <span className="text-slate-900">{post.category}</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center text-slate-600 mb-6">
            <span>{post.date}</span>
            <span className="mx-3">•</span>
            <span>{post.readTime}</span>
          </div>
          
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </header>

        {/* Article Content */}
        <article className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 md:p-12">
          <div 
            className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Article Footer */}
          <div className="border-t border-slate-200 pt-8 mt-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Found this helpful?</h3>
                <p className="text-slate-600">Share it with others who might benefit from this information.</p>
              </div>
              
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Share on Twitter
                </button>
                <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-colors">
                  Share on LinkedIn
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                <Link href="/blog/2" className="hover:text-blue-600 transition-colors">
                  Building Scalable E-commerce Solutions
                </Link>
              </h3>
              <p className="text-slate-600 text-sm mb-3">Learn the fundamentals of building e-commerce platforms that can handle growth...</p>
              <div className="text-xs text-slate-500">March 10, 2024 • 12 min read</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                <Link href="/blog/3" className="hover:text-blue-600 transition-colors">
                  Digital Marketing Strategies That Work
                </Link>
              </h3>
              <p className="text-slate-600 text-sm mb-3">Discover proven digital marketing strategies that drive real results...</p>
              <div className="text-xs text-slate-500">March 5, 2024 • 10 min read</div>
            </div>
          </div>
        </div>

        {/* Back to Blog */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
