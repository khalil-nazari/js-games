

/*
push(); 
querySelector(); 
setAttribute(); 
getAttribute(); 
createElement(); 
appendChild(); 
Math.random(); 
sort(); 
For Loop


images/frise.jpeg
imagse/cheessburger.jpeg
images/hotdog.jpeg
images/ice-creame.png
images/milkshake.jpeg
images/pizza.png
images/white.jpeg


*/

document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'fries', 
            img: 'images/frise.jpeg',
        }, 
        {
            name: 'fries', 
            img: 'images/frise.jpeg',
        },  
        {
            name: 'cheessburger', 
            img: 'images/cheessburger.jpeg'
        }, 
        {
            name: 'cheessburger', 
            img: 'images/cheessburger.jpeg'
        }, 
        {
            name: 'hotdog', 
            img : 'images/hotdog.jpeg'
        },
        {
            name: 'hotdog', 
            img : 'images/hotdog.jpeg'
        }, 
        {
            name: 'ice-creame', 
            img : 'images/ice-creame.png'
        }, 
        {
            name: 'ice-creame', 
            img : 'images/ice-creame.png'
        }, 
        {
            name: 'milk-shake', 
            img : 'images/milk-shake.jpeg'
        }, 
        {
            name: 'milk-shake', 
            img : 'images/milk-shake.jpeg'
        }, 
        {
            name: 'pizza', 
            img : 'images/pizza.png'
        }, 
        {
            name: 'pizza', 
            img : 'images/pizza.png'
        },
    ]

    // Randomly sor the cards
    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result'); 
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    // create the board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }


    // Check matches
    function checkForMatch () {
        var cards = document.querySelectorAll('img')
       
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]


        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        }


        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpeg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
          cardsChosen = []
          cardsChosenId = []
          resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    // flip the card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard()


});
