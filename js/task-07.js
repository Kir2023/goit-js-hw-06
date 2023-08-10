const inputChange = document.querySelector('input#font-size-control')
const ourText = document.querySelector('span#text')

inputChange.addEventListener('change', e => {
    ourText.style.fontSize = `${e.target.value }px`
})