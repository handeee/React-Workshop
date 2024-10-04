import React from "react";
import { useLocation } from "react-router-dom";

const CartDetail = ({ product, onAddToCart }) => {
  const location = useLocation();
  const { image } = location.state || {};
  const handleAddToCart = () => {
    onAddToCart(product);
   
  };
  return (
    <div style={{ display: "flex", marginTop: "40px" }}>
      <div>
        {/* Product Image */}
        <img
          key={image.id}
          src={image.image}
          alt={`image-${image.name}`}
          style={{ width: "500px", height: "460px" }}
          className="detayresim"
        />
      </div>
      
      {/* Product Details and Price */}
      <div className="detail-content" style={{ marginLeft: "160px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div className="content">
          <p className="imgtitle">{image.name}</p>
          <br />
          {image.description}
        </div>
        <div className="fyt" style={{ marginTop:"30px" }}>
          <p>{image.price + " TL"}</p>
        </div>
        <button 
          style={{
            width: "250px",
            height: "50px", 
            marginTop: "auto",   
            alignSelf: "center", 
            marginBottom:"120px"
        }}  /*onClick={handleAddToCart}*/>
          Sepete ekle
        </button>
      </div>
    </div>
  );
};

export default CartDetail;
