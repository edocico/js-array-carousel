console.log('ok')
// recupero elementi necessari dal DOM
const leftArrowDOMElement = document.querySelector('.left-arrow')
console.log(leftArrowDOMElement)

const rightArrowDOMElement = document.querySelector('.right-arrow')
console.log(rightArrowDOMElement)
// dichiaro e inizializzo array delle immagini 
const imagesArray = [src="./img/01.webp",
                    src="./img/02.webp",
                    src="./img/03.webp",
                    src="./img/04.webp",
                    src="./img/05.webp",
]

console.log(imagesArray)

// apro un ciclo for per ciclare l'array

for (let i = 0; i < imagesArray.length; i++) {
    console.log(i)

    const currentImage = imagesArray[i]
    console.log(currentImage)
}