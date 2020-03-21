// Initializing the ready state.
document.addEventListener('DOMContentLoaded', onReady);

//here we add to check the player who is playing
var player = document.querySelector('#player');

// Players flag
var playerOneFlag = true;
var playerTwoFlag = false;


// Store the result
playerOneList = [];
playerTwoList = [];


function checkNameAndColors(playerOne, playerOneColor, playeTwo, playerTwoColor) {
    if (playerOne === playeTwo) {
        return alert("Both names are the same please enter different names.");
    } else if (playerOneColor === playerTwoColor) {
        return alert("Both colors are the same please enter different colors.");
    } else {
        return true;
    }

}


function onReady() {
    //Start by gettiing the users info
    // var playerOne = prompt("Enter player one name: ");
    // var playerOneColor = prompt("Enter player one color: ");

    // var playerTwo = prompt("Enter player two name: ");
    // var playerTwoColor = prompt("Enter player two color: ");

    // Check if there is any duplicate value
    //var check = checkNameAndColors(playerOne, playerOneColor, playerTwo, playerTwoColor);
    //check ? alert("You are ready to start the game, good lcuk") : onReady();

    // Grabing all the circles in the game
    var circles = document.querySelectorAll('circle');

    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener('click', function() {
            if (playerOneFlag) {
                playerOne();
                playerTwoFlag = true;
                playerOneFlag = false;
            } else if (playerTwoFlag) {
                playerTwo();
                playerOneFlag = true;
                playerTwoFlag = false;
            }

        })
    }
}


function playerOne() {
    player.textContent = "Waleed => Red";
    this.setAttribute("fill", 'red');
    var playerOneCircleId = this.getAttribute("id");
    //console.log("Player 1: " + this.getAttribute("id"));
    playerOneList.push(playerOneCircleId);
}


function playerTwo() {
    player.textContent = "Salah => Green";
    this.setAttribute('fill', 'green');
    var playerTwoCircleId = this.getAttribute("id");
    playerTwoList.push(playerTwoCircleId);
}