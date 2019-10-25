const link = document.querySelector('#counter');

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  link.children[1].textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  link.children[1].textContent = counterValue;
};

link.children[0].addEventListener('click', decrement);
link.children[2].addEventListener('click', increment);
