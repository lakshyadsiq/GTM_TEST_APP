"use client";

export default function CTAButton({ 
  children, 
  href, 
  variant = "primary", 
  onClick,
  className = "",
  ...props 
}) {
  const baseClasses = "font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-slate-600 text-white hover:bg-slate-700", 
    success: "bg-green-600 text-white hover:bg-green-700",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  const handleClick = (e) => {
    // Track the click in GTM dataLayer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'cta_click',
      'cta_text': children,
      'cta_destination': href || 'javascript_action'
    });

    if (onClick) {
      onClick(e);
    }
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={handleClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}
