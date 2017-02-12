import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class Login extends Component {

	render() {
		return (
			<Form>
				<Form.Field>
					<Form.Input label='id' placeholder='id' />
				</Form.Field>
				<Form.Field>
					<Form.Input label='password' placeholder='password' type='password' />
				</Form.Field>
				<Button type='submit' floated='right'>Eat!</Button>
			</Form> 
		)
	}
}
