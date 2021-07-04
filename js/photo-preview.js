import { photoDescriptions } from './data.js';

const picturesContainer = document.querySelector('.pictures');

const templatePicture = document
  .querySelector('#picture')
  .content.querySelector('.picture');

const miniaturesList = photoDescriptions();

const miniaturesListFragment = document.createDocumentFragment();

const createMiniature = (node, options) => {
  const { url, likes, comments } = options;

  node.querySelector('.picture__img').src = url;
  node.querySelector('.picture__comments').textContent = comments.length;
  node.querySelector('.picture__likes').textContent = likes;

  return node;
};

const renderMiniature = (container, child) => container.appendChild(child);

miniaturesList.forEach(({ url, likes, comments }) => {
  const miniature = createMiniature(templatePicture.cloneNode(true), {
    url,
    likes,
    comments,
  });

  renderMiniature(miniaturesListFragment, miniature);
});

picturesContainer.appendChild(miniaturesListFragment);
