const inputParent = document.querySelector('#controls');
const inputHolder = document.querySelector('input');
const boxHolder = document.querySelector('#boxes')
const create = document.querySelector('button[data-action="render"]')
const destroy = document.querySelector('button[data-action="destroy"]')

const createBoxes = (amount) => {
   
    amount = inputHolder.value
    const divs = [];
    for (let i = 0; i < amount; i += 1){
        const boxes = document.createElement('div')
             
        boxes.style.height = 30 + i * 10 + 'px'
        boxes.style.width = 30 + i * 10 + 'px'
        const color = Math.floor(Math.random() * 256)
        const color1 = Math.floor(Math.random() * 256)
        const color2 = Math.floor(Math.random() * 256)
        boxes.style.backgroundColor = 'rgb('+color+','+color1+','+color2+')'
      
        divs.push(boxes)
    
        
    }
   boxHolder.append(...divs)
}

const destroyBoxes = () => {
   
    boxHolder.innerHTML = '';
    inputHolder.value = '';
   
    
}

create.addEventListener('click', createBoxes)
destroy.addEventListener('click', destroyBoxes)
 
