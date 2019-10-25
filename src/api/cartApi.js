import Request from '~/api/helpers/makeRequest';

const loadCart = (token) => {

  let url = 'cart/load.php';
  if (token !== null) {
    url += `?token=${token}`
  }

  return Request(url);
}

const addToCart = (token, id) => {

  if (token && id) {
    let url = `cart/add.php?token=${token}&id=${id}`
    return Request(url);
  } else {
    return false;
  }

}

const removeFromCart = (token, id) => {

  if (token && id) {
    let url = `cart/remove.php?token=${token}&id=${id}`
    return Request(url);
  } else {
    return false;
  }

}

const changeCnt = (token, id, cnt) => {

  if (token && id) {
    let url = `cart/change.php?token=${token}&id=${id}&cnt=${cnt}`
    return Request(url);
  } else {
    return false;
  }

}

const resetCart = (token) => {

  if (token) {
    let url = `cart/clean.php?token=${token}`;
    return Request(url);
  } else {
    return false;
  }

}


export { loadCart, addToCart, removeFromCart, changeCnt, resetCart };