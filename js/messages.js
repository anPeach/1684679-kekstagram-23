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

const closeSuccessMessage = (evt) => {
  const isEscape = evt.code === 'Escape';
  const isButton = evt.currentTarget.className === 'success__button';
  const isOutOfBlock =
    evt.target.className === 'success' &&
    evt.target.className !== 'success__inner';

  if (isEscape || isButton || isOutOfBlock) {
    addClass(successMessage, 'hidden');
  }
};

document.body.appendChild(successMessage);

buttonSuccess.addEventListener('click', closeSuccessMessage);
document.addEventListener('keydown', closeSuccessMessage);

const addCloseSuccessMessageEvtListener = () =>
  document.addEventListener('click', closeSuccessMessage);


const closeErrorMessage = (evt) => {
  const isEscape = evt.code === 'Escape';
  const isButton = evt.currentTarget.className === 'error__button';
  const isOutOfBlock =
    evt.target.className === 'error' &&
    evt.target.className !== 'error__inner';

  if (isEscape || isButton || isOutOfBlock) {
    addClass(successMessage, 'hidden');
  }
};

document.body.appendChild(errorMessage);

buttonError.addEventListener('click', closeErrorMessage);
document.addEventListener('keydown', closeErrorMessage);

const addCloseErrorMessageEvtListener = () =>
  document.addEventListener('click', closeErrorMessage);

export { addCloseSuccessMessageEvtListener, addCloseErrorMessageEvtListener };
