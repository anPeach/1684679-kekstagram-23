import './upload-photo.js';
import './scale.js';
import './hashtag.js';
import './comments.js';
import { hidePopup, removeClass, showAlert } from './utils.js';
import { sendData } from './api.js';
import { clearEffects, removeEffectsListEvtListener } from './effects.js';
import { addCloseErrorMessageEvtListener } from './messages.js';
import { removeScaleControlsEvtListeners, setDefaultScale } from './scale.js';
import { clearCommentsOptions, removeCommentTextareaEvtListener } from './comments.js';
import { clearHashtagsOptions, removeHashtagsInputEvtListener } from './hashtag.js';

const form = document.querySelector('.img-upload__form');

const imgUploadContainer = document.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const errorMessage = document.querySelector('.error');

const clearForm = () => {
  clearHashtagsOptions();
  clearCommentsOptions();
  clearEffects();
  setDefaultScale();
  removeCommentTextareaEvtListener();
  removeHashtagsInputEvtListener();
  removeScaleControlsEvtListeners();
  removeEffectsListEvtListener();
};

const setPhotoFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
        clearForm();
        hidePopup(imgUploadContainer);
        removeClass(errorMessage, 'hidden');
        addCloseErrorMessageEvtListener();
      },
      new FormData(evt.target),
    );
  });
};

const closeFormListener = (evt) => {
  if (
    document.activeElement === hashtagInput ||
    document.activeElement === commentInput
  ) {
    return;
  }

  if (evt.code === 'Escape') {
    clearForm();
    hidePopup(imgUploadContainer);
    document.removeEventListener('keydown', closeFormListener);
  }
};

const addCloseFormListener = () => {
  document.addEventListener('keydown', closeFormListener);
};

export { setPhotoFormSubmit, clearForm, addCloseFormListener };
