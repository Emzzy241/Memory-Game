
// importing my css
import './css/styles.css';

"use strict";
// the use strict means my code should be performed under strict conditions
// it helped me to get rid of some annoying errors in vanilla like: elem.style telling me style is undefined
// in this case the strict condition helped me get rid of the src undefined error

// importing all images

import jsBadgeImage from "./assets/images/js-badge.svg"
import vueImage from "./assets/images/vue.svg";
import aureliaImage from "./assets/images/aurelia.svg";
import angularImage from "./assets/images/angular.svg";
import emberImage from "./assets/images/ember.svg";
import backboneImage from "./assets/images/backbone.svg";
import reactImage from "./assets/images/react.svg";




let myJsBadge = document.querySelectorAll(".back-face");
let myReactImg = document.querySelectorAll(".react");
let myAureliaImg = document.querySelectorAll(".aurellia");
let myVueImg = document.querySelectorAll(".vue");
let myAngularImg = document.querySelectorAll(".angular");
let myEmberImg = document.querySelectorAll(".ember");
let myBackboneImg = document.querySelectorAll(".backbone");
// using all of my images imported now


const myImg = new Image();
myImg.src = myJsBadge;

myJsBadge.append(myImg);

// myJsBadge.src = jsBadgeImage;
// myAureliaImg.src = aureliaImage;
// myVueImg.src = vueImage;
// myAngularImg.src = angularImage;
// myEmberImg .src = emberImage;
// myBackboneImg.src = backboneImage;
// myReactImg.src = reactImage;

// element.appendChild(m)

console.log(thisJsBadge);
console.log(thisReact);



// storing a list of all memory-card elements and storing in a constant variable

const cards = document.querySelectorAll(".memory-card");

// when player clicks card we need to know if its first card or 2nd card so we can perform the matching logic

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// the lockBoard is to only execute the flipCard function  as a return statement when it is true.... That is the variable lockBoard
// will execute our flipCard() function when its true


// we introduced the lockBoard variable because a little bug in our application: the bug is: some users might be really fast 
// and click on three more cards before the setTimeOut(which is 1500 milliseconds) gets executed and that will definitely break our application
// to avoid our application from breaking I made the lockBoard variable 

// if its a match then we do not want to lock the board because we know both cards will stay open but
// in case its not a match we are going to lock the board and only unlock it after the cards have been flipped



// the 2nd bug in application is if user double clicks on one card, that way that one card gets opened the entire game
// because our clickEvent has made javscript see a double click of one card as two different things, we don't want that 
// we need a conditional to help kill that bug from our code
// the conditional we added in the flipCard function was to make JavaScript see a double click as nothing... that solves our bug
// because now Javascript will compare a card that's been double clicked or even triple clicked to another card
//thereby making every card have its own clickEvent and not one card taking 2 click events




// THE ALGORITHM FOR MY APPLICATION ---- OR THE MATCHING ALGORITHM
function flipCard() {
    // the lockBoard statement if its a match
    // the return keyword just stops the function from being executed
    if (lockBoard) return;

    // the 2nd bug fixer
    if (this === firstCard) return; /* if the 2nd click= the first click i.e a double click, do not run the click event listener function but only run it after another card is clicked */

    // the firstCard variable is still unset at the beginning so we have the power now to stop it from running so it doesn't see 1 card's
    // double click as a 2 card click

    // toggling the flip class we created in styles.css
    // to perform the matching logic we need we changed the toggle to add, i.e whenever the image has been flipped, it should not 
    // change back when user taps again rather it should only do so when I tell it to

    this.classList.add("flip");

    if (!hasFlippedCard) {
        // how we derived the function to determine if its player's first time cliking card or 2nd time we run a branch
        // if hasFlippedCard = false then we know player has not flipped card(!hasFlippedCard) we also know this is the first time player clicks card
        // first click
        hasFlippedCard = true;
        firstCard = this;
        // the this keyword here is the element that's firing the click event listener below

        /*   to stop game from running so other branch gets executed... to use this the "else" needs to be deleted but i didn't use it I used if and else */
        return;
        // console.log({hasFlippedCard, firstCard}); --- checking to see if the first click of my matching algorithm works
    }

    // second click
    // hasFlippedCard = false;
    secondCard = this;

    console.log({ firstCard, secondCard }); /*--- checking to see if the first click of my matching algorithm works */

    // using the html data- attribute I want to console.log each data-attribute

    console.log(firstCard.dataset.framework);
    console.log(secondCard.dataset.framework);

    // after testing out the html data-attribute, I can now get my desired framework in the console, now its time to work with 
    // the amazing maching logic I made

    // calling the check for card match function
    checkForMatch();

}




