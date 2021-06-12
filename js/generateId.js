import { getRandomNumber } from './getRandomNumber.js';
import { isUnique } from './isUnique.js';

const generateId = () => {
  const ids = [];
  return function getId(min, max) {
    const random = getRandomNumber(min, max);
    const id = isUnique(ids, random) ? random : getId(min, max);
    ids.push(id);
    return id;
  };
};

export { generateId };
