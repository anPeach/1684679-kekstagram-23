const maxStringLength = 140;

const getRandomValue = (minValue, maxValue) => {
  if (minValue < 0) {
    throw new RangeError('The minimum value must be greater than 0');
  }

  if (maxValue <= minValue) {
    throw new RangeError('The minimum value must be less than the maximum');
  }

  return Math.round(Math.random() * (maxValue - minValue) + minValue);
};

try {
  getRandomValue(0, 1);
} catch (err) {
  //console.log(err);
}


const checkStringLength = (string, maxLength) => string.length <= maxLength;

checkStringLength('Hello, my name is Nastya! But some people on the internet call me AnPeach.', maxStringLength);
