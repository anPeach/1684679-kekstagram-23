import { ALERT_SHOW_TIME } from './constants.js';

const getRandomNumber = function (min, max) {
  if (max > min && min >= 0 && max > 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  throw new RangeError('error here');
};

const isUnique = (array, value) => !array.includes(value);

const generateId = () => {
  const ids = [];
  return function getId(min, max) {
    const random = getRandomNumber(min, max);
    const id = isUnique(ids, random) ? random : getId(min, max);
    ids.push(id);
    return id;
  };
};

const renderComment = (comment) => {
  const commentNode = document
    .querySelector('.social__comment')
    .cloneNode(true);

  const img = commentNode.querySelector('img');
  img.src = comment.avatar;
  img.alt = comment.name;

  const commentText = commentNode.querySelector('p');
  commentText.textContent = comment.message;

  return commentNode;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.appendChild(renderComment(comment));
  });

  return fragment;
};

const findPhoto = (evt, photos) => {
  const { target } = evt;

  if (target.dataset.id === undefined) {
    return;
  }

  const foundedPhoto = photos.find(
    (photo) => photo.id === Number(target.dataset.id),
  );

  return foundedPhoto;
};

const addClass = (node, className) => {
  node.classList.add(className);
};

const removeClass = (node, className) => {
  node.classList.remove(className);
};

const showPopup = (hiddenNode) => {
  addClass(document.body, 'modal-open');
  removeClass(hiddenNode, 'hidden');
};

const hidePopup = (shownNode) => {
  removeClass(document.body, 'modal-open');
  addClass(shownNode, 'hidden');
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const shuffle = (array) => array.slice().sort(() => Math.random() - 0.5);

const clearPreviews = (photos) => {
  Array.from(photos).forEach((photo) => {
    photo.remove();
  });
};

const getPhotoRate = (photo) => photo.comments.length;

const getRatedPhotos = (photos) =>
  photos.slice().sort((pic1, pic2) => getPhotoRate(pic2) - getPhotoRate(pic1));

const setBorderColor = (node, color) => {
  node.style.borderColor = color;
};

export {
  addClass,
  clearPreviews,
  findPhoto,
  generateId,
  getRandomNumber,
  hidePopup,
  isUnique,
  removeClass,
  renderComments,
  showAlert,
  showPopup,
  shuffle,
  getPhotoRate,
  getRatedPhotos,
  setBorderColor
};
