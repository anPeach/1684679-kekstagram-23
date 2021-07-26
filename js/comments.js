import { MAX_STRING_LENGTH } from './constants.js';
import { setBorderColor } from './utils.js';

const commentTextarea = document.querySelector('.text__description');

const isTextareaInRange = () =>
  commentTextarea.value.length === MAX_STRING_LENGTH;

const setLengthError = () => {
  commentTextarea.setCustomValidity(
    'Максимально возможная длина комментария: 140 символов.',
  );
  setBorderColor(commentTextarea, 'red');
};

const onChangeTextarea = () => {
  commentTextarea.setCustomValidity('');
  setBorderColor(commentTextarea, '');

  isTextareaInRange() && setLengthError();

  commentTextarea.reportValidity();
};

const clearCommentsOptions = () => {
  commentTextarea.setCustomValidity('');
  setBorderColor(commentTextarea, '');
  commentTextarea.value = '';
};

const addCommentTextareaEvtListener = () =>
  commentTextarea.addEventListener('input', onChangeTextarea);

const removeCommentTextareaEvtListener = () =>
  commentTextarea.removeEventListener('input', onChangeTextarea);


export { addCommentTextareaEvtListener, removeCommentTextareaEvtListener, clearCommentsOptions };
