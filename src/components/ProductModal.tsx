
import { X, Star, ShoppingCart, Check } from 'lucide-react';
import { Product } from '../types/Product';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductModal = ({ product, onClose, onAddToCart }: ProductModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
          
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-gray-400 text-8xl">📱</div>
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400 text-2xl">📱</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <span className="text-blue-600 text-sm font-medium px-3 py-1 bg-blue-50 rounded-full">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500">(4.8) • 124 reviews</span>
                </div>
              </div>
              
              <div className="text-4xl font-bold text-blue-600">
                ${product.price}
              </div>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {product.description}
              </p>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-3 text-sm">
                <span className="text-gray-600">Stock:</span>
                <span className={`font-medium ${
                  product.stock > 10 ? 'text-green-600' : 'text-orange-600'
                }`}>
                  {product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
                </span>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="flex-1 bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors font-medium">
                  ♡
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
