import React from 'react';
import Products from '~con/products/products';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

export default function (props) {

  const productRow = props.products.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.title}</td>
        <td>{item.price}</td>
        <td>{item.cnt}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>Thank you for the order!</h1>
      <p className="text-muted">We will contact you shortly</p>
      <Link className="btn btn-primary" to="/">Back to Shop</Link>
      <hr />
      <h2 className="mb-3">You details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.user.name}</td>
            <td>{props.user.email}</td>
            <td>{props.user.phone}</td>
          </tr>
        </tbody>
      </Table>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {productRow}
        </tbody>
      </Table>
      <h3>Total {props.total}</h3>
      <hr />
      <h2 className="mb-3">You can see others with our products.</h2>
      <div className="container">
        <div className="row">
          <Products />
        </div>
      </div>
    </>
  );
}
