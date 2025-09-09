"use client";

import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping web development, from AI integration to advanced frameworks and performance optimization techniques.",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Building Scalable E-commerce Solutions: A Complete Guide",
      excerpt: "Learn how to build e-commerce platforms that can handle growth, from architecture decisions to payment integration and performance optimization.",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Digital Marketing Strategies That Actually Work in 2024",
      excerpt: "Discover proven digital marketing strategies that drive real results, including SEO, content marketing, and social media best practices.",
      date: "March 5, 2024",
      readTime: "10 min read",
      category: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "Compare the pros and cons of native and cross-platform mobile development approaches to help you make the right choice for your project.",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      title: "SEO Best Practices for Modern Websites",
      excerpt: "Master the fundamentals of SEO with practical tips and strategies that will help your website rank higher in search results.",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      title: "The Role of UX Design in Business Success",
      excerpt: "Understand how good UX design directly impacts business metrics and learn practical approaches to improve user experience.",
      date: "February 15, 2024",
      readTime: "7 min read",
      category: "UX Design",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop"
    }
  ];

  const categories = ["All", "Web Development", "E-commerce", "Digital Marketing", "Mobile Development", "SEO", "UX Design"];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Blog</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, tips, and trends in web development, 
            digital marketing, and technology. Learn from our experience and grow your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 mb-12 overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="ml-3 text-slate-500 text-sm">{blogPosts[0].category}</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                <Link href={`/blog/${blogPosts[0].id}`} className="hover:text-blue-600 transition-colors">
                  {blogPosts[0].title}
                </Link>
              </h2>
              <p className="text-slate-600 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-slate-500">
                  <span>{blogPosts[0].date}</span>
                  <span className="mx-2">•</span>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <Link 
                  href={`/blog/${blogPosts[0].id}`}
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="bg-slate-100 text-slate-700 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-slate-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white mt-12">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest articles, tips, and insights delivered directly to your inbox. 
            Join our community of developers and business owners.
          </p>
          <form className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
