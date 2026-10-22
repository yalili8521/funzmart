import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import goodsList from '../../data/FunzyMartList';
import ProductCard from '../../components/ProductCard/ProductCard';
import './Catalog.css';
import Footer from '../../components/Footer/Footer';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl || 'all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(goodsList.map(item => item.type))];
    return cats;
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = goodsList.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.type === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
    });

    // Sort products
    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [selectedCategory, priceRange, sortBy, searchTerm]);

  const maxPrice = Math.max(...goodsList.map(p => p.price));

  // Get category display name
  const getCategoryDisplayName = () => {
    if (selectedCategory === 'all') return 'All Toys';
    return selectedCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="catalog-page">
      {/* Products Grid */}
      <main className="catalog-main">
        <div className="catalog-header">
          <h1>Product Catalog</h1>
        </div>

        {/* Category Filter Bar */}
        <div className="catalog-filter-bar">
          <div className="category-display">
            <h2>{getCategoryDisplayName()}</h2>
          </div>
          <div className="category-buttons">
            <button
              className={selectedCategory === 'all' ? 'cat-btn active' : 'cat-btn'}
              onClick={() => setSelectedCategory('all')}
            >
              All Toys
            </button>
            <button
              className={selectedCategory === 'wooden-toys' ? 'cat-btn active' : 'cat-btn'}
              onClick={() => setSelectedCategory('wooden-toys')}
            >
              Wooden Toys
            </button>
            <button
              className={selectedCategory === 'stuffed-animals' ? 'cat-btn active' : 'cat-btn'}
              onClick={() => setSelectedCategory('stuffed-animals')}
            >
              Stuffed Animals
            </button>
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found matching your criteria.</p>
          </div>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Catalog;
