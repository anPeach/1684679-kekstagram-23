import './upload-photo.js';
import './scale.js';
import './hashtag.js';
import './comments.js';
import { hidePopup, showAlert } from './utils.js';
import { sendData } from './api.js';
import { clearEffects } from './effects.js';
import { addCloseErrorMessageEvtListener } from './messages.js';
import { setDefaultScale } from './scale.js';

const form = document.querySelector('.img-upload__form');

const imgUploadContainer = document.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

const setPhotoFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        addCloseErrorMessageEvtListener();
      },
      new FormData(evt.target),
    );
  });
};

const clearForm = () => {
  hashtagInput.value = '';
  commentInput.value = '';
  clearEffects();
  setDefaultScale();
};

const closeForm = (evt) => {
  if (
    document.activeElement === hashtagInput ||
    document.activeElement === commentInput
  ) {
    return;
  }

  if (evt.code === 'Escape') {
    clearForm();
    hidePopup(imgUploadContainer);
  }
};

document.addEventListener('keydown', closeForm);

export { setPhotoFormSubmit, clearForm };
