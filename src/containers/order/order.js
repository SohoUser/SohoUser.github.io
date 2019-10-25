import React from 'react';
import withStore from '~/hocs/withStore';
import { withRouter } from 'react-router-dom';
import OrderInput from '~com/orderInput/orderInput';
import OrderForm from '~com/orderForm/orderForm';
import { routesMap } from '~/routes/routes';

class Order extends React.PureComponent {

  state = {
    disabeBtn: true,
    showModal: false
  }

  showModal = () => {
    this.setState({ showModal: true })
  }

  hideModal = () => {
    this.setState({ showModal: false })
  }

  confirmModal = () => {
    this.props.stores.cart.setLastInfo();
    this.props.stores.order.setLastInfo();
    this.props.stores.cart.resetCart()
      .then(() => {
        this.hideModal();
        this.props.stores.cart.resetCart();
        this.props.stores.order.resetUser();
        this.props.history.push(routesMap.result);
      })
  }

  setValue = (i, val) => {
    this.props.stores.order.validate(i, val);
  }

  render() {

    const inputs = this.props.stores.order.user.map((item, i) => {
      return (
        <OrderInput key={item.name}
          name={item.name}
          label={item.label}
          value={item.value}
          type={item.type}
          placeholder={item.placeholder}
          onChange={e => this.setValue(i, e.target.value)}
          classValid={item.valideClass}
        />
      );
    });

    const productInCartRow = this.props.stores.cart.productDetails.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.price}</td>
          <td>{item.cnt}</td>
          <td><b>{item.price * item.cnt}</b></td>
        </tr>
      );
    });

    return (
      <OrderForm
        inputs={inputs}
        to={routesMap.cart}
        disabled={this.props.stores.order.allInputValide}
        onShowModal={this.showModal}
        onHideModal={this.hideModal}
        confirmModal={this.confirmModal}
        stateShowModal={this.state.showModal}
        total={this.props.stores.cart.total}
        userName={this.props.stores.order.user[0].value}
        userEmail={this.props.stores.order.user[1].value}
        userPhone={this.props.stores.order.user[2].value}
        productInCartRow={productInCartRow}
      />
    );

  }

}

export default withRouter(withStore(Order));