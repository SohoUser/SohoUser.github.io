import { observable, computed, action } from 'mobx';

export default class {

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.api = this.rootStore.api.productsApi;
  }

  @observable products = [];

  @computed get productInfo() {
    return id => this.products.filter(item => item.id == id)[0];
  }

  @action loadProduct = () => {
    return new Promise((resolve, reject) => {
      this.api.all()
        .then(response => {
          this.products = response;
          resolve(true);
        })
        .catch((e) => {
          reject(e);
        });
    })
  }

}

// server api
// function getProducts() {
//   return [
//     {
//       id: 100,
//       title: 'Ipnone 200',
//       price: 12000,
//       rest: 10,
//       current: 1,
//       imgSrc: '/dist/img/iphone.png'
//     },
//     {
//       id: 101,
//       title: 'Samsung AAZ8',
//       price: 22000,
//       rest: 5,
//       current: 1,
//       imgSrc: '/dist/img/samsung.png'
//     },
//     {
//       id: 103,
//       title: 'Nokia 3310',
//       price: 5000,
//       rest: 2,
//       current: 1,
//       imgSrc: '/dist/img/nokia.png'
//     },
//     {
//       id: 105,
//       title: 'Huawei ZZ',
//       price: 15000,
//       rest: 8,
//       current: 1,
//       imgSrc: '/dist/img/huawei.png'
//     }
//   ];
// }