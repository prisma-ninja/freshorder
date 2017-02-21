import React, {Component} from 'react'
import { Image } from 'semantic-ui-react'

import GridAllCenter from '../layouts/GridAllCenter.jsx'
import NoOrders from '../components/NoOrders.jsx'

export default class NoOrdersPage extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<GridAllCenter textAlign="center">
				<NoOrders /> 
			</GridAllCenter>
		)
	}
}

