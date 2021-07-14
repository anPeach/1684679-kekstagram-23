import {
  MAX_AVATAR,
  MAX_COMMENTS,
  MAX_ID,
  MAX_LIKES,
  MESSAGES,
  MIN_AVATAR,
  MIN_COMMENTS,
  MIN_ID,
  MIN_LIKES,
  NAMES,
  PHOTO_DESCRIPTION_COUNT
} from './constants.js';
import { generateId, getRandomNumber } from './utils.js';

const createComments = (idGenerator, amount) => {
  const comments = [];

  for (let index = 0; index < amount; index++) {
    comments.push({
      id: idGenerator(MIN_COMMENTS, MAX_COMMENTS),
      avatar: `img/avatar-${getRandomNumber(MIN_AVATAR, MAX_AVATAR)}.svg`,
      message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
      name: NAMES[getRandomNumber(0, NAMES.length - 1)],
    });
  }

  return comments;
};

const createPhotoDescription = (description = '', options) => {
  const descId = options.generatorId(MIN_ID, MAX_ID);
  const commentIdGenerator = generateId();

  return {
    id: descId,
    url: `photos/${descId}.jpg`,
    description: description,
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comments:
      createComments(
        commentIdGenerator,
        getRandomNumber(MIN_COMMENTS, MAX_COMMENTS),
      ),
  };
};

const descIdGenerator = generateId();

const photos = new Array(PHOTO_DESCRIPTION_COUNT)
  .fill(null)
  .map(() =>
    createPhotoDescription('Good morning', { generatorId: descIdGenerator }),
  );

export { photos };
