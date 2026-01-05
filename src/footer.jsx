import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Subtle top accent */}
      <div className="h-1 bg-gradient-to-r from-blue-600 to-yellow-500"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              NNAKS SOLUTIONS & ENGINEERING LTD
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner for high-quality solar products, lighting, cables, 
              circuit breakers, and electrical solutions in Mbarara, Uganda.
            </p>
          </div>

          {/* Quick Links (optional - add your pages) */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#solar" className="hover:text-blue-400 transition">Solar Products</a></li>
              <li><a href="#lights" className="hover:text-blue-400 transition">Lighting</a></li>
              <li><a href="#cables" className="hover:text-blue-400 transition">Cables & Accessories</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="bg-blue-600 p-3 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Mbarara, Uganda</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="bg-blue-600 p-3 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+256-777-117714" className="hover:text-blue-400 transition">
                  +256-777-117714
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="bg-blue-600 p-3 rounded-full">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@mbararaelectronics.ug" className="hover:text-blue-400 transition">
                  nnakssolutions@gmail.com
                </a>
              </div>
            </div>

            {/* Call to Action Button */}
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white hover:bg-blue-500 rounded-lg font-semibold transition shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NNAKS SOLUTIONS & ENGINEERING LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;