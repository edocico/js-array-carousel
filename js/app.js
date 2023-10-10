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
const secondImageDOMElement = imageDOMElement[1]
console.log(secondImageDOMElement)
const thirdImageDOMElement = imageDOMElement[2]
console.log(thirdImageDOMElement)
const fourthImageDOMElement = imageDOMElement[3]
console.log(fourthImageDOMElement)
const fifthImageDOMElement = imageDOMElement[4]
console.log(fifthImageDOMElement)