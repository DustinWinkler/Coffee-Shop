import React from 'react'
import BlondeRoast from './images/BlondeRoast.webp'
import CaffeAmericano from './images/CaffeAmericano.webp'
import CaffeMocha from './images/CaffeMocha.webp'
import Cappucino from './images/Cappucino.webp'
import CaramelMacchiato from './images/CaramelMacchiato.webp'
import CaramelRibbonCrunchFrappuccino from './images/CaramelRibbonCrunchFrappuccino.webp'
import ChaiTea from './images/ChaiTea.webp'
import EspressoShot from './images/EspressoShot.webp'
import HoneyCitrusMintTea from './images/HoneyCitrusMintTea.webp'
import IcedBlackTeaLemonade from './images/IcedBlackTeaLemonade.webp'
import IcedMatchaTeaLatte from './images/IcedMatchaTeaLatte.webp'
import LondonFogTeaLatte from './images/LondonFogTeaLatte.webp'
import MangoBlackTea from './images/MangoBlackTea.webp'
import MatchaTeaLatte from './images/MatchaTeaLatte.webp'
import MochaCookieCrumbleFrappuccino from './images/MochaCookieCrumbleFrappuccino.webp'
import StrawberryFunnelCakeFrappuccino from './images/StrawberryFunnelCakeFrappuccino.webp'
import UnsweetenedPeachTea from './images/UnsweetenedPeachTea.webp'


export default function Items(props) {

  const hotCoffees = [CaffeAmericano, BlondeRoast, Cappucino, EspressoShot, CaramelMacchiato, CaffeMocha]

  const icedTeas = [UnsweetenedPeachTea, MangoBlackTea, IcedBlackTeaLemonade, IcedMatchaTeaLatte]

  const hotTeas = [ChaiTea, LondonFogTeaLatte, MatchaTeaLatte, HoneyCitrusMintTea]

  const frappys = [StrawberryFunnelCakeFrappuccino, MochaCookieCrumbleFrappuccino, CaramelRibbonCrunchFrappuccino]

  let currentList = []

  console.log("check")
  console.log(Object.keys(props.category).toString() === "Frappucinos")
  console.log(Object.keys(props.category).toString())

  if (Object.keys(props.category).toString() === "Frappucinos") {
    currentList = frappys
  } else if (Object.keys(props.category).toString() === "Hot Coffees") {
    currentList = hotCoffees
  } else if (Object.keys(props.category).toString() === "Hot Teas") {
    currentList = hotTeas
  } else {
    currentList = icedTeas
  }
  


  let coffees = Object.keys(props.category)
  let itemList = Object.keys(props.category[coffees])

  return (
    <div>
      <h1 className="title">{Object.keys(props.category)}</h1>
      <div className="items">
      {itemList.map((item, index) => {
        let newItem = {"name": item, "price": props.category[coffees][item].price}

        return (
          <div className="item-card">
            <h3>{item}</h3>
            <p>Size: {props.category[coffees][item].size}</p>
            <p>Price: ${props.category[coffees][item].price}</p>
            <p>Caffeine Content: {props.category[coffees][item].caffeine}mg</p>
            <img alt={item} src={currentList[index]} className="menu-img" />
            <button onClick={() => {props.addToCart(newItem)}}>Add {item} to Cart</button>
          </div>
        )
      })}
    </div>
    </div>
  )
}
