const inputHolder = document.querySelector('#validation-input');
const dataHolder = inputHolder.dataset.length;
   


const onInputBlur = (event) => {
    if (event.currentTarget.value.length == dataHolder) {
        inputHolder.classList.add('valid')
        inputHolder.classList.remove('invalid')
        
      
    } else if (event.currentTarget.value.length != dataHolder) {
    
        inputHolder.classList.add('invalid')
        inputHolder.classList.remove('valid')
    }
};

inputHolder.addEventListener('blur', onInputBlur);

