const MAX_STRING_LENGTH = 140;
const MIN_ID = 1;
const MAX_ID = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const PHOTO_DESCRIPTION_COUNT = 25;
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = ['Vasya', 'Alice', 'Jake', 'Nastya', 'Dima', 'Tom'];

const getRandomNumber = function (min, max) {
  if (max > min && min >= 0 && max > 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  throw new RangeError('error here');
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;
checkStringLength(
  'Hello, my name is Nastya! But some people on the internet call me AnPeach.',
  MAX_STRING_LENGTH,
);

const isUnique = (array, value) => !array.includes(value);

const generateId = () => {
  const ids = [];
  return function getId(min, max) {
    const random = getRandomNumber(min, max);
    const id = isUnique(ids, random) ? random : getId(min, max);
    ids.push(id);
    return id;
  };
};

const descIdGenerator = generateId();

const createPhotoDescription = (description = '') => {
  const descId = descIdGenerator(MIN_ID, MAX_ID);
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

createPhotoDescription('good morning');

const photoDescriptions = new Array(PHOTO_DESCRIPTION_COUNT).fill(null).map(()=>createPhotoDescription('Good morning'));

photoDescriptions;
