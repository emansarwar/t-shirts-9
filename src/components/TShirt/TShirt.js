import React from 'react';
import './TShirt.css'
const TShirt = ({handleAddToCart, tshirt}) => {
    const {name, picture,price} = tshirt;
    return (
        <div className='t-shirt'>
            
            <img src={picture} alt=''></img>
            <h3>{name}</h3>
            <h3>PRICE:${price}</h3>
            <button onClick={() => handleAddToCart(tshirt)}>ADD TO CART</button>

        </div>
    );
};

export default TShirt;