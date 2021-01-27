import { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './Components/nav';
import Home from './Components/home';
import Shop from './Components/shop';
import Product from './Components/product';
import products from './Components/images';
import Cart from './Components/cart';

const item = function(id, num){
  this.id = id; this.num = num;
}
class App extends Component{
  state = {
    cart: 0,
    items : []
  }
  constructor(){
    super();
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.getItem = this.getItem.bind(this);
  }
  componentDidMount(){
    this.setState({items: products.map(el => new item(el.id, 0))});
  }
  componentDidUpdate(){

  }
  increment({id}){
    const array = [...this.state.items]
    for(let item of array)
      if(item.id === id)
        item.num++;
    this.setState({items: array});
  }
  decrement({ id }) {
    const array = [...this.state.items]
    for (let item of array)
      if (item.id === id)
        if(item.num > 0)item.num--;
    this.setState({ items: array });
  }
  getItem({id}){
    for(let item of this.state.items)
      if(item.id === id)
        return item.num;
  }
  render(){
    const i = this.increment, d = this.decrement;
    return(
    <Router className="root">
      <Nav numItems = {this.state.items.reduce((prev, curr) => prev + curr.num, 0)}/>
        <Switch>
          <Route exact path = '/' component = {Home} />
          <Route exact path = '/shop' component = {Shop} />
          <Route exact path='/shop/:id' render={({match}) => (<Product match = {match} num = {this.getItem} increment={i} decrement={d} />)}/>
          <Route exact path = '/cart' render = {() => (<Cart items = {this.state.items} />)} />
        </Switch>
    </Router>
  );
  }
}
export default App;
