const link = {
  input: document.querySelector('input#name-input'),
  output: document.querySelector('#name-output'),
};

const handleInput = e => {
  e.preventDefault();
  const { target } = e;
  link.output.textContent = target.value || 'незнакомец';
};

link.input.addEventListener('input', handleInput);
