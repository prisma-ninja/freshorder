import React, {Component} from 'react'
import { Grid, Button, Form, Image } from 'semantic-ui-react'

import Login from './users/Login.jsx'

export default class App extends Component {

	render() {
		return (
			<Grid verticalAlign='middle' padded stackable centered>
				<Grid.Row>
      				<Grid.Column width={8} textAlign='left'>
      					<Image src='hamburger.svg' size='small' centered/>
      					<Login /> 
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

