const MAX_STRING_LENGTH = 140;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const HASHTAG_VALIDATION_REGEXP = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAGS_COUNT = 5;
const COMMENTS_STEP = 5;
const ALERT_SHOW_TIME = 5000;
const RE_RENDER_DELAY = 900;
const AMOUNT_FILTERED_PHOTOS = 10;
const SCALE_DIFFERENCE = 25;

const SERVER_PATH = 'https://23.javascript.pages.academy/kekstagram';

export {
  AMOUNT_FILTERED_PHOTOS,
  MAX_SCALE_VALUE,
  MAX_STRING_LENGTH,
  MIN_SCALE_VALUE,
  HASHTAG_VALIDATION_REGEXP,
  MAX_HASHTAGS_COUNT,
  COMMENTS_STEP,
  SERVER_PATH,
  ALERT_SHOW_TIME,
  RE_RENDER_DELAY,
  SCALE_DIFFERENCE
};
