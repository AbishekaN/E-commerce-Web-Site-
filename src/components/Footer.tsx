
import { Smartphone, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Smartphone className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Fixcell Pro Mobile</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for mobile accessories and repair services. 
              Quality products, expert service, unbeatable prices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Repair Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Screen Replacement</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Battery Replacement</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Water Damage Repair</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Software Issues</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Warranty Service</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">123 Tech Street, Digital City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-300">info@fixcellpromobile.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="font-medium mb-2 text-yellow-500">Store Hours</h4>
              <p className="text-gray-300 text-sm">
                Mon - Fri: 9:00 AM - 7:00 PM<br />
                Saturday: 10:00 AM - 6:00 PM<br />
                Sunday: 12:00 PM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Fixcell Pro Mobile. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-orange-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-orange-500 text-sm transition-colors">
              Return Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
