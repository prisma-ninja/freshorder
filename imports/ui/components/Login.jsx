import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import { Button, Form } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor'

export default class Login extends Component {

	constructor(props) {
		super(props);
	}

	handleSubmit(event) {

		event.preventDefault();
		
		const user = event.target['id'].value;
		const password = event.target['password'].value;

		/// TODO : Extract and handle errors
		Meteor.loginWithPassword(user, password, ((error) => {
			if(error) {
				console.log(error);
			}
			else {
				console.log('test');
				browserHistory.push('/orders');
			}
		}));
	}

	render() {
		return (
			<Form onSubmit={this.handleSubmit.bind(this)}>
				<Form.Field>
					<Form.Input name='id' label='id' placeholder='id' />
				</Form.Field>
				<Form.Field>
					<Form.Input name='password' label='password' placeholder='password' type='password' />
				</Form.Field>
				<Button type='submit' floated='right'>Eat!</Button>
			</Form> 
		)
	}
}
