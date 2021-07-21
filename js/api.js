import { SERVER_PATH } from './constants.js';

let photos = [];

const getPhotos = (onSuccess) =>
  fetch(`${SERVER_PATH}/data`)
    .then((response) => response.json())
    .then((res) => {
      photos = res;
      return res;
    })
    .then(onSuccess);

const sendData = (onSuccess, onFail, body) => {
  fetch(SERVER_PATH, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (!response.ok) {
        return onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }

      onSuccess();
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export { getPhotos, sendData, photos };
