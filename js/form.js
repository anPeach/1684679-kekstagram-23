import './upload-photo.js';
import './scale.js';
import './hashtag.js';
import './comments.js';
import {hidePopup} from './utils.js';

const form = document.querySelector('.img-upload__form');

const imgUploadContainer = document.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
});

const closeForm = (evt) =>{
  if(document.activeElement === hashtagInput || document.activeElement === commentInput) {
    return;
  }

  if(evt.code === 'Escape') {
    hidePopup(imgUploadContainer);
  }
};

document.addEventListener('keydown', closeForm);
