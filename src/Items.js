import React from 'react'

export default function Items(props) {
  
  let coffees = Object.keys(props.category)
  let itemList = Object.keys(props.category[coffees])

  return (
    <div>
      <h1 className="title">{Object.keys(props.category)}</h1>
      <div className="items">
      {itemList.map(item => {
        let newItem = {"name": item, "price": props.category[coffees][item].price}

        let flattenedString = item.split(' ').join('')
        let imgURL = './images/' + flattenedString + '.webp'

        return (
          <div className="item-card">
            <h3>{item}</h3>
            <p>Size: {props.category[coffees][item].size}</p>
            <p>Price: ${props.category[coffees][item].price}</p>
            <p>Caffeine Content: {props.category[coffees][item].caffeine}mg</p>
            <img alt={item} src={imgURL} className="menu-img" />
            <button onClick={() => {props.addToCart(newItem)}}>Add {item} to Cart</button>
          </div>
        )
      })}
    </div>
    </div>
  )
}
