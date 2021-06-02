const counterValue = document.querySelector('#value')
console.log('текущее значение счетчика:', counterValue.textContent)
let counter = 0


const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.classList.add('btn')
})


const buttonFirst = document.querySelectorAll('.btn')[0]

const buttonSecond = document.querySelectorAll('.btn')[1]


const incrementFn = () => {

    counter+=1
    counterValue.innerText = counter
    
}
const decreamentFn = () => {

    counter-=1
    counterValue.innerText = counter

}

buttonSecond.addEventListener('click', incrementFn)
buttonFirst.addEventListener('click', decreamentFn)
