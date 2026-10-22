import React from 'react';
import { Link } from 'react-router-dom';
import goodsList from '../../data/FunzyMartList';
import './Home.css';
import WatchSection from '../../components/WatchSection/WatchSection';
import Footer from '../../components/Footer/Footer';
import Ins from '../../components/SubIns/Ins';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  // Get featured products (first 4 products)
  const featuredProducts = goodsList.slice(0, 4);

  // Get categories
  const categories = [
    {
      type: 'stuffed-animals',
      name: 'Stuffed Animals',
      image: goodsList.find(p => p.type === 'stuffed-animals')?.img
    },
    {
      type: 'wooden-toys',
      name: 'Wooden Toys',
      image: goodsList.find(p => p.type === 'wooden-toys')?.img
    }
  ];

  const StuffedAnimals = goodsList.filter(product => product.type === 'stuffed-animals').slice(0,4);
  const WoodenToys = goodsList.filter(product => product.type === 'wooden-toys').slice(0,4);

return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h6>Say Hello to FunzyMart!</h6>
          <h1>Let happiness not only last in childhood</h1>
          <Link to="/catalog" className="cta-button">
            Open Catalog
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="categories-grid">
            <Link
              to={`/catalog?category=stuffed-animals`}
              className="category-card category-yellow"
            >
              <div className="category-image">
                <img src={categories[0].image} alt={categories[0].name} />
              </div>
              <div className="category-content">
                <h3>{categories[0].name}</h3>
                <button className="shop-now-button">Shop Now</button>
                </div>
            </Link>
           <Link
            to={`/catalog?category=wooden-toys`}
            className="category-card category-pink"
            >
                <div className="category-image">
                    <img src={categories[1].image} alt={categories[1].name} />
                </div>
                <div className="category-content">
                <h3>{categories[1].name}</h3>
                <button className="shop-now-button">Shop Now</button>
                </div>
            </Link>
          </div>
        </section>
      {/* Featured Products Section */}
        <div className="products-section">
            <div className="products-header">
                <h2>Stuffed Animals</h2>
            <Link to={`/catalog?category=stuffed-animals`} className="see-all-link"> See All Toys</Link>
            </div>
            <div className="product-grid">
              {StuffedAnimals.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
        {/* <div className="products-grid">
          {StuffedAnimals.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="featured-product-card stuffed-animal-card">
              <div className="product-image">
                <img src={product.img} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="price">${product.price}USD</p>
            </Link>
          ))}
        </div> */}
        </div>
        <div className="products-section">
            <div className="products-header">
                <h2>Wooden Toys</h2>
                <Link to={`/catalog?category=wooden-toys`} className="see-all-link"> See All Toys </Link>
            </div>
            <div className="product-grid">
              {WoodenToys.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
        {/* <div className="products-grid">
          {WoodenToys.map(product => (
            <Link key={product.id} to={`/product/${product.id}`} className="featured-product-card wooden-toy-card">
              <div className="product-image">
                <img src={product.img} alt={product.name} />
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="price">${product.price}USD</p>
            </Link>
          ))}
        </div> */}
        </div>

        {/* watch section */}
        <WatchSection></WatchSection>

        <div className="content-five">
        <p style={{ fontSize: "40px" }}>
          Use toys to create a childhood full of  <br /> miracles for children
        </p>
        <div className="content-main">
          <div className="main-left">
            <p style={{ fontSize: "25px" }}>Describe</p>
            <p style={{ border: "2px solid #a5c926", width: "80px" }}></p>
            <p style={{ color: "#999999" }}>
              Our store is dedicated to providing you and your children with more than just entertainment tools; we also provide intellectual enlightenment and emotional connections. Every toy undergoes rigorous quality screening to ensure safety and durability, allowing children to spend their most innocent and precious time together.
            </p>
            <button>GET IT NOW!</button>
          </div>
          <img
            src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg"
            alt=""
            width="40%"
          />
        </div>
      </div>

      <Ins></Ins>
      <Footer></Footer>
    

     
    </div>
  );
};

export default Home;