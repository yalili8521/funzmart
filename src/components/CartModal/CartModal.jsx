import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './CartModal.css';

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.className === 'cart-modal-overlay') {
      onClose();
    }
  };

  const handleCheckout = () => {
    alert('Proceeding to checkout...');
    onClose();
  };

  return (
    <div className="cart-modal-overlay" onClick={handleBackdropClick}>
      <div className="cart-modal">
        <div className="cart-modal-header">
          <div className="cart-title">
            <ShoppingCart size={20} />
            <h2>Your Cart</h2>
          </div>
          <button className="close-btn" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="cart-modal-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map((item) => {
                  const itemId = item.cartId || item.id;
                  return (
                    <div key={itemId} className="cart-item">
                      <img src={item.img} alt={item.name} className="cart-item-image" />

                      <div className="cart-item-details">
                        <h4>{item.name}</h4>
                        <p className="cart-item-price">${item.price.toFixed(2)} USD</p>
                        <button
                          onClick={() => removeFromCart(itemId)}
                          className="remove-link"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="cart-item-quantity">
                        <span className="quantity-number">{item.quantity}</span>
                        <div className="quantity-arrows">
                          <button
                            className="qty-increase"
                            onClick={() => updateQuantity(itemId, 1)}
                          >
                            ▲
                          </button>
                          <button
                            className="qty-decrease"
                            onClick={() => updateQuantity(itemId, -1)}
                            disabled={item.quantity <= 1}
                          >
                            ▼
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="cart-modal-footer">
                <div className="cart-subtotal">
                  <span>Subtotal</span>
                  <span className="subtotal-price">$ {totalPrice.toFixed(2)} USD</span>
                </div>

                <button className="checkout-btn" onClick={handleCheckout}>
                  Continue to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
