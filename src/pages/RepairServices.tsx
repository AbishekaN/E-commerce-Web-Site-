
import { useState } from 'react';
import { Clock, Shield, Smartphone, Wrench, Zap, CheckCircle, Star, ArrowLeft, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { Service } from '../types/Product';

const RepairServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  const services: Service[] = [
    {
      id: '1',
      name: 'iPhone Screen Replacement',
      description: 'Professional iPhone screen repair for all models including iPhone 15, 14, 13, 12, and older versions. We use only genuine Apple parts.',
      price: 129.99,
      duration: '30-45 minutes',
      icon: 'smartphone',
      category: 'screen',
      rating: 4.9,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      name: 'Samsung Screen Replacement',
      description: 'Expert Samsung Galaxy screen repair for S23, S22, S21, Note series, and more. High-quality OLED displays guaranteed.',
      price: 99.99,
      duration: '30-45 minutes',
      icon: 'smartphone',
      category: 'screen',
      rating: 4.8,
      reviews: 142,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      name: 'iPhone Battery Replacement',
      description: 'Restore your iPhone battery life with genuine Apple batteries. Compatible with all iPhone models.',
      price: 69.99,
      duration: '20-30 minutes',
      icon: 'zap',
      category: 'battery',
      rating: 4.9,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1609592806285-8c0b00ae30f0?w=400&h=300&fit=crop'
    },
    {
      id: '4',
      name: 'Android Battery Replacement',
      description: 'High-quality battery replacement for Samsung, Google Pixel, OnePlus, and other Android devices.',
      price: 49.99,
      duration: '20-30 minutes',
      icon: 'zap',
      category: 'battery',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=300&fit=crop'
    },
    {
      id: '5',
      name: 'Water Damage Repair',
      description: 'Comprehensive water damage assessment and repair for all smartphone brands. Advanced drying and component replacement.',
      price: 89.99,
      duration: '1-2 hours',
      icon: 'shield',
      category: 'water',
      rating: 4.6,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=400&h=300&fit=crop'
    },
    {
      id: '6',
      name: 'Software Troubleshooting',
      description: 'Fix software issues, virus removal, OS updates, and performance optimization for all devices.',
      price: 39.99,
      duration: '15-30 minutes',
      icon: 'wrench',
      category: 'software',
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop'
    },
    {
      id: '7',
      name: 'Camera Repair',
      description: 'Professional camera module replacement and lens repair for both front and rear cameras.',
      price: 79.99,
      duration: '45-60 minutes',
      icon: 'smartphone',
      category: 'camera',
      rating: 4.7,
      reviews: 91,
      image: 'https://images.unsplash.com/photo-1606986628253-49bb0920e5af?w=400&h=300&fit=crop'
    },
    {
      id: '8',
      name: 'Charging Port Repair',
      description: 'Fix charging port issues, loose connections, and cable recognition problems for all devices.',
      price: 59.99,
      duration: '30-45 minutes',
      icon: 'zap',
      category: 'charging',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=400&h=300&fit=crop'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'screen', name: 'Screen Repair' },
    { id: 'battery', name: 'Battery' },
    { id: 'water', name: 'Water Damage' },
    { id: 'software', name: 'Software' },
    { id: 'camera', name: 'Camera' },
    { id: 'charging', name: 'Charging Port' }
  ];

  const priceRanges = [
    { id: 'all', name: 'All Prices' },
    { id: 'under50', name: 'Under $50' },
    { id: '50to100', name: '$50 - $100' },
    { id: 'over100', name: 'Over $100' }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'smartphone': return <Smartphone className="h-6 w-6" />;
      case 'zap': return <Zap className="h-6 w-6" />;
      case 'shield': return <Shield className="h-6 w-6" />;
      case 'wrench': return <Wrench className="h-6 w-6" />;
      default: return <Wrench className="h-6 w-6" />;
    }
  };

  const filteredServices = services.filter(service => {
    const categoryMatch = selectedCategory === 'all' || service.category === selectedCategory;
    let priceMatch = true;
    
    if (selectedPriceRange === 'under50') {
      priceMatch = service.price < 50;
    } else if (selectedPriceRange === '50to100') {
      priceMatch = service.price >= 50 && service.price <= 100;
    } else if (selectedPriceRange === 'over100') {
      priceMatch = service.price > 100;
    }
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Navigation cartItemsCount={0} onCartClick={() => {}} />
      
      {/* Header */}
      <section className="bg-white py-16 border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
          </div>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional Repair Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert mobile device repair with genuine parts, professional technicians, and comprehensive warranty coverage. 
              Get your device fixed quickly and reliably.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="font-medium text-gray-900">Filter Services:</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
              <select 
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>{range.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map(service => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-orange-200 group"
              >
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-2 rounded-lg">
                    {getIcon(service.icon)}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {service.reviews} reviews
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">
                      ${service.price}
                    </span>
                    <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-colors font-bold">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Service Guarantee
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We stand behind our work with comprehensive warranties and professional service
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">90-Day Warranty</h3>
              <p className="text-gray-600 text-sm">Comprehensive warranty on all repairs</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Service</h3>
              <p className="text-gray-600 text-sm">Most repairs completed same day</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Genuine Parts</h3>
              <p className="text-gray-600 text-sm">Only authentic and quality components</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Technicians</h3>
              <p className="text-gray-600 text-sm">Certified and experienced professionals</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default RepairServices;
