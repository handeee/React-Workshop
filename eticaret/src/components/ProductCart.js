import React from 'react'
import alertify from 'alertifyjs'
import {Button, Card, CardBody, CardText, CardTitle} from 'reactstrap'
import { useNavigate } from 'react-router-dom';
const ProductCart = ({product, onAddToCart}) =>{
  const navigate = useNavigate();
  const handleAddToCart = () =>{
    onAddToCart(product);
    alertify.success(`${product.name} sepete eklendi!`);
  }
  const gotodetail=(image)=>{
    navigate('/detail', { state: { image } });
  }

  return(
    <Card style={{margin: '10px'}}>
        <img src={product.image} alt={product.name} style={{width: '100%'}} onClick={()=>gotodetail(product)}></img>
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