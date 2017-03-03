import React, {Component} from 'react'
import { Header } from 'semantic-ui-react'

export default class CreateOrder extends Component {

	constructor(props) {
    	super(props);
    	let left = props.let - new Date().getTime(); 
    	if (left < 0) {
    		left = 0;
    	}
    	this.state = {secondsLeft: Math.floor(left/1000)};
  	}

	tick() {
		if(this.state.secondsLeft > 0 ) {
			this.setState((prevState) => ({
				secondsLeft: prevState.secondsLeft - 1
			}));
		}
		else {
			clearInterval(this.interval);
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	getTimeLeft(time) {

		const hours = Math.floor(time / 3600);
		const minutes = Math.floor((time % 3600) / 60);
		const seconds = Math.floor((time % 3600) % 60);

		return ("0" + hours).slice(-2) + ' : ' + ("0" + minutes).slice(-2) + ' : ' + ("0" + seconds).slice(-2);	
	}

	render() {
		return (
				<Header size='huge'>{this.getTimeLeft(this.state.secondsLeft)}</Header>
		)
	}
}