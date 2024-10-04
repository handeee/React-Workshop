import React, { useState } from 'react';
import alertify from 'alertifyjs';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const Cart = ({ cartItems, onRemoveFromCart, onClearCart }) => {
  // Initialize state for quantities (adets), reading from localStorage if available
  const [adetler, setAdetler] = useState(() => {
    const savedCart = localStorage.getItem("userCart");
    const savedCartItems = savedCart ? JSON.parse(savedCart) : cartItems;
    return savedCartItems.reduce((acc, item, index) => ({ ...acc, [index]: item.quantity || 1 }), {});
  });

  // Function to decrease the quantity of an item
  const azalt = (index) => {
    setAdetler(prevAdetler => ({
      ...prevAdetler,
      [index]: Math.max(1, prevAdetler[index] - 1) // Prevent quantity from going below 1
    }));
  };

  // Function to increase the quantity of an item
  const arttir = (index) => {
    setAdetler(prevAdetler => ({
      ...prevAdetler,
      [index]: (prevAdetler[index] || 1) + 1
    }));
  };

  // Calculate the total price based on the quantities (adets)
  const totalPrice = cartItems.reduce((total, item, index) => {
    return total + item.price * (adetler[index] || 1);
  }, 0);

  // Handle removing an item from the cart
  const handleRemoveFromCart = (item) => {
    onRemoveFromCart(item);
    alertify.error(`${item.name} sepetten çıkarıldı!`);
  };

  // Handle clearing the entire cart
  const handleClearCart = () => {
    onClearCart();
    alertify.error('Sepet boşaltıldı!');
  };

  return (
    <div>
      <h3>Sepet</h3>
      <ListGroup>
        {cartItems.map((item, index) => (
          <ListGroupItem key={item.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Product image */}
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: '80px', height: '80px', marginRight: '10px' }} 
              />
              
              {/* Quantity control buttons */}
              <div className="ana" style={{ display: "flex", marginLeft: "20px", marginRight: "30px", borderRadius: '30px' }}>
                <button className="azaltart" onClick={() => azalt(index)}>-</button>
                <button>{adetler[index] || 1}</button>
                <button className="azaltart" onClick={() => arttir(index)}>+</button>
              </div>
              
              {/* Product name and price */}
              {item.name}  ${item.price * (adetler[index] || 1)}

              {/* Remove button */}
              <Button 
                color='warning' 
                onClick={() => handleRemoveFromCart(item)} 
                style={{ float: 'right', marginLeft: "auto" }} 
                className='btn btn-sm'>
                Kaldır
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>

      {/* Display total price */}
      <h4 className='mt-5'>Toplam: ${totalPrice.toFixed(2)}</h4>
      
      {/* Clear cart button */}
      <Button color='danger' onClick={handleClearCart}>Sepeti Boşalt</Button>
    </div>
  );
};

export default Cart;
