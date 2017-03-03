import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import { Icon, Button } from 'semantic-ui-react'

import Timer from './Timer.jsx'

export default class OrderAlert extends Component {
	
	constructor(props) {
		super(props);
	}

	orderNow() {
		browserHistory.push('/orders/' + this.props.id + '/add');
	}

	render() {
		return (
			<div>
				<Icon name='hourglass empty' color='grey' size='massive' />
				<Timer let={this.props.endAt} /> 
				<p>
					Une commande est en cours, c'est le moment d'en profiter !
				</p>
				<Button onClick={this.orderNow.bind(this)} labelPosition='right' icon='right chevron' content='Commander !' />
			</div>
		)
	}
}