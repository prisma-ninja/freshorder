import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import { Dropdown, Button, Icon, Form } from 'semantic-ui-react'
import { Meteor } from 'meteor/meteor'

import { Orders } from '../../api/orders.js';

export default class CreateOrder extends Component {

	/// TODO : make it nice..
	constructor(props) {
		super(props);
		hourOptions = [
			{
				text: '11h',
				value: 11,
			},
			{
				text: '12h',
				value: 12,
			},
			{
				text: '13h',
				value: 13,
			},
		];

		minuteOptions = [
			{
				text: '00',
				value: 0,
			},
			{
				text: '15',
				value: 15,
			},
			{
				text: '30',
				value: 30,
			},
			{
				text: '45',
				value: 45,
			},
		];

		this.state = {hour: 12, min: 0};
	}

	addOrder(event) {

		let date = new Date();
		date.setHours(this.state.hour);
		date.setMinutes(this.state.min);
		date.setSeconds(0);

		let now = new Date();
		if (date.getTime() < now.getTime()) {
			date.setTime(date.getTime() + 86400000); // + one day
		}

		Orders.insert({
			endAt: date,
			orders: {}
		})

		browserHistory.push('/orders');
	}

	changeHour(event, object) {
		this.setState(() => ({
				hour: object.value
			}));
	}

	changeMinute(event, object) {
		this.setState(() => ({
				min: object.value
			}));
	}

	back(event) {
		browserHistory.goBack();
	}

	render() {
		return (
			<div>
			<div>
				<h5 style={{color: '#888'}}>Tic Toc...</h5>
				La prise des commandes finira à 
				{' '}
				<Dropdown onChange={this.changeHour.bind(this)} inline options={hourOptions} defaultValue={12} />
				<Dropdown onChange={this.changeMinute.bind(this)} inline options={minuteOptions} defaultValue={0} />
			</div>
			<div style={{marginTop: 50 + 'px'}}>
				<Button onClick={this.back.bind(this)} content='Annuler' icon='chevron left' labelPosition='left' />
				<Button onClick={this.addOrder.bind(this)} content='Lancer' color='black' icon='right arrow' labelPosition='right' />
			</div>
			</div>
		)
	}
}