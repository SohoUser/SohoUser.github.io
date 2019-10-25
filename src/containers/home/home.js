import React from 'react';
import Products from '~con/products/products';

class Home extends React.PureComponent {

  render() {
    return (
      <>
          <h1>Our Products</h1>
          <hr />
        <div className="row">
          <Products />
        </div>
      </>
    );
  }

}

export default Home;