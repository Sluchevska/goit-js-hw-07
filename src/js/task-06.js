const inputHolder = document.querySelector('#validation-input');
const dataHolder = inputHolder.dataset.length;
    console.log(dataHolder)


const onInputBlur = (event) => {
    if (event.currentTarget.value.length === dataHolder) {
        inputHolder.classList.add('valid')
        inputHolder.classList.remove('invalid')
        
      
    }
    
    inputHolder.classList.add('invalid')
     inputHolder.classList.remove('valid')
};
console.log(inputHolder.value)
inputHolder.addEventListener('blur', onInputBlur);

