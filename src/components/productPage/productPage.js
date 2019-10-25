import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <Jumbotron>
      <h1>{props.product.title}</h1>
      <p className="text-muted">Price: {props.product.price}</p>
      <p className="text-muted">Rest: {props.product.rest}</p>
      <hr />
      <img src={props.product.imgSrc} />
      <hr />
      <Link className="btn btn-primary mr-3" to={'/'}>Back to Shop</Link>
      <Button onClick={props.btnOptions.onClick} variant={props.btnOptions.variant}>{props.btnOptions.text}</Button>
    </Jumbotron>
  );
}