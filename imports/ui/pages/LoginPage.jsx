import React, {Component} from 'react'
import { Image } from 'semantic-ui-react'

import GridAllCenter from '../layouts/GridAllCenter.jsx'
import Login from '../components/Login.jsx'

export default class LoginPage extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<GridAllCenter textAlign='left'>
				<Image src='hamburger.svg' size='small' centered/>
				<Login /> 
			</GridAllCenter>
		)
	}
}

