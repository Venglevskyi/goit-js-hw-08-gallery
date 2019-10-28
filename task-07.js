const link = {
  slider: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

const handleInput = () => {
  link.text.style.fontSize = link.slider.value + 'px';
};

link.slider.addEventListener('input', handleInput);
