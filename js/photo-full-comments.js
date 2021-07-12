import {addClass, createComments} from './utils.js';
import {COMMENTS_STEP} from './constants.js';
import { currentOpenedPhoto } from './photo-full.js';

const commentsContainer = document.querySelector('.social__comments');
const commentsList = commentsContainer.childNodes;
const commentLoader = document.querySelector('.comments-loader');
const commentsShownCount = document.querySelector('.comments-shown-count');

const loadMoreClick = () => {
  const amountShownComments = commentsList.length + COMMENTS_STEP;

  const commentsToRender = currentOpenedPhoto.comments.slice(0, amountShownComments);

  commentsContainer.replaceChildren(createComments(commentsToRender));

  commentsShownCount.textContent = commentsToRender.length;

  if(commentsToRender.length === currentOpenedPhoto.comments.length) {
    addClass(commentLoader, 'hidden');
  }

};

commentLoader.addEventListener('click', loadMoreClick);
