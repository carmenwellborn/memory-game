/*
 * Create a list that holds all of your cards
 */
//cards = ['diamond','paper-plane-o','anchor','bolt','cube','leaf','bicycle'];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
// shuffle(cards);
// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let openCard = new Array();

function addClass(cardSymbol) {
  cardSymbol.classList.toggle('open');
  cardSymbol.classList.toggle('show');
}

function listOfCards (cardSymbol) {
  openCard.push(cardSymbol);
  //const symbol = document.getElementsByTagName('i').innerHTML;
console.log(openCard);
//console.log(symbol);
}

/*
 * set up the event listener for a card. If a card is clicked:*/
document.addEventListener('click', function (evt) {
     if (evt.target.nodeName === 'LI') {
    //- display the card's symbol (put this functionality in another function that you call from this one)
    const cardSymbol=event.target;
     addClass(cardSymbol);
     listOfCards(cardSymbol);
     openCard.add("march");
      //if the list already has another card, check to see if the two cards match
     if (openCard.length===2){

       // if the cards do not match, remove the cards from the list and hide the card's symbol
       //(put this functionality in another function that you call from this one)

       if (openCard[0]!=openCard[1]) {
         //Remove the cards from the list
         openCard[0].classList.toggle('show');
         openCard[1].classList.toggle('show');
       }

      //if the cards do match, lock the cards in the open position
      //(put this functionality in another function that you call from this one)
       if (openCard[0]===openCard[1]){
         openCard[0].add("march");
         openCard[1].add("march");
         //Add class match
         /*myFunction();
          function myFunction() {
            var element = document.getElementByTagName("li");
            element.classList.add("match");
          }*/


       }

     }
   }
 });
/*
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  -
 *    +
 *    + *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
