import { hidePopup, showPopup} from './utils.js';
import {clearForm} from './form.js';

const uploadInput = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const imgUploadContainer = document.querySelector('.img-upload__overlay');

const uploadInputChange = () => {
  showPopup(imgUploadContainer);
};

const closeForm = () => {
  clearForm();
  hidePopup(imgUploadContainer);
};

uploadInput.addEventListener('change', uploadInputChange);
cancelButton.addEventListener('click', closeForm);
