import products from './images.js';
import { useEffect, useState } from 'react';
const Product = ({ match, increment, decrement, num }) => {
    const [product, setProduct] = useState({});

    const getItem = () => {
        setProduct(products.find(el => el.id === match.params.id));
    }
    useEffect(() => {getItem()});

    return (
            <div className = 'product' >
                <img src= {product.src} alt= {product.name}/>
                <div className = 'name'>{product.name}</div>
                <div className = 'cost'>${product.cost}</div>
                <div className = 'add-rem'>
                    <div className = 'add' onClick = {() => increment(product)}>+</div>
                    <div className = 'numItem'>{num(product)}</div>
                    <div className='rem' onClick={() => {decrement(product)}}>-</div>
                </div>
                <button>Checkout</button>
            </div>
    );
}

export default Product;