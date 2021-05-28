const categoryEl = document.querySelectorAll('li.item')
console.log('В списке', categoryEl.length, 'категории')

const groupEl = document.querySelector('#categories')

categoryEl.forEach(element =>
    console.log('Категория:', element.querySelector('h2').textContent,
        
    'Количество элементов:', element.querySelectorAll('li').length)
)



