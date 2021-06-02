const inputSize = document.querySelector('input#font-size-control')
const spanText = document.querySelector('span#text')


const inputFn = (event) => {
    
    if (event.currentTarget.value > 0) {
        const fontValue = event.currentTarget.value
        spanText.style.fontSize=fontValue+'px'
          
    }
 
}


inputSize.addEventListener('input', inputFn);
