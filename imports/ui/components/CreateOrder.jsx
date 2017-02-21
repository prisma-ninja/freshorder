import React, {Component} from 'react'
import { Dropdown, Button, Icon } from 'semantic-ui-react'

export default class CreateOrder extends Component {

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
	}

	render() {
		return (
			<div>
			<div>
				<h5 style={{color: '#888'}}>Tic Toc...</h5>
				La prise des commandes finira à 
				{' '}
				<Dropdown inline options={hourOptions} defaultValue={hourOptions[1].value} />
				<Dropdown inline options={minuteOptions} defaultValue={minuteOptions[0].value} />
			</div>
			<div style={{marginTop: 50 + 'px'}}>
				<Button>Lancer</Button>
			</div>
			</div>
		)
	}
}