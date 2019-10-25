import Home from '~con/home/home';
import Cart from '~con/cart/cart';
import Order from '~con/order/order';
import Result from '~con/result/result';
import ProductPage from '~con/productPage/productPage';
import Error from '~con/error/error';

let routes = [
  {
    name: 'home',
    url: '/',
    component: Home,
    exact: true
  },
  {
    name: 'cart',
    url: '/cart',
    component: Cart,
    exact: true
  },
  {
    name: 'order',
    url: '/order',
    component: Order,
    exact: true
  },
  {
    name: 'result',
    url: '/finish',
    component: Result,
    exact: true
  },
  {
    name: 'product',
    url: '/product/:id',
    component: ProductPage,
    exact: true
  },
  {
    url: '**',
    component: Error
  }
]

let routesMap = {};

routes.forEach((route) => {
  if (route.hasOwnProperty('name')) {
    routesMap[route.name] = route.url;
  }
});

let urlBuilder = function (name, params) {
  if (!routesMap.hasOwnProperty(name)) {
    return null;
  }
  let url = routesMap[name];
  for (let key in params) {
    url = url.replace(':' + key, params[key]);
  }
  return url;
}

export default routes;
export { routesMap, urlBuilder };