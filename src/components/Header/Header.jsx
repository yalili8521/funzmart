// src/components/Header/Header.jsx (Funzymart)

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Menu } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useFavorites } from '../../context/FavoriteContext';
import CartModal from '../CartModal/CartModal';
import './Header.css';

const Header = () => {
  const { totalItems } = useCart();
  const { favorites } = useFavorites();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <header className="header-funzy">
        <div className="header-container1">
                <div className="contact-left">
                    <span className="contact-items">Call Us: +1 213 974-9090</span>
                    <span className="contact-items">Email: FunzyMart@Gmail.com</span>
                </div>
                <div className="contact-right">
                        <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt="Facebook" className="contact-social-icon" />
                        <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt="Twitter" className="contact-social-icon" />
                        <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt="Instagram" className="contact-social-icon" />
                        <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt="LinkedIn" className="contact-social-icon" />
                        <img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt="YouTube" className="contact-social-icon" />
                </div>
        </div>
        <div className="header-container2">
          <nav className="header-nav">
            <Link to="/" className="nav-link"><strong>FunzyMart</strong></Link>
            <Link to="/catalog" className="nav-link">Catalog</Link>
            <Link to="/delivery" className="nav-link">Delivery</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contacts" className="nav-link">Contacts</Link>
            <Link to="/admin" className="nav-link">Admin</Link>
          </nav>

          <div className="header-right">
            <button className="icon-btn-funzy">
              <Heart className="icon" />
              {favorites.length > 0 && (
                <span className="badge-funzy">{favorites.length}</span>
              )}
            </button>
            <button className="icon-btn-funzy" onClick={handleCartClick}>Cart
              <ShoppingCart className="icon" />
              {totalItems > 0 && (
                <span className="badge-funzy">{totalItems}</span>
              )}
            </button>
            <button className="icon-btn-funzy mobile-menu">
              <Menu className="icon" />
            </button>
          </div>
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={handleCloseCart} />
    </>
  );
};

export default Header;