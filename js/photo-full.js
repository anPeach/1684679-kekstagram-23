import {
  addClass,
  findPhoto,
  hidePopup,
  removeClass,
  renderComments,
  showPopup
} from './utils.js';
import { COMMENTS_STEP } from './constants.js';
import './effects.js';
import { fetched } from './main.js';

const fullPicture = document.querySelector('.big-picture');
const pictureContainer = document.querySelector('.pictures');
const closeButton = fullPicture.querySelector('.big-picture__cancel');

const commentsContainer = fullPicture.querySelector('.social__comments');
const commentsList = commentsContainer.childNodes;
const commentLoader = fullPicture.querySelector('.comments-loader');
const commentsShownCount = fullPicture.querySelector('.comments-shown-count');

let currentOpenedPhoto = {};

const onLoadMoreClick = () => {
  const amountShownComments = commentsList.length + COMMENTS_STEP;

  const commentsToRender = currentOpenedPhoto.comments.slice(
    0,
    amountShownComments,
  );

  commentsContainer.replaceChildren(renderComments(commentsToRender));

  commentsShownCount.textContent = commentsToRender.length;

  if (commentsToRender.length === currentOpenedPhoto.comments.length) {
    addClass(commentLoader, 'hidden');
  }
};

const renderFullPhoto = ({ url, likes, description, comments }) => {
  const img = fullPicture.querySelector('.big-picture__img>img');
  img.src = url;

  const caption = fullPicture.querySelector('.social__caption');
  caption.textContent = description;

  const likesCount = fullPicture.querySelector('.likes-count');
  likesCount.textContent = likes;

  const commentsCount = fullPicture.querySelector('.comments-count');
  commentsCount.textContent = comments.length;

  commentsShownCount.textContent = COMMENTS_STEP;

  removeClass(commentLoader, 'hidden');

  if (comments.length < COMMENTS_STEP) {
    commentsShownCount.textContent = comments.length;
    addClass(commentLoader, 'hidden');
  }

  const commentsToRender = comments.slice(0, COMMENTS_STEP);
  commentsContainer.replaceChildren(renderComments(commentsToRender));
};

const closePopupEscListener = (evt) => {
  if (evt.code === 'Escape') {
    hidePopup(fullPicture);
    document.removeEventListener('keydown', closePopupEscListener);
    commentLoader.removeEventListener('click', onLoadMoreClick);
  }
};

const closeButtonClickListener = () => {
  hidePopup(fullPicture);
  closeButton.removeEventListener('click', closeButtonClickListener);
  commentLoader.removeEventListener('click', onLoadMoreClick);
  document.removeEventListener('keydown', closePopupEscListener);
};

const showPicture = (evt) => {
  const foundedPhoto = findPhoto(evt, fetched.photos);

  if (!foundedPhoto) {
    return;
  }

  renderFullPhoto(foundedPhoto);
  currentOpenedPhoto = foundedPhoto;

  showPopup(fullPicture);

  commentLoader.addEventListener('click', onLoadMoreClick);
  document.addEventListener('keydown', closePopupEscListener);
  closeButton.addEventListener('click', closeButtonClickListener);
};

pictureContainer.addEventListener('click', showPicture);

export { currentOpenedPhoto };
