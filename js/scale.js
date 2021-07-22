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

const smallerClickListener = () => {
  const value = getValue(scaleValue);

  if (value === MIN_SCALE_VALUE) {
    return;
  }

  const totalValue = value - 25;

  scaleValue.value = `${totalValue}%`;

  changeValue();
};

const biggerClickListener = () => {
  const value = getValue(scaleValue);

  if (value === MAX_SCALE_VALUE) {
    return;
  }

  const totalValue = value + 25;

  scaleValue.value = `${totalValue}%`;

  changeValue();
};

const setDefaultScale = () => {
  const img = imgUpload.querySelector('img');

  scaleValue.value = '100%';
  img.style.transform = 'scale(1)';
};

const addScaleSmallerButtonEvtListener = () =>
  scaleSmaller.addEventListener('click', smallerClickListener);

const addScaleBiggerButtonEvtListener = () =>
  scaleBigger.addEventListener('click', biggerClickListener);

const removeScaleControlsEvtListeners = () => {
  scaleSmaller.removeEventListener('click', smallerClickListener);
  scaleBigger.removeEventListener('click', biggerClickListener);
};

export {
  setDefaultScale,
  addScaleSmallerButtonEvtListener,
  addScaleBiggerButtonEvtListener,
  removeScaleControlsEvtListeners
};
