import { MAX_STRING_LENGTH } from './constants.js';

const commentTextarea = document.querySelector('.text__description');

const isTextareaInRange = () =>
  commentTextarea.value.length === MAX_STRING_LENGTH;

const setLengthError = () => {
  commentTextarea.setCustomValidity(
    'Максимально возможная длина комментария: 140 символов.',
  );
};

const changeTextarea = () => {
  commentTextarea.setCustomValidity('');
  isTextareaInRange() && setLengthError();

  commentTextarea.reportValidity();
};

commentTextarea.addEventListener('input', changeTextarea);
