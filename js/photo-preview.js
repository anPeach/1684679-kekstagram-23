import { photos } from "./data.js";

const picturesContainer = document.querySelector(".pictures");

const templatePicture = document
  .querySelector("#picture")
  .content.querySelector(".picture");

const miniaturesListFragment = document.createDocumentFragment();

const createMiniature = (node, options) => {
  const { id, url, likes, comments } = options;

  const img = node.querySelector(".picture__img");
  img.dataset.id = id;
  img.src = url;

  node.querySelector(".picture__comments").textContent = comments.length;
  node.querySelector(".picture__likes").textContent = likes;

  return node;
};

const renderMiniature = (container, child) => container.appendChild(child);

const renderPhotos = () => {
  photos.forEach(({ id, url, likes, comments }) => {
    const miniature = createMiniature(templatePicture.cloneNode(true), {
      id,
      url,
      likes,
      comments,
    });

    renderMiniature(miniaturesListFragment, miniature);
  });

  picturesContainer.appendChild(miniaturesListFragment);
};

export { renderPhotos };
