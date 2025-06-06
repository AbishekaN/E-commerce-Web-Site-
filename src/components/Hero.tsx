import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Smartphone, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-orange-50 to-yellow-50 text-gray-900 py-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-500/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                Mobile Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-lg">
              Premium accessories and expert repair services for all your mobile devices. 
              Professional quality guaranteed, service you can trust.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/accessories">
                <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-lg font-bold hover:from-orange-600 hover:to-yellow-600 transition-all hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Shop Accessories</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>

              <Link to="/repair-services">
                <button className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all">
                  Book Repair
                </button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-yellow-500" />
                <span className="text-sm text-gray-600">Warranty Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-orange-500" />
                <span className="text-sm text-gray-600">Fast Service</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative z-10 bg-gradient-to-br from-orange-100 to-yellow-100 backdrop-blur-sm rounded-2xl p-8 border border-orange-200">
              <Smartphone className="h-48 w-48 mx-auto text-gray-700" />
              <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                Expert Service
              </div>
              <div className="absolute bottom-4 left-4 bg-yellow-500 text-gray-900 text-xs px-2 py-1 rounded-full font-bold">
                Quality Parts
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
