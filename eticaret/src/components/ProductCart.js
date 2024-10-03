import React from 'react';
import alertify from 'alertifyjs';
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const ProductCart = ({ product, onAddToCart }) => {
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    onAddToCart(product);
    alertify.success(`${product.name} sepete eklendi!`);
  };
  
  const gotodetail = (image) => {
    // Burada ürün detayını doğrudan geçiyoruz
    console.log(image)
    navigate('/detail', { state: {image} });
  };
  const styles = {
   
    card: {
      
      transition: "transform 0.3s ease", // Hover efekti için geçiş
      margin: '10px' 
    },
    cardHover: {
      transform: "scale(1.05)", // Hover efekti
    }
   
  };
  return (
    <Card style={styles.card}
    onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
          onMouseLeave={(e) => e.currentTarget.style.transform = "none"}
    >
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: '100%' }} 
        onClick={() => gotodetail(product)} // Doğrudan product nesnesini geçiyoruz
      />
      <CardBody>
        <CardTitle>{product.name}</CardTitle>
        <CardText>{product.description}</CardText>
        <CardText>{product.price} ₺</CardText>
        <Button onClick={handleAddToCart} color='success'>Sepete Ekle</Button>
      </CardBody>
    </Card>
  );
}

export default ProductCart;
