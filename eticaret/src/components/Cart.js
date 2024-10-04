import React, { useState } from 'react';
import alertify from 'alertifyjs';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

const Cart = ({ cartItems, onRemoveFromCart, onClearCart/*setCart*/ }) => {
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
  // const handleRemoveFromCart = (id, name) => {
  //   if (window.confirm('Bu ürünü çıkarmak istediğinize emin misiniz?')) {
  //     setCart(prevItems => {
  //       const updatedItems = prevItems.filter(item => !(item.id === id && item.name === name));
  //       return updatedItems; // Return the updated cart
  //     });
  //     alertify.error(`${name} sepetten çıkarıldı!`); // Show notification
  //   }
  // };
  const handleRemoveFromCart = (item) =>{
    onRemoveFromCart(item);
    alertify.error(`${item.name} sepetten çıkarıldı!`);
  }
  // Handle clearing the entire cart
  const handleClearCart = () => {
    onClearCart();
    alertify.error('Sepet boşaltıldı!');
  };
  return (
    <div>
      <h3 style={{ marginTop:"50px" }}>Sepet</h3>
      <ListGroup style={{ width:"1020px" }} >
        {cartItems.map((item, index) => (
          <ListGroupItem key={item.id}>
            <div style={{ display: 'flex', alignItems: 'center',height:"120px" }}>
              {/* Product image */}
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: '110px', height: '110px', marginRight: '10px' }} 
              />
               <p style={{  marginLeft: "75px",marginTop:"13px",marginRight:"40px"}}>{item.name}</p>
              {/* Quantity control buttons */}
              <div className="ana" style={{ display: "flex", marginLeft: "20px", marginRight: "30px", borderRadius: '30px' }}>
                <button className="azaltart" onClick={() => azalt(index)}>-</button>
                <button  style={{border: '1px solid lightgray',background: 'none',boxShadow: 'none',padding: '5px 10px',fontSize: '16px',borderRadius: '5px',            
      textAlign: 'center'            
    }}>{adetler[index] || 1}</button>
                <button className="azaltart" onClick={() => arttir(index)}>+</button>
              </div>
              <p style={{  marginLeft: "39px",marginTop:"13px"}}>${item.price * (adetler[index] || 1)}</p>    
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
      <h4 className='mt-5'>Toplam: ${totalPrice.toFixed(2)}</h4>
      <Button color='danger' onClick={handleClearCart}>Sepeti Boşalt</Button>
    </div>
  );
};

export default Cart;
