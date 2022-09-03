const board = document.querySelector('#board')

let boardSize = 500

for (let i=0; i<boardSize; i++){
    let square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseenter', function(){
        setColor(square)
    })

    square.addEventListener('mouseleave', function(){
        clearColor(square)
    })

    board.append(square)
}

function setColor(el){
    let rgb = randomColor()
    el.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
    el.style.transform = 'scale(1.2)'
    el.style.transition = '0.3s ease'
    el.style.transitionDelay = '0s'

}

function clearColor(el){
    el.style.transform = 'scale(1)'
    el.style.backgroundColor = '#222'
    el.style.transition = '4s ease'
    el.style.transitionDelay = '2s'
}

function randomColor(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    let rgb = [r,g,b]
    return rgb
}