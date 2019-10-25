import React from 'react';
import ReactDom from 'react-dom';
import App from '~/app/app';
import Prelodaer from '~com/preloader/preloader';
import FailLoad from '~com/failLoad/failLoad';
import { Provider } from "mobx-react";
import stores from '~s/stores';

import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';


ReactDom.render(<Prelodaer />, document.querySelector('#app'));

stores.product.loadProduct()
  .then(() => {
    ReactDom.render(
      <Provider stores={stores}>
        <App />
      </Provider>,
      document.querySelector('#app')
    );
  })
  .catch(() => {
    ReactDom.render(<FailLoad/>, document.querySelector('#app'));
  })