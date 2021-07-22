import { hidePopup, showPopup } from './utils.js';
import { addCloseFormListener, clearForm } from './form.js';
import { addCommentTextareaEvtListener } from './comments.js';
import { addEffectsListEvtListener } from './effects.js';
import { addHashtagInputEvtListener } from './hashtag.js';
import {
  addScaleSmallerButtonEvtListener,
  addScaleBiggerButtonEvtListener
} from './scale.js';

const uploadInput = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const imgUploadContainer = document.querySelector('.img-upload__overlay');

const closeFormListener = () => {
  clearForm();
  hidePopup(imgUploadContainer);
  cancelButton.removeEventListener('click', closeFormListener);
};

const uploadInputChange = () => {
  showPopup(imgUploadContainer);
  addCloseFormListener();
  addCommentTextareaEvtListener();
  addEffectsListEvtListener();
  addHashtagInputEvtListener();
  addScaleSmallerButtonEvtListener();
  addScaleBiggerButtonEvtListener();
  cancelButton.addEventListener('click', closeFormListener);
};

const addUploadPhotoEvtListener = () =>
  uploadInput.addEventListener('change', uploadInputChange);

export { addUploadPhotoEvtListener };
