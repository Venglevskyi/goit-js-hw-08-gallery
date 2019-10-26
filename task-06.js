const linkValidation = document.querySelector('#validation-input');
console.log(linkValidation);

const handleBlur = e => {
  e.preventDefault();
  const { target } = e;
  if (target.value.length === 6) {
    linkValidation.classList.add('valid');
    linkValidation.classList.remove('invalid');
  } else {
    linkValidation.classList.add('invalid');
    linkValidation.classList.remove('valid');
  }
};

linkValidation.addEventListener('blur', handleBlur);
