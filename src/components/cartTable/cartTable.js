import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <>
    <h1>Shopping Cart</h1>
    <hr/>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Count</th>
          <th>Total</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {props.productRow}
      </tbody>
    </Table>
    <hr/>
    <div className="container">
      <div className="row">
        <div className="col-10">
          <h2>Total Price: {props.total}</h2>
        </div>
        <div className="col-2">
         <Link to={props.to} className="btn btn-success">Next Step</Link>
        </div>
      </div>
    </div>
    </>
  );
}