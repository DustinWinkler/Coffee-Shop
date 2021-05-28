import React from 'react'
import {Link} from "react-router-dom"

export default function Categories(props) {
	return (
		<div>
			<h1 className="title">Menu</h1>
			{props.categories.map(cat => {
				let flattened = cat.split(' ')
				let string = ''
				flattened.forEach(element => {
					string = string.concat(element)
				});
				
				return (
						<Link className="menu-link" to={"/coffee-shop/menu/" + string}>
							{cat}
						</Link>
				)
				})}
			</div>
	)
}
