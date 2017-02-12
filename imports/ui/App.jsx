import React, {Component} from 'react'
import { Grid, Button, Form, Image } from 'semantic-ui-react'

export default class App extends Component {

	render() {
		return (
			<Grid verticalAlign='middle' padded stackable centered>
				<Grid.Row>
      				<Grid.Column width={8} textAlign='left'>
      					<Image src='hamburger.svg' size='small' centered/>
      					<Form>
						    <Form.Field>
						   		<Form.Input label='id' placeholder='id' />
						    </Form.Field>
						    <Form.Field>
								<Form.Input label='password' placeholder='password' type='password' />
						    </Form.Field>
							<Button type='submit' floated='right'>Eat!</Button>
						</Form> 
					</Grid.Column>
				</Grid.Row>
			</Grid>
		)
	}
}

