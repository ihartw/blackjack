//global variables
//Information variables
var playerTotal = 0,
    dealerTotal = 0,
    playerCards = [],
    dealerCards = [],
    inPlay = []
//DOM variables
var startGame = document.getElementById("startGame"),
    inGame = document.getElementById("inGame"),
    winner = document.getElementById("winner"),
    loser = document.getElementById("loser"),
    dealerCardsDom = document.getElementById("dealerCards"),
    playerCardsDom = document.getElementById("myCards"),
    domReset = document.getElementById("playAgain"),
    faceDown = document.getElementById("faceDown"),
    tie = document.getElementById('tie')
//Card Values
var cards = [{
        cardValue: 2,
        face: "img/cards/2_of_clubs.png",
    },
    {
        cardValue: 2,
        face: "img/cards/2_of_hearts.png",
    },
    {
        cardValue: 2,
        face: "img/cards/2_of_spades.png",
    },
    {
        cardValue: 2,
        face: "img/cards/2_of_diamonds.png",
    },
    {
        cardValue: 3,
        face: "img/cards/3_of_clubs.png",
    },
    {
        cardValue: 3,
        face: "img/cards/3_of_hearts.png",
    },
    {
        cardValue: 3,
        face: "img/cards/3_of_spades.png",
    },
    {
        cardValue: 4,
        face: "img/cards/4_of_diamonds.png",
    },
    {
        cardValue: 4,
        face: "img/cards/4_of_clubs.png",
    },
    {
        cardValue: 4,
        face: "img/cards/4_of_hearts.png",
    },
    {
        cardValue: 4,
        face: "img/cards/4_of_spades.png",
    },
    {
        cardValue: 4,
        face: "img/cards/4_of_diamonds.png",
    },
    {
        cardValue: 2,
        face: "img/cards/2_of_clubs.png",
    },
    {
        cardValue: 5,
        face: "img/cards/5_of_hearts.png",
    },
    {
        cardValue: 5,
        face: "img/cards/5_of_spades.png",
    },
    {
        cardValue: 5,
        face: "img/cards/5_of_diamonds.png",
    },
    {
        cardValue: 6,
        face: "img/cards/6_of_clubs.png",
    },
    {
        cardValue: 6,
        face: "img/cards/6_of_hearts.png",
    },
    {
        cardValue: 6,
        face: "img/cards/6_of_spades.png",
    },
    {
        cardValue: 6,
        face: "img/cards/6_of_diamonds.png",
    },
    {
        cardValue: 7,
        face: "img/cards/7_of_clubs.png",
    },
    {
        cardValue: 7,
        face: "img/cards/7_of_hearts.png",
    },
    {
        cardValue: 7,
        face: "img/cards/7_of_spades.png",
    },
    {
        cardValue: 7,
        face: "img/cards/7_of_diamonds.png",
    },
    {
        cardValue: 8,
        face: "img/cards/8_of_clubs.png",
    },
    {
        cardValue: 8,
        face: "img/cards/8_of_hearts.png",
    },
    {
        cardValue: 8,
        face: "img/cards/8_of_spades.png",
    },
    {
        cardValue: 8,
        face: "img/cards/8_of_diamonds.png",
    },
    {
        cardValue: 9,
        face: "img/cards/9_of_clubs.png",
    },
    {
        cardValue: 9,
        face: "img/cards/9_of_hearts.png",
    },
    {
        cardValue: 9,
        face: "img/cards/9_of_spades.png",
    },
    {
        cardValue: 9,
        face: "img/cards/9_of_diamonds.png",
    },
    {
        cardValue: 10,
        face: "img/cards/10_of_clubs.png",
    },
    {
        cardValue: 10,
        face: "img/cards/10_of_hearts.png",
    },
    {
        cardValue: 10,
        face: "img/cards/10_of_spades.png",
    },
    {
        cardValue: 10,
        face: "img/cards/10_of_diamonds.png",
    },
    {
        cardValue: 10,
        face: "img/cards/jack_of_clubs.png",
    },
    {
        cardValue: 10,
        face: "img/cards/jack_of_hearts.png",
    },
    {
        cardValue: 10,
        face: "img/cards/jack_of_spades.png",
    },
    {
        cardValue: 10,
        face: "img/cards/jack_of_diamonds.png",
    },
    {
        cardValue: 10,
        face: "img/cards/queen_of_clubs.png",
    },
    {
        cardValue: 10,
        face: "img/cards/queen_of_hearts.png",
    },
    {
        cardValue: 10,
        face: "img/cards/queen_of_spades.png",
    },
    {
        cardValue: 10,
        face: "img/cards/queen_of_diamonds.png",
    },
    {
        cardValue: 10,
        face: "img/cards/king_of_clubs.png",
    },
    {
        cardValue: 10,
        face: "img/cards/king_of_hearts.png",
    },
    {
        cardValue: 10,
        face: "img/cards/king_of_spades.png",
    },
    {
        cardValue: 10,
        face: "img/cards/king_of_diamonds.png",
    },
    {
        cardValue: aceValue(),
        face: "img/cards/ace_of_clubs.png",
    },
    {
        cardValue: aceValue(),
        face: "img/cards/ace_of_hearts.png",
    },
    {
        cardValue: aceValue(),
        face: "img/cards/ace_of_spades.png",
    },
    {
        cardValue: aceValue(),
        face: "img/cards/ace_of_diamonds.png",
    },
]
//Sets value of ACE
function aceValue() {
    if (playerTotal < 11) {
        return 11
    } else {
        return 1
    }
}
//Deals the cards to player and dealer
function dealCards() {

    var card = []
    for (i = 0; i < 4; i++) {
        var c = Math.floor(Math.random() * cards.length)
        if (i % 2 === 0) {
            playerCards.push(cards[c])
            playerTotal += Number(cards[c].cardValue)
        } else {
            dealerCards.push(cards[c])
            dealerTotal += Number(cards[c].cardValue)
        }
        inPlay.push(cards[c])
        // console.log(inPlay)
        cards.splice(c, 1)
    }
    renderCards()
}

