import { MAX_STRING_LENGTH } from './constants.js';

const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength(
  'Hello, my name is Nastya! But some people on the internet call me AnPeach.',
  MAX_STRING_LENGTH,
);

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


export { checkStringLength, getRandomNumber, isUnique, generateId, addClass, removeClass };
