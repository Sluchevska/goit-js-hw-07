const categoryEl = document.querySelectorAll('li.item')
console.log('В списке', categoryEl.length, 'категории')

const groupEl = document.querySelector('#categories')

const elementQuantityEl = document.querySelector('.name-category')

const titleEl = document.querySelector('h2')
console.log('Категория:', titleEl.textContent)


const itemsEl = elementQuantityEl.querySelectorAll('li')


console.log('Количество элементов:',itemsEl.length )





