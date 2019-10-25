import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function (props) {
  return (
    <div className="col-12 col-md-3 mb-3">
      <Card>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Price: {props.price}
            <br />
            Rest: {props.rest}
          </Card.Text>
          <Button variant={props.variant} onClick={props.onClick}>{props.text}</Button>
          <hr />
          <Link className="btn btn-primary" to={props.to}>More info</Link>
        </Card.Body>
      </Card>
    </div>
  );
}