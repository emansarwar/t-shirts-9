import { useEffect, useState } from "react"

const useTShirts = () =>{
    const [tshirts, setTshirts] = useState([]);
    useEffect( () =>{
        fetch('tshirts.json')
        .then(res => res.json())
        .then(data => setTshirts(data));
    }, []);
return [tshirts, setTshirts];
} 
export default useTShirts;