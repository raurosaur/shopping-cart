import Card from './card';
import products from './images';
import {Link} from 'react-router-dom';
const Shop = () => {
    return(
        <div className = 'shop'>
            {products.map(product => (
                <Link to = {`shop/${product.id}`} key = {product.id}>
                <Card key = {product.id} image = {product.src} 
                name = {product.name} cost = {product.cost} />
                </Link>
            ))}
        </div>
    )
}

export default Shop;