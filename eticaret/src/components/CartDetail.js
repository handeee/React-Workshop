import React from "react";
import { useLocation } from "react-router-dom";

const CartDetail = () => {
  const location = useLocation();
  const { image } = location.state || {};

  return (
    <div style={{ display: "flex", marginTop: "40px" }}>
      <div>
     
        <img
          key={image.id}
          src={image.image}
          alt={`image-${image.name}`}
          style={{ width: "500px", height: "500px" }}
          className="detayresim"
        />
      </div>
      <div className="detail-content" style={{ marginLeft: "160px",marginTop:"10px" }}>
        <div className="content">
          <p className="imgtitle">{image.name}</p>
          <br />
          {image.description}
        </div>
        <div className="fyt" style={{ marginTop:"10px"}}>
          <p>{image.price + "TL"}</p>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;
