import React, {Component} from 'react'
import { Button, Icon } from 'semantic-ui-react'

import GridAllCenter from '../layouts/GridAllCenter.jsx'
import Timer from '../components/Timer.jsx'

export default class NoOrdersPage extends Component {

	render() {
		return (
			<GridAllCenter textAlign="center">
				<Icon name='hourglass empty' color='grey' size='massive' />
				<Timer let={new Date(2017, 1, 20, 16, 0, 0).getTime()} /> 
				<p>
					Une commande est en cours, c'est le moment d'en profiter !
				</p>
				<Button labelPosition='right' icon='right chevron' content='Commander !' />
			</GridAllCenter>
		)
	}
}