//Displays cards on page
function renderCards() {
    //creates players cards
    for (i = 0; i < playerCards.length; i++) {
        var img = document.createElement("img")
        img.src = playerCards[i].face
        playerCardsDom.appendChild(img)
        playerCardsDom.className = "animated fadeInLeft"
    }
    //creates dealers cards
    var img = document.createElement("img")
    img.src = dealerCards[1].face
    dealerCardsDom.appendChild(img);
    var img = document.createElement("img")
    img.src = "img/cards/card_back.png"
    dealerCardsDom.appendChild(img);
    dealerCardsDom.className = "animated fadeInRight"
    //hides controls

    startGame.style.display = "none";
    inGame.style.display = "block";
    console.log('player: ' + playerTotal)
    console.log('dealer: ' + dealerTotal)
}
//This is the hit button
function addCard() {
    //Generates a random card from the array and adds it to your hand
    var c = Math.floor(Math.random() * cards.length)
    playerCards.push(cards[c])
    playerTotal += cards[c].cardValue
    //Renders new card to DOM
    var img = document.createElement("img")
    img.src = playerCards[playerCards.length - 1].face
    playerCardsDom.appendChild(img)
    //Removes it from deck and stores it
    inPlay.push(cards[c])
    cards.splice(c, 1)
    console.log('player: ' + playerTotal)
    console.log('dealer: ' + dealerTotal)
    //Checks to see if play wins automaticaly wins, or loses
    if (playerTotal > 21) {
        inGame.style.display = "none"
        startGame.style.display = "none"
        loser.style.display = "block"
        domReset.style.display = "block"
    } else if (playerTotal === 21) {
        inGame.style.display = "none"
        startGame.style.display = "none"
        winner.style.display = "block"
        domReset.style.display = "block"
    }
}
//Dealer Turn runs when Stay is clicked
function dealerTurn() {
    var back = document.querySelectorAll('img')
    back[1].src = dealerCards[0].face
    while (dealerTotal < 19 && dealerTotal < playerTotal) {
        //Generates random card to be added to dealers hand
        var c = Math.floor(Math.random() * cards.length)
        dealerCards.push(cards[c])
        dealerTotal += cards[c].cardValue
        //Renders the card to the DOM
        var img = document.createElement("img")
        img.src = dealerCards[dealerCards.length - 1].face
        dealerCardsDom.appendChild(img)
        //takes card out of deck and stores it
        inPlay.push(cards[c])
        cards.splice(c, 1)
        //Checks to see if the dealer wins or loses 
    }
    if (dealerTotal == playerTotal) {
        inGame.style.display = "none"
        startGame.style.display = "none"
        tie.style.display = "block"
        domReset.style.display = "block"
    } else if (dealerTotal > 21) {
        inGame.style.display = "none"
        startGame.style.display = "none"
        winner.style.display = "block"
        domReset.style.display = "block"
    } else if (dealerTotal < playerTotal) {
        inGame.style.display = "none"
        startGame.style.display = "none"
        winner.style.display = "block"
        domReset.style.display = "block"
    } else {
        inGame.style.display = "none"
        startGame.style.display = "none"
        loser.style.display = "block"
        domReset.style.display = "block"
    }

}
//Play again button
function playAgain() {
    //puts cards back in deck
    for (i = 0; i < inPlay.length; i++) {
        cards.push(inPlay[i]);
    }
    //resets the DOM to blank screen
    startGame.style.display = "block"
    dealerCardsDom.innerHTML = ""
    playerCardsDom.innerHTML = ""
    domReset.style.display = "none"
    winner.style.display = "none"
    loser.style.display = "none"
    tie.style.display = "none"
    //sets all variables back to their original value of nothing
    playerCards = []
    dealerCards = []
    inPlay = []
    playerTotal = 0
    dealerTotal = 0
}