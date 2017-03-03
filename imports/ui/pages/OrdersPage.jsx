import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Image } from 'semantic-ui-react';

import { Orders } from '../../api/orders.js';

import GridAllCenter from '../layouts/GridAllCenter.jsx';
import NoOrders from '../components/NoOrders.jsx';
import OrderAlert from '../components/OrderAlert.jsx';

class OrdersPage extends Component {
	
	constructor(props) {
		super(props);
	}

	renderOrders() {
		
		// No orders :(
		if (this.props.orders.length == 0) {
			return <NoOrders />
		}
		
		return <OrderAlert endAt={this.props.orders[0].endAt} id={this.props.orders[0]._id} />
	}

	render() {
		return (
			<GridAllCenter textAlign="center">
				{this.renderOrders()} 
			</GridAllCenter>
		)
	}
}

export default createContainer(() => {

  return {
    orders: Orders.find({}).fetch(),
  };

}, OrdersPage);
