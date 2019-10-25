import React from 'react';
import withStore from '~/hocs/withStore';
import CartRow from '~com/cartRow/cartRow';
import CartTable from '~com/cartTable/cartTable';
import {routesMap} from '~/routes/routes';

class Cart extends React.PureComponent {

  render() {

    const productRow = this.props.stores.cart.productDetails.map(product => {
      return (
        <CartRow
          key={product.id}
          product={product}
          onChange={(cnt) => this.props.stores.cart.change(product.id, cnt)}
          onDelete={() => this.props.stores.cart.delete(product.id)}
        />
      );

    });

    return (
      <CartTable 
      productRow={productRow} 
      to={routesMap.order}
      total={this.props.stores.cart.total} />
    );
  }
}

export default withStore(Cart);