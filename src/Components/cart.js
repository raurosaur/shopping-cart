import { Component } from "react";
import products from './images';

function Tab({item}){
    const { src, name, cost, quantity, total } = item;
    return(
        <div className = 'tab'>
            <img src = {src} alt = {name} />
            <div>{name}</div>
            <div>${cost}</div>
            <div>{quantity}x</div>
            <div>${total}</div>
        </div>
    );
}
class Cart extends Component{
    state  = {
        cart: []
    }
    constructor(){
        super();
        this.process = this.process.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
    }
    componentDidMount(){
        this.process();
    }
    process(){
        const list = this.props.items.map(el => el.id);
        console.log(this.props);
        let cart = products.filter(el => list.includes(el.id));
        for(let item of cart){
            const index = list.indexOf(item.id);
            item.quantity = this.props.items[index].num;
            item.total = item.quantity * item.cost;
        }
        this.setState({cart: cart});
    }
    calculateTotal(){
        const {cart} = this.state;
        const total = cart.reduce((prev, curr) => prev + curr.total, 0);
        return total.toFixed(2);
    }
    render(){
        const {cart} = this.state;
        const total = this.calculateTotal();
        return(
        <div className = 'contain'>
            <div className = 'cart'>
                {cart.map(item => {
                        if(item.quantity > 0)
                            return <Tab item = {item} key = {item.id} />
                        return '';
                })}
                <div className = 'total'>$ {total}</div>
                <div className = 'empty'></div>
                <button>Checkout</button>
            </div>
        </div>
        );
    }
}

export default Cart;