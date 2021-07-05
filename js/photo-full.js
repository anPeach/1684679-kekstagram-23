import { photos } from './data.js';
import { addClass, removeClass } from './utils.js';

const fullPicture = document.querySelector('.big-picture');
const commentsNode = fullPicture.querySelector('.social__comments');
const pictureContainer = document.querySelector('.pictures');

const createComment = (comment) => {
  const commentNode = commentsNode
    .querySelector('.social__comment')
    .cloneNode(true);

  const img = commentNode.querySelector('img');
  img.src = comment.avatar;
  img.alt = comment.name;

  const commentText = commentNode.querySelector('p');
  commentText.textContent = comment.message;

  return commentNode;
};

const createComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.appendChild(createComment(comment));
  });

  return fragment;
};

const renderFullPhoto = ({ url, likes, description, comments }) => {
  const img = fullPicture.querySelector('.big-picture__img>img');
  img.src = url;

  const caption = fullPicture.querySelector('.social__caption');
  caption.textContent = description;

  const likesCount = fullPicture.querySelector('.likes-count');
  likesCount.textContent = likes;

  commentsNode.replaceChildren(createComments(comments));
};

pictureContainer.addEventListener('click', (evt) => {
  const { target } = evt;

  if (!target.dataset.id) {
    return;
  }

  const foundedPhoto = photos.find(
    (photo) => photo.id === Number(target.dataset.id),
  );

  renderFullPhoto(foundedPhoto);

  const commentCount = fullPicture.querySelector('.social__comment-count');
  const commentLoader = fullPicture.querySelector('.comments-loader');

  addClass(commentCount, 'hidden');
  addClass(commentLoader, 'hidden');
  addClass(document.body, 'modal-open');
  removeClass(fullPicture, 'hidden');
});

const closeFullPhoto = () => {
  removeClass(document.body, 'modal-open');
  addClass(fullPicture, 'hidden');
};

document.addEventListener('keydown', (evt) => {
  if (evt.code === 'Escape') {
    closeFullPhoto();
  }
});

const closeButton = fullPicture.querySelector('.big-picture__cancel');

closeButton.addEventListener('click', () => {
  closeFullPhoto();
});
