import Request from '~/api/helpers/makeRequest';

const all = () => {
  return Request('products/all.php');
}

export {all};