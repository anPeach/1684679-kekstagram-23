const maxStringLength = 140;

let getRandomValue = (minValue, maxValue) => {
  if (minValue < 0) {
    throw new RangeError("The minimum value must be greater than 0");
  }

  if (maxValue <= minValue) {
    throw new RangeError("The minimum value must be less than the maximum");
  }

  return Math.round(Math.random() * (maxValue - minValue) + minValue);
};

try {
  const result = getRandomValue(0, 1);
  console.log(result);
} catch (err) {
  console.log(err);
}


let checkStringLength = (string, maxLength) => {
  return string.length <= maxLength ? true : false;
}

const lengthController = checkStringLength('Hello, my name is Nastya! But some people on the internet call me AnPeach.', maxStringLength);
console.log(lengthController);
