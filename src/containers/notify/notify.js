import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import withStore from '~/hocs/withStore';

class Notify extends React.PureComponent {

  render() {
    const notify = this.props.stores.notify;
    const notifyList = notify.list.map(item => {
      return (
        <Modal centered key={item.id} show={true}>
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter"> Error </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p className="text-muted">{item.message}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => { notify.remove(item.id) }}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    });
    return (
      <>
      {notifyList}
      </>
    );
  }

}

export default withStore(Notify);