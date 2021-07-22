import { addClass, removeClass } from './utils.js';

const effectsList = document.querySelector('.effects__list');
const imgPreview = document.querySelector('.img-upload__preview>img');
const sliderContainer = document.querySelector('.img-upload__effect-level');
const slider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');

const effectNone = effectsList.querySelector('#effect-none');

let activeFilter = {};

addClass(sliderContainer, 'hidden');

const filters = {
  none: {
    act: () => {
      imgPreview.style.filter = 'none';
      addClass(sliderContainer, 'hidden');
    },
  },
  chrome: {
    act: (value) => `grayscale(${value})`,
    config: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
  },
  sepia: {
    act: (value) => `sepia(${value})`,
    config: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
    },
  },
  marvin: {
    act: (value) => `invert(${value}%)`,
    config: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
    },
  },
  phobos: {
    act: (value) => `blur(${value}px)`,
    config: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
    },
  },
  heat: {
    act: (value) => `brightness(${value})`,
    config: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
    },
  },
};

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 0,
});

slider.noUiSlider.on('update', (_, handle, unencoded) => {
  const value = unencoded[handle];
  if (!value) {
    return;
  }
  effectValue.value = value;
  imgPreview.style.filter = activeFilter.act(value);
});

const changeRadioButtonListener = (evt) => {
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }
  const filterName = evt.target.value;
  activeFilter = filters[filterName];

  imgPreview.className = '';

  addClass(imgPreview, `effects__preview--${filterName}`);

  if (filterName === 'none') {
    activeFilter.act();
    return;
  }

  removeClass(slider, 'hidden');
  removeClass(sliderContainer, 'hidden');

  slider.noUiSlider.updateOptions({
    range: activeFilter.config.range,
    start: 100,
    step: activeFilter.config.step,
  });
};

const addEffectsListEvtListener = () =>
  effectsList.addEventListener('change', changeRadioButtonListener);

const removeEffectsListEvtListener = () =>
  effectsList.removeEventListener('change', changeRadioButtonListener);

const clearEffects = () => {
  imgPreview.style.filter = filters.none.act();
  effectNone.checked = true;
  effectsList.removeEventListener('change', changeRadioButtonListener);
};

export { clearEffects, changeRadioButtonListener, addEffectsListEvtListener, removeEffectsListEvtListener };
