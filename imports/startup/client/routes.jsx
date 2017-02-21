import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Pages
import LoginPage from '../../ui/pages/LoginPage.jsx'
import NoOrdersPage from '../../ui/pages/NoOrdersPage.jsx'
import OrdersPage from '../../ui/pages/OrdersPage.jsx'
import CreateOrderPage from '../../ui/pages/CreateOrderPage.jsx'
import AddToOrderPage from '../../ui/pages/AddToOrderPage.jsx'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={LoginPage} />
    <Route path="/orders" component={NoOrdersPage} />
    <Route path="/orderst" component={OrdersPage} />
    <Route path="/orders/add" component={CreateOrderPage} />
    <Route path="/orders/1/add" component={AddToOrderPage} />
   </Router>
);