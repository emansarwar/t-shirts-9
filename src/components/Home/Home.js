
import './Home.css'
import Cart from '../Cart/Cart';
import useTShirts from '../../hooks/useTShirts';
import TShirt from '../TShirt/TShirt';
import { useState } from 'react';

const Home = () => {
    const [tshirts, setTshirts] = useTShirts();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tshirt => tshirt.id === selectedItem.id);
        if(!exists){
            const newCart = [...cart, selectedItem];
        setCart(newCart);
        }
        else{
            alert('already exist')
        }
        
    }
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tshirt => tshirt.id !== selectedItem.id);
        setCart(rest);
    }

    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}
                    
                ></Cart>
            </div>
        </div>
    );
};

export default Home;