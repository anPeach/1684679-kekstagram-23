import { AMOUNT_FILTERED_PHOTOS, RE_RENDER_DELAY } from './constants.js';
import { fetched } from './main.js';
import { renderPhotos } from './photo-preview.js';
import {
  addClass,
  removeClass,
  shuffle,
  clearPreviews,
  getRatedPhotos
} from './utils.js';
import { debounce } from './utils/debounce.js';

const filterContainer = document.querySelector('.img-filters');
const filterButtons = filterContainer.querySelectorAll('.img-filters__button');
const picturesContainer = document.querySelector('.pictures');
const pictures = picturesContainer.getElementsByTagName('a');

const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';

const randomizePhotos = (photos) => shuffle(photos).slice(0, 10);

const discussedRenderPhotos = (photos) =>
  getRatedPhotos(photos).slice(0, AMOUNT_FILTERED_PHOTOS);

const filters = {
  default: (photos) => renderPhotos(photos),
  random: (photos) => renderPhotos(randomizePhotos(photos)),
  discussed: (photos) => renderPhotos(discussedRenderPhotos(photos)),
};

const findPreviousActive = () =>
  Array.from(filterButtons).find((button) =>
    button.className.includes(ACTIVE_BUTTON_CLASS),
  );

const renderFilteredPhotos = (filterId) => {
  const filterKey = filterId.replace('filter-', '');
  filters[filterKey](fetched.photos);
};

const filterButtonClickListener = (evt) => {
  const previousActiveButton = findPreviousActive();

  if (previousActiveButton) {
    removeClass(findPreviousActive(), ACTIVE_BUTTON_CLASS);
  }

  addClass(evt.target, ACTIVE_BUTTON_CLASS);

  clearPreviews(pictures);

  const { id } = evt.target;

  debounce(renderFilteredPhotos, RE_RENDER_DELAY)(id);
};

const addFiltersButtonsEvtListeners = () => {
  filterButtons.forEach((button) =>
    button.addEventListener('click', filterButtonClickListener),
  );
};

const showFilters = () => {
  removeClass(filterContainer, 'img-filters--inactive');
};

export {
  showFilters,
  filterButtonClickListener,
  addFiltersButtonsEvtListeners
};
