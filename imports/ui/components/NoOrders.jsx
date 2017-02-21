import React, {Component} from 'react'
import { Image, Button } from 'semantic-ui-react'

export default class NoOrder extends Component {

	render() {
		return (
			<div>
				<Image src='ghost.png' size='small' centered/>
				<h5 style={{color: '#888'}}>Pas de commande pour le moment...</h5>
				<Button>Une petite faim ?</Button>
			</div>
		)
	}
}