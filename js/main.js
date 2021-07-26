import './photo-full.js';
import './form.js';
import './filters.js';
import { getPhotos } from './api.js';
import { renderPhotos } from './photo-preview.js';
import { clearForm, setPhotoFormSubmit } from './form.js';
import { hidePopup, removeClass } from './utils.js';
import { addCloseSuccessMessageEvtListener } from './messages.js';
import { addFiltersButtonsEvtListeners, showFilters } from './filters.js';
import { addUploadPhotoEvtListener } from './upload-photo.js';

export const fetched = {};
const form = document.querySelector('.img-upload__overlay');
const successMessage = document.querySelector('.success');

getPhotos((photos) => {
  fetched.photos = photos;
  renderPhotos(photos);
  showFilters();
}).finally(()=> {
  addFiltersButtonsEvtListeners();
  addUploadPhotoEvtListener();
});

setPhotoFormSubmit(() => {
  clearForm();
  hidePopup(form);
  removeClass(successMessage, 'hidden');
  addCloseSuccessMessageEvtListener();
});
