import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { routesMap } from "~/routes/routes";
import withStore from '~/hocs/withStore';

import style from './menu.module.css';

class Menu extends React.PureComponent {

  render() {

    const total = this.props.stores.cart.total,
      count = this.props.stores.cart.count

    return (
      <Navbar bg="dark" variant="dark">
        <NavLink className="navbar-brand" exact activeClassName="active" to={routesMap.home}>Home</NavLink>
        <Nav className="mr-auto">
          <NavLink className="nav-link" exact activeClassName="active" to={routesMap.cart}>Cart</NavLink>
          <NavLink className="nav-link" exact activeClassName="active" to={routesMap.order}>Order</NavLink>
        </Nav>
        <div className={style.cart}>
          <p className={style.cart__count}>Count: {count}</p>
          <p className={style.cart__total}><b>Total: {total}</b></p>
        </div>
      </Navbar>
    );
  }

}

export default withStore(Menu);