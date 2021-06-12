import {MAX_STRING_LENGTH} from './constants.js';

const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength(
  'Hello, my name is Nastya! But some people on the internet call me AnPeach.',
  MAX_STRING_LENGTH,
);

export {checkStringLength};
