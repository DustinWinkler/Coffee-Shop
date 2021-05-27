import React from 'react'

export default function Cart(props) {
  let total = 0
  props.cart.forEach(item => {
    total = total + item.price
  })
  
  let totalZero = false

  if (total === 0) {
    totalZero = true
  }

  let content

  if (totalZero) {
    content = (
      <p className="title">You have no Items in your cart</p>
    )
  } else {
    content = (
      <div>
      <h1 className="title">Cart</h1>
      <div className="cart">
      {props.cart.map((item, index) => {
        return (
          <div className="cart-item">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <button className="remove-item" onClick={() => props.removeFromCart(index)}>✕</button>
          </div>
        )
      })}
      </div>
        <p className="total">Your total is: ${total}</p>
    </div>
    )
  }

  return (
    <div>
      {content}
    </div>
  )
}
