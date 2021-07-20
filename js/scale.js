import { MIN_SCALE_VALUE, MAX_SCALE_VALUE } from './constants.js';

const uploadScale = document.querySelector('.img-upload__scale');

const scaleSmaller = uploadScale.querySelector('.scale__control--smaller');
const scaleBigger = uploadScale.querySelector('.scale__control--bigger');
const scaleValue = uploadScale.querySelector('.scale__control--value');

const imgUpload = document.querySelector('.img-upload__preview');

const getValue = ({ value }) => Number(value.substring(0, value.length - 1));

const changeValue = () => {
  const img = imgUpload.querySelector('img');
  const value = getValue(scaleValue);

  img.style.transform = `scale(${value / 100})`;
};

const smallerClick = () => {
  const value = getValue(scaleValue);

  if (value === MIN_SCALE_VALUE) {
    return;
  }

  const totalValue = value - 25;

  scaleValue.value = `${totalValue}%`;

  changeValue();
};

const biggerClick = () => {
  const value = getValue(scaleValue);

  if (value === MAX_SCALE_VALUE) {
    return;
  }

  const totalValue = value + 25;

  scaleValue.value = `${totalValue}%`;

  changeValue();
};

scaleSmaller.addEventListener('click', smallerClick);
scaleBigger.addEventListener('click', biggerClick);
