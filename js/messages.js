import { addClass } from './utils.js';

const templateSuccess = document
  .querySelector('#success')
  .content.querySelector('.success');

const templateError = document
  .querySelector('#error')
  .content.querySelector('.error');

const successMessage = templateSuccess.cloneNode(true);
const buttonSuccess = successMessage.querySelector('.success__button');
addClass(successMessage, 'hidden');

const errorMessage = templateError.cloneNode(true);
const buttonError = errorMessage.querySelector('.error__button');
addClass(errorMessage, 'hidden');

const closeSuccessMessageListener = (evt) => {
  const isEscape = evt.code === 'Escape';
  const isButton = evt.currentTarget.className === 'success__button';
  const isOutOfBlock =
    evt.target.className === 'success' &&
    evt.target.className !== 'success__inner';

  if (isEscape || isButton || isOutOfBlock) {
    addClass(successMessage, 'hidden');
    buttonSuccess.removeEventListener('click', closeSuccessMessageListener);
    document.removeEventListener('keydown', closeSuccessMessageListener);
    document.removeEventListener('click', closeSuccessMessageListener);
  }
};

document.body.appendChild(successMessage);

const addCloseSuccessMessageEvtListener = () => {
  document.addEventListener('click', closeSuccessMessageListener);
  buttonSuccess.addEventListener('click', closeSuccessMessageListener);
  document.addEventListener('keydown', closeSuccessMessageListener);
};

const closeErrorMessageListener = (evt) => {
  const isEscape = evt.code === 'Escape';
  const isButton = evt.currentTarget.className === 'error__button';
  const isOutOfBlock =
    evt.target.className === 'error' && evt.target.className !== 'error__inner';

  if (isEscape || isButton || isOutOfBlock) {
    addClass(errorMessage, 'hidden');
    buttonError.removeEventListener('click', closeErrorMessageListener);
    document.removeEventListener('click', closeErrorMessageListener);
    document.removeEventListener('keydown', closeErrorMessageListener);
  }
};

document.body.appendChild(errorMessage);

const addCloseErrorMessageEvtListener = () => {
  document.addEventListener('click', closeErrorMessageListener);
  buttonError.addEventListener('click', closeErrorMessageListener);
  document.addEventListener('keydown', closeErrorMessageListener);
};

export { addCloseSuccessMessageEvtListener, addCloseErrorMessageEvtListener };
