import React from 'react'
import { useLocation } from "react-router-dom";

const CartDetail = () => {
  const location = useLocation();
  const { image } = location.state || {};
  const styles = {
    imgContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "2px",
      marginTop: "1px",
      width:"600px"/* sağa götürüyo*/
    },
    img: {
      width:"700px", // Ensure the image fills the container
      height: "600px",
      objectFit: "cover", // Ensure image covers the area properly
    },
    pet: {
      marginTop: "25px",
    },
  };
  return (
    <div>
       <div  style={styles.imgContainer} >
        <img
          key={image.id}
          src={image.image}
          alt={`image-${image.id}`}
          /*style={styles.img}*/
          className="detayresim"
        />
              </div>
        <div className="detail-content">
        <div className="content">
          <p className="imgtitle" /*style={styles.pet}*/>{image.name}</p>
          <br />
          {image.description}
        </div>
        <div className="fyt">
               <p>{image.price+"TL"}</p>
              </div>
        </div>
    </div>
  )
}

export default CartDetail
