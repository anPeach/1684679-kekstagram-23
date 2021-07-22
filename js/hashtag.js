import { HASHTAG_VALIDATION_REGEXP, MAX_HASHTAGS_COUNT } from './constants.js';
import { setBorderColor } from './utils.js';

const hashtagInput = document.querySelector('.text__hashtags');

let prevHashtagValue = '';

const isUniqueHashtags = (hashtags) => {
  const upperCaseHashtags = hashtags.map((hashtag) => hashtag.toUpperCase());

  const uniques = [...new Set(upperCaseHashtags)];

  return uniques.length !== upperCaseHashtags.length;
};

const hasValidationErrors = (hashtags) =>
  hashtags.every((hashtag) => !HASHTAG_VALIDATION_REGEXP.test(hashtag));

const isMaximumHashtagsCount = (hashtags) =>
  hashtags.length > MAX_HASHTAGS_COUNT;

const setUniqueError = () => {
  hashtagInput.setCustomValidity('Хэштеги должны быть уникальны.');
  setBorderColor(hashtagInput, 'red');
};

const setValidationError = () => {
  hashtagInput.setCustomValidity(
    'Хэштег должен начинаться с #, состоять только из букв и цифр. Хэштеги должны быть разделены пробелом.',
  );
  setBorderColor(hashtagInput, 'red');
};

const setHashtagsCountError = () => {
  hashtagInput.setCustomValidity(
    'Максимально возможное количество хэштегов: 5.',
  );
  hashtagInput.value = prevHashtagValue;
  setBorderColor(hashtagInput, 'red');
};

const isHashtagsEmpty = (hashtags) => hashtags.filter(Boolean);

const inputChangeListener = () => {
  const hashtags = hashtagInput.value.trim().split(' ');

  hashtagInput.setCustomValidity('');
  setBorderColor(hashtagInput, '');

  if (!isHashtagsEmpty(hashtags).length) {
    return;
  }

  hasValidationErrors(hashtags) && setValidationError();
  isUniqueHashtags(hashtags) && setUniqueError();
  isMaximumHashtagsCount(hashtags) && setHashtagsCountError();

  hashtagInput.reportValidity();
  prevHashtagValue = hashtagInput.value;
};

const clearHashtagsOptions = () => {
  hashtagInput.setCustomValidity('');
  setBorderColor(hashtagInput, '');
  hashtagInput.value = '';
};

const addHashtagInputEvtListener = () =>
  hashtagInput.addEventListener('input', inputChangeListener);

const removeHashtagsInputEvtListener = () => {
  hashtagInput.removeEventListener('input', inputChangeListener);
};

export { inputChangeListener, addHashtagInputEvtListener, removeHashtagsInputEvtListener, clearHashtagsOptions };
