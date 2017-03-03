import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import { Image, Button } from 'semantic-ui-react'

export default class NoOrder extends Component {

	createOrder(event) {
		browserHistory.push('/orders/add');
	}

	render() {
		return (
			<div>
				<Image src='ghost.png' size='small' centered/>
				<h5 style={{color: '#888'}}>Pas de commande pour le moment...</h5>
				<Button onClick={this.createOrder.bind(this)}>Une petite faim ?</Button>
			</div>
		)
	}
}