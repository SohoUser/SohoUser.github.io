import { observable, computed, action } from 'mobx';
export default class {

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = this.rootStore.api.cartApi;
    this.storage = this.rootStore.storage;
    this.token = this.storage.getItem('cartToken');
    this.loadCart()
  }

  @observable products = [];

  @observable lastProducts = [];

  @action loadCart = () => {
    return new Promise((resolve) => {
      this.api.loadCart(this.token)
        .then(response => {
          const { cart, needUpdate, token } = response;
          if (needUpdate) {
            this.token = token;
            this.storage.setItem('cartToken', this.token);
          }
          this.products = cart;
          resolve(true);
        });
    });
  }

  @action add = id => {
    return new Promise((resolve, reject) => {
      if (!this.inCart(id)) {
        this.api.addToCart(this.token, id)
          .then(() => {
            const obj = this.rootStore.product.productInfo(id);
            this.products.push({ id: obj.id, cnt: 1 })
            resolve(true);
          })
          .catch(() => {});
      } else {
        reject();
      }
    });
  }

  @action change = (id, cnt) => {
    return new Promise((resolve, reject) => {
      const index = this.products.findIndex(item => id == item.id);
      if (index !== -1) {
        this.api.changeCnt(this.token, id, cnt)
          .then(response => {
            if (response) {
              this.products[index].cnt = cnt;
              resolve(true);
            }
          });
      } else {
        reject('Продукт не найден в корзине')
      }
    });
  }

  @action delete = id => {
    return new Promise((resolve, reject) => {
      const index = this.products.findIndex(item => id == item.id);
      if (index !== -1) {
        this.api.removeFromCart(this.token, id)
          .then((response) => {
            if (response) {
              this.products.splice(index, 1);
              resolve(true);
            }
          });
      } else {
        reject(false)
      }

    });
  }


  @action resetCart = () => {
    return new Promise((resolve, reject) => {
     return this.api.resetCart(this.token)
        .then(() => {
         this.products = [];
         resolve();
        })
    })
  }

  @computed get productDetails() {
    return this.products.map(cartProduct => {
      const productInfo = this.rootStore.product.productInfo(cartProduct.id);
      return { ...productInfo, cnt: cartProduct.cnt }
    });
  }

  @computed get total() {
    return this.productDetails.reduce((prev, current) => {
      return prev += (current.cnt * current.price)
    }, 0);
  }

  @computed get inCart() {
    return id => this.products.some(product => product.id == id);
  }

  @computed get count() {
    return this.productDetails.reduce((prev, current) => {
      return prev += current.cnt;
    }, 0);
  }

  @action setLastInfo() {
    this.productDetails.forEach(item => {
      this.lastProducts.push(item);
    });
  }

  get lastTotal() {
    return this.lastProducts.reduce((prev,current) => {
      return prev += (current.price * current.cnt)
    }, 0);
  }

}