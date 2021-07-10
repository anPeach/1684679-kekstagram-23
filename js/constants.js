const MAX_AVATAR = 6;
const MAX_ID = 25;
const MAX_LIKES = 200;
const MAX_STRING_LENGTH = 140;
const MIN_AVATAR = 1;
const MIN_ID = 1;
const MIN_LIKES = 15;
const PHOTO_DESCRIPTION_COUNT = 25;
const MIN_SCALE_VALUE = 25;
const MAX_SCALE_VALUE = 100;
const HASHTAG_VALIDATION_REGEXP = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAGS_COUNT = 5;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = ['Vasya', 'Alice', 'Jake', 'Nastya', 'Dima', 'Tom'];

export {
  MAX_AVATAR,
  MAX_ID,
  MAX_LIKES,
  MAX_SCALE_VALUE,
  MAX_STRING_LENGTH,
  MESSAGES,
  MIN_AVATAR,
  MIN_ID,
  MIN_LIKES,
  MIN_SCALE_VALUE,
  NAMES,
  PHOTO_DESCRIPTION_COUNT,
  HASHTAG_VALIDATION_REGEXP,
  MAX_HASHTAGS_COUNT
};
