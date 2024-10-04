import React from 'react';
import alertify from 'alertifyjs';
import {Button, ListGroup, ListGroupItem} from 'reactstrap';

const Cart = ({cartItems, onRemoveFromCart, onClearCart}) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleRemoveFromCart = (item) => {
    onRemoveFromCart(item);
    alertify.error(`${item.name} sepetten çıkarıldı!`);
  };

  const handleClearCart = () => {
    onClearCart();
    alertify.error('Sepet boşaltıldı!');
  };

  return (
    <div>
      <h3>Sepet</h3>
      <ListGroup>
        {cartItems.map((item) => (
          <ListGroupItem key={item.id}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: '50px', height: '50px', marginRight: '10px' }} 
              />
            
              {item.name} - ${item.price}
              <Button 
                color='warning' 
                onClick={() => handleRemoveFromCart(item)} 
                style={{ float: 'right',marginLeft:"1000px"}} 
                className='btn btn-sm'>
                Kaldır
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
      <h4 className='mt-5'>Toplam: ${totalPrice}</h4>
      <Button color='danger' onClick={handleClearCart}>Sepeti Boşalt</Button>
    </div>
  );
};

export default Cart;
