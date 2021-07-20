import './photo-full.js';
import './form.js';
import './filters.js';
import { getPhotos } from './api.js';
import { renderPhotos } from './photo-preview.js';
import { clearForm, setPhotoFormSubmit } from './form.js';
import { hidePopup, removeClass } from './utils.js';
import { addCloseSuccessMessageEvtListener } from './messages.js';
import { showFilters } from './filters.js';

export let fetched = [];
const form = document.querySelector('.img-upload__overlay');
const successMessage = document.querySelector('.success');

getPhotos((photos) => {
  fetched = photos;
  renderPhotos(photos);
  showFilters();
});

setPhotoFormSubmit(() => {
  clearForm();
  hidePopup(form);
  removeClass(successMessage, 'hidden');
  addCloseSuccessMessageEvtListener();
});
