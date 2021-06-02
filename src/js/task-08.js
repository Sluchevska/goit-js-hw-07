const inputParent = document.querySelector('#controls');
const inputHolder = document.querySelector('input');
const boxHolder = document.querySelector('#boxes')
const create = document.querySelector('button[data-action="render"]')
const destroy = document.querySelector('button[data-action="destroy"]')

const createBoxes = (amount) => {
   
    amount = inputHolder.value
    for (let i = 0; i < amount; i += 1){
        const boxes = document.createElement('div')
        boxes.classList.add('boxes')
        // const getRandom = (min, max)=>{
        //     return Math.ceil(Math.random()*(max-min)+min)
        // }
        boxes.style.backgroundColor = `red`
        boxes.style.height = 30 +'px'
        boxes.style.width = 30 + 'px'
        boxes.style.border = 1 + 'px'


        boxHolder.appendChild(boxes)
    }
             console.log(amount)
   
    console.log(boxHolder)
   
}



const destroyBoxes = (amount) => {
    amount = inputHolder.value
     console.log(amount)
    for (let i = 1; i <= amount; i += 1)
    {
      
        boxHolder.removeChild(boxHolder.querySelector('.boxes'))
    
     
    console.log(boxHolder)}
    
}

create.addEventListener('click', createBoxes)
destroy.addEventListener('click', destroyBoxes)
 
