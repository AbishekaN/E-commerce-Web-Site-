import { useEffect, useState } from 'react';
import { Star, ShoppingCart, Filter } from 'lucide-react';
import { Product } from '../types/Product';
import { supabase } from '../lib/supabaseClient'; // ✅ Make sure this points to your Supabase client

interface FeaturedProductsProps {
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const FeaturedProducts = ({ onProductClick, onAddToCart }: FeaturedProductsProps) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Power', 'Cases', 'Audio', 'Chargers', 'Protection'];

  // ✅ Fetch from Supabase instead of Axios
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('Error fetching products:', error.message);
      } else {
        setProducts(data);
      }
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Premium Accessories</h2>
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
        {loading ? (
          <div className="text-center text-gray-500">Loading products...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden border border-gray-200"
              >
                <div className="relative cursor-pointer" onClick={() => onProductClick(product)}>
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="h-full object-cover" />
                    ) : (
                      <div className="text-gray-400 text-6xl">📱</div>
                    )}
                  </div>
                  {product.stock < 10 && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                      Low Stock
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-500 text-sm ml-2">(4.8)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">${product.price}</span>
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
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