// after knowing the 2 cards user clicked, I need a new branch to  if dataset.framework 1 = dataset.framework 2 if they are, 
// I need to remove the click event listener from those 2 cards to prevent them from being clicked again... But if its not
// I need to make my branch turn those 2 cards to the previous states the state before they were clicked



// console.log(this); -- the this here represents the element that fired the click event


// Now we have both cards, we need to check if both cards match so we can determine if those 2 cards should stay open
// to determine this I used a very handy attribute in html called the data-NAMEITWHATEVERYOUWANTTONAMEIT
// with the data- attribute you can add to your element any kind of information you want
// I would be using data-framework because all of the pictures I have are frameworks... aurelia, react, vue, ember, angular, and backbone are all framworks
// the matching logic algorithm made is so great in the sense that it gives us the two data-frameworks user clicked on after the second click


// the checkForMatch function is just to refactor our code, we can definitely put it in the first else branch


function checkForMatch() {

    // THE ES6 way of writing if statements(in one line) ---using a Tenary operator
    // the Tenary operator has 3 blocks

    // 1st block in a tenary operator... the first block is where we place our condition
    // 2nd block in a tenary operator is the statement to be executed if the condition evaluates to true
    // 3rd block in a tenary operator is the statement to be executed if the condition evaluates to false 

    // 1st block in a tenary operator
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    // 2nd block in a tenary operator is before the colon( : )

    isMatch ? disableCards() : unflipCards();

    // 3rd block in a tenary operator is after the colon( : )

    // thanks to our Tenary operator we are able to perform and if--else statement in just one line 



    // new branch to check if cards match
    /*
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        // first condition if its a match remove condition from both cards

        disableCards();
        console.log("Yay :) both cards match");
    }
    else {

        unflipCards();
        console.log("Awwwwwwww :( both cards don't match");
    }
    */

}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    // resetting the board after cards have been disabled
    resetBoard();
}

function unflipCards() {

    // the lockBoard statement if its not a match to lock the board first and then later on unlock the board after the 
    // 1500 milliseconds has been passed
    lockBoard = true;

    // if its not a match then we unflip both cards before user flips 3rd card
    // but when I did this at first, JavaScript didn't let me even see the face of the 2nd card I picked if it was wrong or not
    // I know JavaScript is faster to grasp that both cards don't match but I need a timer that will delay a bit before it executes the turning of both 
    // cards if they don't match.... ALL this is just to make a great user experience for my application

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");


        // lockBoard = false;
        resetBoard();
    }, 1500); // so that is a timeOut with a 1500 milliseconds delay to make user confirm that both cards don't match
    // NOTE; for cards that match, this statement won't be executed because its in the else branch... the resetBoard function resets all my values for me so I can easily just call it here instead of setting lockBoard to false

}

// the resetBoard function resets all my values for me
function resetBoard() {
    // // using ES6 destructuring structuring assignment to set my variables to false
    // [hasFlippedCard, lockBoard] = [false, false];
    // [firstCard, secondCard] = [null, null];

    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;

}

// to make application more challenging lets write a function for shuffling of cards
// we will be using the flex order property which defaults each elements to 0 at the beginning(the order property needs an integer not a float so we apply Math.floor or Math.trunc)
// now to coin a shuffle function for this we generate a random number from 0 - 11 (excluding 1 becuse of the Math.random() we're using) and assign those numbers to our cards
// so our cards gets displayed randomly accross the board
// we are multiplying that number by 12 since we want a random number from 0 - 12

// the imediately invoked function expression that gets called straight away  before player starts playing
// the function gets executed right after its definition
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        // now that we have our random number lets apply it to the flex order property

        card.style.order = randomPos;
    });
})();

// shuffle();



// window.onload(shuffle())

// instead of having to call our function which is stressful, lets wrap our function into parenthesis() -- this will make it 
// an immediately invoked function or IIFE which stands for an Immediately Invoked function expression





// for my flipCard matching logic, if hasFlippedCard is set to false it means player is clicking at the first card i.e player clicking for the first time
// if hasFlippedCard is set to true it means player is clicking at the second card i.e player clicking card for the 2nd time


// looping through the list of cards in our variable to add event listener when each card stored in there is clicked
// also we are executing a function flipCard whenever a click event is fired

cards.forEach(card => card.addEventListener("click", flipCard));
