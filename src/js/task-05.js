const inputHolder = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');
console.log(spanText);

const onInputChange = (event) => {
console.log( event.currentTarget.value )
  // if (spanText.textContent =='') {
  //    spanText.textContent ='незнакомец'
  // }
 
  // spanText.textContent = event.currentTarget.value 
spanText.textContent = event.currentTarget.value.trim()  || 'незнакомец';
 }

inputHolder.addEventListener('input', onInputChange);

