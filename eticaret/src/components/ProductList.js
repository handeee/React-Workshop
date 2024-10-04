import React from 'react'
import ProductCart from './ProductCart';
import {Col, Row} from 'reactstrap'

const ProductList = ({products, onAddToCart,setcart,cartItems}) => {
  return(
    <Row className='mt-2'>
        {products.map((product) => (
          <Col sm="4" key={product.id}>
            <ProductCart key={product.id} product={product} onAddToCart={onAddToCart} setcart={setcart} cartItems={cartItems}/>
          </Col>
        ))}
    </Row>
  );
}
export default ProductList;