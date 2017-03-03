import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Pages
import LoginPage from '../../ui/pages/LoginPage.jsx'
import OrdersPage from '../../ui/pages/OrdersPage.jsx'
import CreateOrderPage from '../../ui/pages/CreateOrderPage.jsx'
import AddToOrderPage from '../../ui/pages/AddToOrderPage.jsx'
import LostPage from '../../ui/pages/LostPage.jsx'

function isAuthenticate() {
	return Meteor.userId() != null;
}

function requireAuth(nextState, replace) {
	if (!isAuthenticate()) {
		replace('/login');
	}
}

function requireNotAuth(nextState, replace) {
	if (isAuthenticate()) {
		replace('/');
	}
}

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/orders/:id/add" component={AddToOrderPage} onEnter={requireAuth} />
    <Route path="/orders/add" component={CreateOrderPage} onEnter={requireAuth} />
    <Route path="/orders" component={OrdersPage} onEnter={requireAuth} />
    <Route path="/login" component={LoginPage} onEnter={requireNotAuth} />
    <Route path="/" component={OrdersPage} onEnter={requireAuth} />
    <Route path="*" component={LostPage} />
   </Router>
);