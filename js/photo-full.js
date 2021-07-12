import { photos } from './data.js';
import { showPopup, closePopup, createComments, findPhoto, addClass, removeClass } from './utils.js';
import {COMMENTS_STEP} from './constants.js';
import './photo-full-comments.js';

const fullPicture = document.querySelector('.big-picture');
const commentsNode = fullPicture.querySelector('.social__comments');
const pictureContainer = document.querySelector('.pictures');

let currentOpenedPhoto = {};

const renderFullPhoto = ({ url, likes, description, comments }) => {
  const img = fullPicture.querySelector('.big-picture__img>img');
  img.src = url;

  const caption = fullPicture.querySelector('.social__caption');
  caption.textContent = description;

  const likesCount = fullPicture.querySelector('.likes-count');
  likesCount.textContent = likes;

  const commentsCount = fullPicture.querySelector('.comments-count');
  commentsCount.textContent = comments.length;

  const commentsShownCount = document.querySelector('.comments-shown-count');
  commentsShownCount.textContent = COMMENTS_STEP;

  const commentLoader = document.querySelector('.comments-loader');
  removeClass(commentLoader, 'hidden');

  if(comments.length < 5){
    commentsShownCount.textContent = comments.length;
    addClass(commentLoader, 'hidden');
  }

  const commentsToRender = comments.slice(0, COMMENTS_STEP);
  commentsNode.replaceChildren(createComments(commentsToRender));
};

const showPicture = (evt) => {
  const foundedPhoto = findPhoto(evt, photos);

  renderFullPhoto(foundedPhoto);
  currentOpenedPhoto = foundedPhoto;

  showPopup(fullPicture);
};

pictureContainer.addEventListener('click', showPicture);

document.addEventListener('keydown', closePopup(fullPicture));

const closeButton = fullPicture.querySelector('.big-picture__cancel');

closeButton.addEventListener('click', closePopup(fullPicture));

export {currentOpenedPhoto};
