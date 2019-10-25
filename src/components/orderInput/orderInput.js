import React from 'react';
import { Form } from 'react-bootstrap';

export default function (props) {
  return (
    <Form.Group controlId={props.name + 'Control'}>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className={props.classValid}
      />
    </Form.Group>
  );
}