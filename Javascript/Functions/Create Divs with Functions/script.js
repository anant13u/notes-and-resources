const divContainer = document.getElementById('div-container')
const widthInput = document.getElementById('width-input')
const heightInput = document.getElementById('height-input')
const createDivButton = document.getElementById('create-div')

createDivButton.addEventListener('click', createDiv)

function createDiv() {
    const newDiv = document.createElement('div')
    console.log(newDiv)
    console.log(widthInput)
    newDiv.classList.add('demo-div')
    newDiv.style.height=`${heightInput.value}em`
    newDiv.style.width=`${widthInput.value}em`
    divContainer.appendChild(newDiv)

    const divs = divContainer.querySelectorAll('.demo-div')
    divs.forEach(div => {
        div.addEventListener('click', () => {
            const width = window.getComputedStyle(div).getPropertyValue('width')
            const height = window.getComputedStyle(div).getPropertyValue('height')
            console.log(width)
            div.innerHTML=`Width: ${width}<br>Height: ${height}`
        })
    });
}


widthInput.addEventListener('keydown', event => {
    if (event.key=='Enter') {
        createDiv()
    }
})

widthInput.addEventListener('click', clearWidthInput)

function clearWidthInput() {
    if (widthInput.value=='Enter width') {
        widthInput.value=''
    }
}

heightInput.addEventListener('keydown', event => {
    if (event.key=='Enter') {
        createDiv()
    }
})

heightInput.addEventListener('click', clearHeightInput)

function clearHeightInput() {
    if (heightInput.value=='Enter height') {
        heightInput.value=''
    }
}
