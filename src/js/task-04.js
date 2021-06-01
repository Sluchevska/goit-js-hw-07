const counterValue = document.querySelector('#value')
console.log('текущее значение счетчика:', counterValue.textContent)
let counter = 0


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.classList.add('btn')
})


const buttonFirst = document.querySelectorAll('.btn')[0]
console.log(buttonFirst)
const buttonSecond = document.querySelectorAll('.btn')[1]
console.log(buttonSecond);

const incrementFn = () => {

    counter+=1
    counterValue.innerText = counter
    console.log(counterValue)
}
const decreamentFn = () => {

    counter-=1
    counterValue.innerText = counter
    console.log(counterValue)
}

buttonSecond.addEventListener('click', incrementFn)
buttonFirst.addEventListener('click', decreamentFn)
