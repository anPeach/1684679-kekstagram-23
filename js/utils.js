const checkStringLength = (string, maxLength) => string.length <= maxLength;

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

const closePopup = (node) => (evt) => {
  if (evt.code === 'Escape') {
    hidePopup(node);
  }

  if(evt.type === 'click'){
    hidePopup(node);
  }
};

export {
  checkStringLength,
  getRandomNumber,
  isUnique,
  generateId,
  addClass,
  removeClass,
  closePopup,
  showPopup,
  hidePopup
};
