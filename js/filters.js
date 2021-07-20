import { photos } from './api.js';
import { RE_RENDER_DELAY } from './constants.js';
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
const picturesList = picturesContainer.getElementsByTagName('a');

const activeButtonClass = 'img-filters__button--active';

const randomizePhotos = (photosList) => shuffle(photosList).slice(0, 10);

const discussedRenderPhotos = (photosList) =>
  getRatedPhotos(photosList).slice(0, 10);

const filters = {
  default: (photosList) => renderPhotos(photosList),
  random: (photosList) => renderPhotos(randomizePhotos(photosList)),
  discussed: (photosList) => renderPhotos(discussedRenderPhotos(photosList)),
};

const findPreviousActive = () => {
  let previousButton = {};

  filterButtons.forEach((button) => {
    if (button.className.includes(activeButtonClass)) {
      previousButton = button;
    }
  });

  return previousButton;
};

const renderFilteredPhotos = (filterId) => {
  const filterKey = filterId.replace('filter-', '');
  filters[filterKey](photos);
};

const filterButtonClick = (evt) => {
  const previousActiveButton = findPreviousActive();

  if (previousActiveButton) {
    removeClass(findPreviousActive(), activeButtonClass);
  }

  addClass(evt.target, activeButtonClass);

  clearPreviews(picturesList);

  const { id } = evt.target;

  debounce(renderFilteredPhotos, RE_RENDER_DELAY)(id);
};

filterButtons.forEach((button) =>
  button.addEventListener('click', filterButtonClick),
);

const showFilters = () => {
  removeClass(filterContainer, 'img-filters--inactive');
};

export { showFilters };
