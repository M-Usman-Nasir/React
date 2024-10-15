import { useState } from 'react';
const Cart = () => {
  const [cart, setCart] = useState([]); // Fetch this from state management

  const handleRemove = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };
  return (
    <div className="cart-page">
      {cart.length ? (
        cart.map(product => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};
export default Cart;