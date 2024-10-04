import React from 'react';
import alertify from 'alertifyjs';
import { Button, Card, CardBody, CardText, CardTitle } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const ProductCart = ({ product, onAddToCart,setcart }) => {
  const navigate = useNavigate();
  
  const handleAddToCart = () => {
    onAddToCart(product);
    alertify.success(`${product.name} sepete eklendi!`);
  };
  // const handleAddToCart = (product) => {
  //   console.log("Sepete eklenen ürün:", product); // Burada ürün bilgisini kontrol edin
  
  //   if (!product) {
  //     console.error("Ürün undefined!"); // Ürün tanımlı değilse hata ver
  //     return; // Hata durumunda işlemi durdur
  //   }
  
  //   setcart(prevItems => {
  //     const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
  
  //     if (existingItemIndex !== -1) {
  //       const updatedItems = [...prevItems];
  //       updatedItems[existingItemIndex] = {
  //         ...updatedItems[existingItemIndex],
  //         quantity: updatedItems[existingItemIndex].quantity + 1
  //       };
  //       alertify.success(`${product.name} ürününün adedi artırıldı!`);
  //       return updatedItems;
  //     } else {
  //       alertify.success(`${product.name} sepete eklendi!`);
  //       return [...prevItems, { 
  //         id: product.id, 
  //         name: product.name, 
  //         price: product.price, 
  //         image: product.image, 
  //         quantity: 1  
  //       }];
  //     }
  //   });
  // };
  
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
