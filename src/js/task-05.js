const inputHolder = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');
console.log(spanText);

const onInputChange = (event) => {
   
  spanText.textContent = event.currentTarget.value  || 'незнакомец';
}

inputHolder.addEventListener('input', onInputChange);

