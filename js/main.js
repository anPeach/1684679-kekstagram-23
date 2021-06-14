import { PHOTO_DESCRIPTION_COUNT } from './constants.js';
import { generateId } from './utils.js';
import { createPhotoDescription } from './data.js';

const descIdGenerator = generateId();

const photoDescriptions = new Array(PHOTO_DESCRIPTION_COUNT)
  .fill(null)
  .map(() =>
    createPhotoDescription('Good morning', { generatorId: descIdGenerator }));

photoDescriptions;
