const linkValidation = document.querySelector('#validation-input');
const valuePlasholder = Number(linkValidation.attributes[2].textContent);

const handleBlur = e => {
  e.preventDefault();
  const { target } = e;
  if (target.value.length === valuePlasholder) {
    linkValidation.classList.add('valid');
    linkValidation.classList.remove('invalid');
  } else {
    linkValidation.classList.add('invalid');
    linkValidation.classList.remove('valid');
  }
};

linkValidation.addEventListener('blur', handleBlur);
