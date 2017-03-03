import React, {Component} from 'react'
import { Image } from 'semantic-ui-react'

import GridAllCenter from '../layouts/GridAllCenter.jsx'
import CreateOrder from '../components/CreateOrder.jsx'

export default class CreateOrderPage extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<GridAllCenter textAlign="center">
				<CreateOrder /> 
			</GridAllCenter>
		)
	}
}
