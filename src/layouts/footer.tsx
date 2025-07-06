import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Sms, Whatsapp, Call, Home } from "iconsax-reactjs";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              Unique Building Concepts
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Let's lay the foundation for excellence. Building the future with innovation, quality, and integrity.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Call size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">+234 (0) 706 554 6623</span>
              </div>
              <div className="flex items-center gap-3">
                <Sms size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">uniquebuildingconcepts07@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Home size={18} className="text-blue-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Company
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Projects', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                'Building Construction',
                'Road Construction', 
                'Bridge Construction',
                'Other Construction Projects'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 border-b border-gray-700 pb-2">
              Stay Connected
            </h3>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for updates and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <Button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-300 text-sm mb-3">Follow us on social media</p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#", label: "Facebook" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Sms, href: "#", label: "SMS" },
                  { icon: Whatsapp, href: "#", label: "WhatsApp" }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    aria-label={label}
                  >
                    <Icon 
                      size={20} 
                      className="text-gray-300 group-hover:text-white transition-colors" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Unique Building Concepts. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
