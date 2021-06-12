import { MAX_AVATAR, MAX_ID, MAX_LIKES, MESSAGES, MIN_AVATAR, MIN_ID, MIN_LIKES, NAMES } from './constants.js';
import { generateId } from './generateId.js';
import {getRandomNumber} from './getRandomNumber.js';

const createPhotoDescription = (description = '', options) => {
  const descId = options.generatorId(MIN_ID, MAX_ID);
  const commentIdGenerator = generateId();

  return {
    id: descId,
    url: `photos/${descId}.jpg`,
    description: description,
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comment: [
      {
        id: commentIdGenerator(MIN_ID, MESSAGES.length),
        avatar: `img/avatar-${getRandomNumber(MIN_AVATAR, MAX_AVATAR)}.svg`,
        message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
        name: NAMES[getRandomNumber(0, NAMES.length - 1)],
      },
    ],
  };
};

export {createPhotoDescription};
