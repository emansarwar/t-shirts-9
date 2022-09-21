import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart}) => {


    return (
        <div className='cart-main'>
            <h2>ITEMS SELECTED:{cart.length}</h2>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;