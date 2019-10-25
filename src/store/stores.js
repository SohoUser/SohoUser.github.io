import productStore from '~s/productStore';
import cartStore from '~s/cartStore';
import orderStore from '~s/orderStore';
import notifyStore from '~s/notifyStore';

import * as productsApi from '~/api/productsApi';
import * as cartApi from '~/api/cartApi';

class Stores {

  constructor() {
    this.api = {
      productsApi,
      cartApi
    }
    this.storage = localStorage;
    this.product = new productStore(this);
    this.cart = new cartStore(this);
    this.order = new orderStore(this);
    this.notify = new notifyStore(this);
  }

}

export default new Stores();