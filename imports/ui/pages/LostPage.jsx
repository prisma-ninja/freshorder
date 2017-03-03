import React, {Component} from 'react'
import { Header } from 'semantic-ui-react'

import GridAllCenter from '../layouts/GridAllCenter.jsx'

export default class LostPage extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<GridAllCenter textAlign="center">
				<Header size="big">404</Header>
			</GridAllCenter>
		)
	}
}

