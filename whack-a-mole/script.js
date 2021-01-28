const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time_left')
const score = document.querySelector('#score')

let result = 0; 
let currentTime = timeLeft.textContent;


// Move the mole to random box
function randomSquare () {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]; //[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id;
}
randomSquare()


// Add click event on every box
square.forEach( id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition) {
            // increase result
            result = result + 1;
            score.textContent = result;  
        }
    })
})


// Move Mole
function moveMole() {
    let timerId = null; 
    timerId = setInterval(randomSquare, 1000)
}
moveMole()


// Count down
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(timerId)
        alert("Game over! Your final score is " + result)
    } 
}

let timerId = setInterval(countDown, 1000)