
const slider = document.querySelector(".effect-level__slider");
const effectValue = document.querySelector('.effect-level__value');

const filters ={
  chrome:{
    action: (value) => `filter: grayscale(${value})`,
    step: 0.1,
  },
  sepia: {
    action: (value) => `filter: sepia(${value})`,
    step: 0.1,
  },
  marvin: {
    action: (value) => `filter: invert(${value})`,
    step: '1%',
  },
  phobos: {
    action: (value) => `filter: blur(${value})`,
    step: '0.1px',
  },
  heat: {
    action: (value) => `filter: brightness(${value})`,
    step: 0.1,
  },
};

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
});

slider.noUiSlider.on('update', (_, handle, unencoded) => {
  effectValue.value = unencoded[handle];
});

const effectValueChange = (evt) => {
  debugger
  const effect = evt.target.value;
  console.log(effect);

  slider.noUiSlider.updateOptions({

  });
};

eff.addEventListener('change', effectValueChange);
