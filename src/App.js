import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Cart from './Cart'
import Home from './Home'
import Categories from './Categories'
import Items from './Items'

function App() {
  const [cart, setCart] = useState([])
  const [data] = useState([{"Hot Coffees":{"Caffe Americano":{"size":"16 oz","calories":15,"caffeine":225,"price":3},"Blonde Roast":{"size":"16 oz","calories":5,"caffeine":360,"price":3},"Cappucino":{"size":"16 oz","calories":140,"caffeine":150,"price":3.5},"Espresso Shot":{"size":"1.5 oz","calories":10,"caffeine":150,"price":2},"Caramel Macchiato":{"size":"16 oz","calories":250,"caffeine":150,"price":4},"Caffe Mocha":{"size":"16 oz","calories":370,"caffeine":175,"price":4}}},{"Iced Teas":{"Unsweetened Peach Tea":{"size":"14.5 oz","calories":0,"caffeine":16,"price":3},"Mango Black Tea":{"size":"14.5 oz","calories":100,"caffeine":55,"price":3},"Iced Black Tea Lemonade":{"size":"16 oz","calories":50,"caffeine":25,"price":3},"Iced Matcha Tea Latte":{"size":"16 oz","calories":200,"caffeine":80,"price":3}}},{"Hot Teas":{"Chai Tea":{"size":"16 oz","calories":0,"caffeine":40,"price":2.5},"London Fog Tea Latte":{"size":"16 oz","calories":180,"caffeine":40,"price":3.5},"Matcha Tea Latte":{"size":"16 oz","calories":240,"caffeine":80,"price":3},"Honey Citrus Mint Tea":{"size":"16 oz","calories":130,"caffeine":16,"price":3}}},{"Frappucinos":{"Strawberry Funnel Cake Frappuccino":{"size":"16 oz","calories":410,"caffeine":85,"price":5},"Mocha Cookie Crumble Frappuccino":{"size":"16 oz","calories":480,"caffeine":95,"price":5},"Caramel Ribbon Crunch Frappuccino":{"size":"16 oz","calories":470,"caffeine":85,"price":5}}}])

	const categories = []

	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		categories.push((Object.keys(element).toString()))
	}

  const addCartItem = (item) => {
    setCart(cart.concat(item))
  }

  const removeCartItem = (index) => {
    let newArr = [...cart]
    newArr.splice(index,1)
    setCart(newArr)
  }

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">{"Cart • " + cart.length}</Link></li>
          <li><Link to="/categories">Menu</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact render={(props) => (<Cart {...props} removeFromCart={removeCartItem} cart={cart} />)} />
        <Route path="/categories" exact 
        render={(props) => (<Categories {...props} categories={categories} />
  )} />
        {categories.map((cat, index) => {
          let flattened = cat.split(' ')
          let string = ''
          flattened.forEach(element => {
            string = string.concat(element)
          });

          return (
            <Route 
              key={'meme'}
              exact path={'/menu/' + string}
              render={(props) => (<Items addToCart={addCartItem} category={data[index]} />)}
            />
          )
        })}

      </Switch>
    </Router>
  );
}

export default App;
