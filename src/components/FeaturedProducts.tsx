import { useState } from 'react';
import { Star, ShoppingCart, Filter } from 'lucide-react';
import { Product } from '../types/Product';

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const FeaturedProducts = ({ onProductClick, onAddToCart }: FeaturedProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: Product[] = [
    {
      id: '1',
      name: 'Wireless Power Bank 20000mAh',
      price: 49.99,
      image: '/placeholder.svg',
      category: 'Power',
      description: 'High-capacity wireless power bank with fast charging capability',
      stock: 15,
      features: ['Wireless charging', '20000mAh capacity', 'Fast charge', 'LED display']
    },
    {
      id: '2',
      name: 'Premium Phone Case',
      price: 24.99,
      image: '/placeholder.svg',
      category: 'Cases',
      description: 'Military-grade protection with stylish design',
      stock: 8,
      features: ['Drop protection', 'Scratch resistant', 'Wireless charging compatible', 'Premium materials']
    },
    {
      id: '3',
      name: 'Bluetooth Earbuds Pro',
      price: 79.99,
      image: '/placeholder.svg',
      category: 'Audio',
      description: 'Premium wireless earbuds with noise cancellation',
      stock: 12,
      features: ['Noise cancellation', '30h battery', 'Waterproof', 'Premium sound']
    },
    {
      id: '4',
      name: 'Fast Car Charger',
      price: 19.99,
      image: '/placeholder.svg',
      category: 'Chargers',
      description: 'Dual-port fast charging car adapter',
      stock: 20,
      features: ['Dual USB-C', 'Fast charging', 'Universal compatibility', 'LED indicator']
    },
    {
      id: '5',
      name: 'Screen Protector Kit',
      price: 14.99,
      image: '/placeholder.svg',
      category: 'Protection',
      description: 'Tempered glass screen protector with installation kit',
      stock: 25,
      features: ['9H hardness', 'Bubble-free', 'Crystal clear', 'Easy installation']
    },
    {
      id: '6',
      name: 'Wireless Charging Pad',
      price: 29.99,
      image: '/placeholder.svg',
      category: 'Chargers',
      description: 'Fast wireless charging pad with LED indicator',
      stock: 18,
      features: ['15W fast charging', 'LED status', 'Anti-slip design', 'Universal compatibility']
    }
  ];

  const categories = ['All', 'Power', 'Cases', 'Audio', 'Chargers', 'Protection'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Premium Accessories
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Enhance your mobile experience with our carefully curated collection of high-quality accessories
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Filter className="h-5 w-5 text-gray-600 mt-2" />
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-black shadow-lg font-bold'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-200"
            >
              <div 
                className="relative cursor-pointer"
                onClick={() => onProductClick(product)}
              >
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-6xl">📱</div>
                </div>
                {product.stock < 10 && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                    Low Stock
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm ml-2">(4.8)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">
                    ${product.price}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-4 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-colors flex items-center space-x-2 font-bold"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
