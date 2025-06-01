
import { useState } from 'react';
import { Menu, X, ShoppingCart, Smartphone, Wrench, Settings } from 'lucide-react';

interface NavigationProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

const Navigation = ({ cartItemsCount, onCartClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Smartphone className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-900">Fixcell Pro Mobile</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Home
            </a>
            <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors font-medium"> 
              Accessories
            </a>
            <a href="/repair-services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Repair Services
            </a>
            <a href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Contact
            </a>
            <a href="/admin" className="text-gray-700 hover:text-orange-500 transition-colors font-medium flex items-center space-x-1">
              <Settings className="h-4 w-4" />
              <span>Admin</span>
            </a>
            {/* New Login & Signup links */}
            <a href="/login" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Login
            </a>
            <a href="/signup" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Sign Up
            </a>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in border-t border-orange-200">
              <div className="flex flex-col space-y-4">
                <a href="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                  Home
                </a>
                <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                  Accessories
                </a>
                <a href="/repair-services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                  Repair Services
                </a>
                <a href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                  Contact
                </a>
                <a href="/admin" className="text-gray-700 hover:text-orange-500 transition-colors font-medium flex items-center space-x-1">
                  <Settings className="h-4 w-4" />
                  <span>Admin</span>
                </a>
                {/* New Login & Signup links */}
                <a href="/login" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                  Login
                </a>
                <a href="/signup" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                  Sign Up
                </a>
              </div>
            </div>
          )}


          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in border-t border-orange-200">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Home
              </a>
              <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Accessories
              </a>
              <a href="/repair-services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Repair Services
              </a>
              <a href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
                Contact
              </a>
              <a href="/admin" className="text-gray-700 hover:text-orange-500 transition-colors font-medium flex items-center space-x-1">
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
