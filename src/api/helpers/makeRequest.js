const baseUrl = 'http://localhost/api/';

export default function (url, options = {}, _baseUrl = baseUrl) {
  return fetch(_baseUrl + url, options)
    .then((response) => {
      if (response.status != 200) {
        return response.text().then((str) => {
          throw new Error(str)
        })
      }
      return response.json();
    });
}