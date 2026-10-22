import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoriteContext';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Catalog from './pages/Catalog/Catalog';
import Delivery from './pages/Delivery/Delivery';
import About from './pages/About/About';
import Contacts from './pages/Contacts/Contacts';
import Admin from './pages/Admin/Admin';
import Product from './components/Product';
import './App.css';

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/product/:id" element={<Product />} />
            </Routes>
          </div>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
