const maxStringLength = 140;

const getRandomNumber = function (min, max) {
  if (max > min && min >= 0 && max > 0) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  }

  throw new RangeError('error here');
};

getRandomNumber(2, 5);

const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('Hello, my name is Nastya! But some people on the internet call me AnPeach.', maxStringLength);
