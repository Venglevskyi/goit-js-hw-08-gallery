const linkValidation = document.querySelector("#validation-input");
console.log(linkValidation);

const handleFocus = e => {
  e.preventDefault();
  const { target } = e;
  console.log(target.value.length);
  if (target.value.length === 6) {
    linkValidation.classList.add("valid");
  } else {
    linkValidation.classList.add("invalid");
  }
};

linkValidation.addEventListener("blur", handleFocus);
