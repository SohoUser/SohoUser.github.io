const baseUrl = 'http://localhost/api/';


// Здесь раньше был бэк. Сейчас имитация

export default function (url, options = {}, _baseUrl = baseUrl) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}