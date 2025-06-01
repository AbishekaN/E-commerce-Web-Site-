import { Clock, Shield, Smartphone, Wrench, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Service } from '../types/Product';

const Services = () => {
  const services: Service[] = [
    {
      id: '1',
      name: 'Screen Replacement',
      description: 'Professional screen repair for all major smartphone brands',
      price: 89.99,
      duration: '30-45 minutes',
      icon: 'smartphone',
      category: 'Hardware Repair',
      image: '/placeholder.svg',
      rating: 4.8,
      reviews: 142
    },
    {
      id: '2',
      name: 'Battery Replacement',
      description: 'Restore your phone\'s battery life with genuine parts',
      price: 49.99,
      duration: '20-30 minutes',
      icon: 'zap',
      category: 'Hardware Repair',
      image: '/placeholder.svg',
      rating: 4.9,
      reviews: 98
    },
    {
      id: '3',
      name: 'Water Damage Repair',
      description: 'Comprehensive water damage assessment and repair',
      price: 79.99,
      duration: '1-2 hours',
      icon: 'shield',
      category: 'Emergency Repair',
      image: '/placeholder.svg',
      rating: 4.7,
      reviews: 76
    },
    {
      id: '4',
      name: 'Software Troubleshooting',
      description: 'Fix software issues, virus removal, and optimization',
      price: 39.99,
      duration: '15-30 minutes',
      icon: 'wrench',
      category: 'Software Repair',
      image: '/placeholder.svg',
      rating: 4.6,
      reviews: 124
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'smartphone': return <Smartphone className="h-8 w-8" />;
      case 'zap': return <Zap className="h-8 w-8" />;
      case 'shield': return <Shield className="h-8 w-8" />;
      case 'wrench': return <Wrench className="h-8 w-8" />;
      default: return <Wrench className="h-8 w-8" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Expert Repair Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Professional mobile device repair with genuine parts and warranty protection
          </p>
          <a 
            href="/repair-services"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-3 rounded-lg font-bold hover:from-orange-600 hover:to-yellow-600 transition-all hover:scale-105"
          >
            <span>View All Services</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.slice(0, 4).map(service => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-orange-200"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-3 rounded-lg">
                  {getIcon(service.icon)}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <span className="text-2xl font-bold text-orange-600">
                      ${service.price}
                    </span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-3 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-colors font-bold">
                    Book Repair
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-200">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our Repair Services?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                90-Day Warranty
              </h4>
              <p className="text-gray-600">
                All repairs come with our comprehensive 90-day warranty coverage
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Fast Turnaround
              </h4>
              <p className="text-gray-600">
                Most repairs completed within the same day or while you wait
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Genuine Parts
              </h4>
              <p className="text-gray-600">
                We use only genuine or high-quality replacement parts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
