const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const picturesEl = images.map(option => {

    const image = document.createElement('li');
    image.insertAdjacentHTML('afterbegin', `<img src = ${option.url} alt = '${option.alt}' class = "image-decor">`)
    return image
})

const gallery = document.querySelector('#gallery')
gallery.append(...picturesEl)
console.log(gallery)

// Oformlenie



    
