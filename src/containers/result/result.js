import React from 'react';
import ResultComponent from '~com/result/result';
import withStore from '~/hocs/withStore/';

class Result extends React.PureComponent {

  render() {

    const user = this.props.stores.order.lastOrder,
      products = this.props.stores.cart.lastProducts,
      total = this.props.stores.cart.lastTotal;

    return (
      <ResultComponent user={user} products={products} total={total} />
    );
  }

}

export default withStore(Result);