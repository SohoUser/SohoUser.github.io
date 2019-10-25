import React from 'react';
import { withRouter } from 'react-router-dom';
import withStore from '~/hocs/withStore';
import ProductPageComponent from '~com/productPage/productPage'
import Error from '~com/error/error';

class ProductPage extends React.PureComponent {

  render() {
    const id = this.props.match.params.id;
    const product = this.props.stores.product.productInfo(id);

    if (product !== undefined) {
      const addToCart = () => {
        this.props.stores.cart.add(id)
          .then()
          .catch(() => { })
      }
      const removeFromCart = () => {
        this.props.stores.cart.delete(id)
          .then()
          .catch(() => { })
      }
      const inCart = this.props.stores.cart.inCart(id);
      let btnOptions;
      if (inCart) {
        btnOptions = {
          variant: 'danger',
          text: 'Remove',
          onClick: removeFromCart
        }
      } else {
        btnOptions = {
          variant: 'success',
          text: 'Add to Cart',
          onClick: addToCart
        }
      }
      return (
        <ProductPageComponent product={product} btnOptions={btnOptions} />
      );
    } else {
      return (
        <Error />
      );
    }
  }
}

export default withRouter(withStore(ProductPage));