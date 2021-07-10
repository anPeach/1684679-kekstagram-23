import {closePopup, showPopup} from './utils.js';

const uploadInput = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const imgUploadContainer = document.querySelector('.img-upload__overlay');

const uploadInputChange = () => {
  showPopup(imgUploadContainer);
};

uploadInput.addEventListener('change', uploadInputChange);
cancelButton.addEventListener('click', closePopup(imgUploadContainer));
