// app/layout.js
import Script from 'next/script'; // Import the Script component
import './globals.css';

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata = {
  title: 'GTM Testing Ground',
  description: 'A Next.js app to test GTM integration',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Add the GTM noscript tag to the body */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>

      {/* The main GTM script */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-6F9L57MDB5" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`          
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6F9L57MDB5');
        `}
      </Script>
      <body>{children}</body>
    </html>
  );
}