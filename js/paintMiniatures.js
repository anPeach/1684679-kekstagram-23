import {photoDescriptions} from './data.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const miniatureslist = photoDescriptions();

const miniaturesListFragment = document.createDocumentFragment();

miniatureslist.forEach(({url, likes, comments}) => {
  const miniature = templatePicture.cloneNode(true);
  miniature.querySelector('.picture__img').url = url;
  miniature.querySelector('.picture__comments').textContent = comments.length - 1;
  miniature.querySelector('.picture__comments').textContent = likes;

  miniaturesListFragment.appendChild(miniature);
});
