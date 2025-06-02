import { useState } from 'react';
import { Menu, X, ShoppingCart, Smartphone, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this

interface NavigationProps {
  cartItemsCount: number;
  onCartClick: () => void; 
}

const Navigation = ({ cartItemsCount, onCartClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const router = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState('');
  


  const handleAdminLogin = () => {
  setLoginError('');
  setLoginSuccess('');

  if (!adminUsername.trim() || !adminPassword.trim()) {
    setLoginError('Please enter both username and password.');
    return;
  }

  if (adminUsername === 'admin' && adminPassword === 'admin123') {
    setLoginSuccess('Login successful! Redirecting to Admin Dashboard...');
    setTimeout(() => {
      setShowAdminLogin(false);
      router('/admin');
    }, 1500); // slight delay before navigating
  } else {
    setLoginError('Incorrect username or password.');
  }
};



  return (
    <>
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
              <a href="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Accessories</a>
              <a href="/repair-services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Repair Services</a>
              <a href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</a>

              {/* Admin Button */}
              <button
                onClick={() => setShowAdminLogin(true)}
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium flex items-center space-x-1"
              >
                <Settings className="h-4 w-4" />
                <span>Admin</span>
              </button>
            </div>

            {/* Right-side icons */}
            <div className="flex items-center space-x-4">
              {/* Cart Button */}
              <button onClick={onCartClick} className="relative p-2 text-gray-700 hover:text-orange-500 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {cartItemsCount}
                  </span>
                )}
              </button>

              {/* Login & Signup for Desktop */}
              <a href="/login" className="hidden md:inline text-gray-700 hover:text-orange-500 transition-colors font-medium">Login</a>
              <a href="/signup" className="hidden md:inline text-gray-700 hover:text-orange-500 transition-colors font-medium">Sign Up</a>

              {/* Mobile Menu Toggle */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in border-t border-orange-200">
              <div className="flex flex-col space-y-4">
                <a href="/" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Home</a>
                <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Accessories</a>
                <a href="/repair-services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Repair Services</a>
                <a href="/contact" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Contact</a>
                <button
                  onClick={() => setShowAdminLogin(true)}
                  className="text-gray-700 hover:text-orange-500 transition-colors font-medium flex items-center space-x-1"
                >
                  <Settings className="h-4 w-4" />
                  <span>Admin</span>
                </button>
                <a href="/login" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Login</a>
                <a href="/signup" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">Sign Up</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={adminUsername}
              onChange={(e) => setAdminUsername(e.target.value)}
              className="w-full mb-3 px-3 py-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full mb-3 px-3 py-2 border rounded"
            />
              {loginSuccess && (
                <p className="mb-2 text-sm text-green-700 bg-green-100 p-2 rounded">
                  {loginSuccess}
                </p>
              )}
              {loginError && (
                <p className="mb-2 text-sm text-red-700 bg-red-100 p-2 rounded">
                  {loginError}
                </p>
              )}
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowAdminLogin(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAdminLogin}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
