import React from 'react';
import { Form, Button, Modal, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function (props) {
  return (
    <>
      <h1>Personal data</h1>
      <hr />
      <Form>
        {props.inputs}
      </Form>
      <hr />
      <Link className="btn btn-warning mr-3" to={props.to}>Back to Cart</Link>
      <Button variant="success" disabled={!props.disabled} onClick={props.onShowModal}>Check</Button>
      <Modal show={props.stateShowModal} onHide={props.onHideModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Check your details
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="text-muted">Personal data</h3>
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
                <td>{props.userName}</td>
                <td>{props.userEmail}</td>
                <td>{props.userPhone}</td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <h3 className="text-muted">Order Details</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Count</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {props.productInCartRow}
            </tbody>
          </Table>
          <hr />
          <h3>Total: {props.total}</h3>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={props.confirmModal}>Order</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}