import React from 'react';
import Product from '~com/product/product';
import withStore from '~/hocs/withStore';
import {urlBuilder} from '~/routes/routes';

class Products extends React.PureComponent {

  render() {


    const productList = this.props.stores.product.products.map(product => {

      const addToCard = (e) => {
        const btn = e.target;
        btn.setAttribute('disabled', true);
        this.props.stores.cart.add(product.id)
          .then(() => btn.removeAttribute('disabled'))
          .catch(() => {})
      };

      const removeFromCart = (e) => {
        const btn = e.target;
        btn.setAttribute('disabled', true);
        this.props.stores.cart.delete(product.id)
          .then(() => btn.removeAttribute('disabled'))
          .catch(() => { })
      }

      if (this.props.stores.cart.inCart(product.id)) {
        return (
          <Product
            key={product.id}
            src={product.imgSrc}
            title={product.title}
            price={product.price}
            rest={product.rest}
            onClick={removeFromCart}
            to={urlBuilder('product', {id: product.id})}
            text={'Remove'}
            variant={'danger'}
          />
        );
      } else {
        return (
          <Product
            key={product.id}
            src={product.imgSrc}
            title={product.title}
            price={product.price}
            rest={product.rest}
            onClick={addToCard}
            to={urlBuilder('product', {id: product.id})}
            text={'Add to cart'}
            variant={'success'}
          />
        );
      }
    });

    return (
      <>
        {productList}
      </>
    );
  }

}

export default withStore(Products);