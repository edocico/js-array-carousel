console.log('ok')
// recupero elementi necessari dal DOM
const leftArrowDOMElement = document.querySelector('.left-arrow')
console.log(leftArrowDOMElement)

const rightArrowDOMElement = document.querySelector('.right-arrow')
console.log(rightArrowDOMElement)

const imgBoxDOMElement = document.querySelector('.img-box')
console.log(imgBoxDOMElement)

// dichiaro e inizializzo array delle immagini 
const imagesArray = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
]

console.log(imagesArray)

// apro un ciclo for per ciclare l'array

for (let i = 0; i < imagesArray.length; i++) {
    console.log(i)
    // ad ogni iterazione recupero un elemento dall'array
    const currentImage = imagesArray[i]
    console.log(currentImage)
    // dichiaro una variabile alla quale passo una stringa contente il valore dell'indice ottenuto ad ogni iterazione del ciclo
    const htmlString = `<img class="image" src="${currentImage}">`
    console.log(htmlString)
    // passo tutti i valori della variabile precedente all'innerhtml del DOM element desiderato
    imgBoxDOMElement.innerHTML += htmlString
    console.log(imgBoxDOMElement)
    
}

// recupero dal DOM tutti gli elementi precedentemente inseriti
const imageDOMElement = document.getElementsByClassName('image')
console.log(imageDOMElement)
const firstImageDOMElement = imageDOMElement[0]
console.log(firstImageDOMElement)
console.log(imageDOMElement[0])
const secondImageDOMElement = imageDOMElement[1]
console.log(secondImageDOMElement)
const thirdImageDOMElement = imageDOMElement[2]
console.log(thirdImageDOMElement)
const fourthImageDOMElement = imageDOMElement[3]
console.log(fourthImageDOMElement)
const fifthImageDOMElement = imageDOMElement[4]
console.log(fifthImageDOMElement)

// applico display none a tutte le immagini tranne la prima alla quale applico display block

firstImageDOMElement.classList.add('d-block')
secondImageDOMElement.classList.add('d-none')
thirdImageDOMElement.classList.add('d-none')
fourthImageDOMElement.classList.add('d-none')
fifthImageDOMElement.classList.add('d-none')



let ImageCounter = 0

//controllo forward per il carosello
rightArrowDOMElement.addEventListener('click', function () {
    
    imageDOMElement[ImageCounter].classList.remove('d-block')
    imageDOMElement[ImageCounter].classList.add('d-none')
    ImageCounter++
    if (ImageCounter >= imageDOMElement.length) {
        ImageCounter = 0
    }
    imageDOMElement[ImageCounter].classList.remove('d-none')
    imageDOMElement[ImageCounter].classList.add('d-block')

    
    
})

// controllo backward per il carosello
leftArrowDOMElement.addEventListener('click', function() {

    imageDOMElement[ImageCounter].classList.remove('d-block')
    imageDOMElement[ImageCounter].classList.add('d-none')
    ImageCounter--
    if (ImageCounter < 0) {
        ImageCounter = imageDOMElement.length - 1
    }
    imageDOMElement[ImageCounter].classList.remove('d-none')
    imageDOMElement[ImageCounter].classList.add('d-block')

})