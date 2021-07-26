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

const errorLoadDataMessage = templateError.cloneNode(true);
const buttonErrorLoadData = errorLoadDataMessage.querySelector('.error__button');
const errorLoadDataTitle = errorLoadDataMessage.querySelector('.error__title');

addClass(buttonErrorLoadData, 'error-load__button');
addClass(errorLoadDataMessage, 'error-load');
addClass(errorLoadDataMessage, 'hidden');
errorLoadDataTitle.textContent = 'Ошибка загрузки данных';
buttonErrorLoadData.textContent = 'Закрыть';

const messages = {
  success: {
    name: 'success',
    act: (eventListener) => {
      addClass(successMessage, 'hidden');
      buttonSuccess.removeEventListener('click', eventListener);
      document.removeEventListener('keydown', eventListener);
      document.removeEventListener('click', eventListener);
    },
  },
  error: {
    name: 'error',
    act: (eventListener) => {
      addClass(errorMessage, 'hidden');
      buttonError.removeEventListener('click', eventListener);
      document.removeEventListener('click', eventListener);
      document.removeEventListener('keydown', eventListener);
    },
  },
  errorLoad: {
    name: 'error-load',
    act: (eventListener) => {
      addClass(errorLoadDataMessage, 'hidden');
      buttonErrorLoadData.removeEventListener('click', eventListener);
      document.removeEventListener('keydown', eventListener);
      document.removeEventListener('click', eventListener);
    },
  },
};

const message = {
  strategy: {},
  setMessage: function(key) {
    this.strategy = messages[key];
  },
  getMessage: function() {
    return this.strategy;
  },
};

const onCloseMessage = (evt) => {
  const currentTargetClasses = evt.currentTarget.className;
  const messageName = message.getMessage().name;
  const isEscape = evt.code === 'Escape';
  const isButton = currentTargetClasses ? currentTargetClasses.includes(`${messageName}__button`) : false;
  const isOutOfBlock =
    evt.target.className.includes(`${messageName}`) &&
    !evt.target.className.includes(`${messageName}__inner`);

  if (isEscape || isButton || isOutOfBlock) {
    message.getMessage().act(onCloseMessage);
  }
};

document.body.appendChild(successMessage);

const addCloseSuccessMessageEvtListener = () => {
  document.addEventListener('click', onCloseMessage);
  document.addEventListener('keydown', onCloseMessage);
  buttonSuccess.addEventListener('click', onCloseMessage);
};

document.body.appendChild(errorMessage);

const addCloseErrorMessageEvtListener = () => {
  buttonError.addEventListener('click', onCloseMessage);
  document.addEventListener('click', onCloseMessage);
  document.addEventListener('keydown', onCloseMessage);
};

document.body.appendChild(errorLoadDataMessage);

const addCloseErrorLoadDataMessageListener = () => {
  buttonErrorLoadData.addEventListener('click', onCloseMessage);
  document.addEventListener('keydown', onCloseMessage);
  document.addEventListener('click', onCloseMessage);
};

export { addCloseSuccessMessageEvtListener, addCloseErrorMessageEvtListener, addCloseErrorLoadDataMessageListener, message };
