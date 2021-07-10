import { HASHTAG_VALIDATION_REGEXP, MAX_HASHTAGS_COUNT } from './constants.js';

const hashtagInput = document.querySelector('.text__hashtags');

let prevHashtagValue = '';

const isUniqueHashtags = (hashtags) => {
  const upperCaseHashtags = hashtags.map((hashtag) => hashtag.toUpperCase());

  const unique = [...new Set(upperCaseHashtags)];

  return unique.length !== upperCaseHashtags.length;
};

const hasValidationErrors = (hashtags) =>
  hashtags.filter((hashtag) => !HASHTAG_VALIDATION_REGEXP.test(hashtag)).length;

const isMaximumHashtagsCount = (hashtags) => hashtags.length > MAX_HASHTAGS_COUNT;

const setUniqueError = () => {
  hashtagInput.setCustomValidity('Хэштеги должны быть уникальны.');
};

const setValidationError = () => {
  hashtagInput.setCustomValidity(
    'Хэштег должен начинаться с #, состоять только из букв и цифр. Хэштеги должны быть разделены пробелом.',
  );
};

const setHashtagsCountError = () => {
  hashtagInput.setCustomValidity('Максимально возможное количество хэштегов: 5.');
  hashtagInput.value = prevHashtagValue;
};

const inputChange = () => {
  const hashtags = hashtagInput.value.trim().split(' ');

  hashtagInput.setCustomValidity('');

  hasValidationErrors(hashtags) && setValidationError();
  isUniqueHashtags(hashtags) && setUniqueError();
  isMaximumHashtagsCount(hashtags) && setHashtagsCountError();

  hashtagInput.reportValidity();
  prevHashtagValue = hashtagInput.value;

};

hashtagInput.addEventListener('input', inputChange);
