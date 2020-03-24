// Initializing the ready state.
document.addEventListener('DOMContentLoaded', onReady);

//here we add to check the player who is playing
var player = document.querySelector('#player');

// initialize rows
var rows = 6;
var cols = 7;

// Players flag
var playerOneFlag = true;
var playerTwoFlag = false;


// Store the result
playerOneList = [];
playerTwoList = [];


// Creating two diminsional array/list
for (var i = 0; i < rows; i++) {
    playerOneList.push([]);
    playerTwoList.push([]);
}



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
    var playerOne = prompt("Enter player one name: ");
    var playerOneColor = prompt("Enter player one color: ");

    var playerTwo = prompt("Enter player two name: ");
    var playerTwoColor = prompt("Enter player two color: ");

    //Check if there is any duplicate value
    var check = checkNameAndColors(playerOne, playerOneColor, playerTwo, playerTwoColor);
    check ? alert("You are ready to start the game, good lcuk") : onReady();

    //Grabing all the circles in the game
    var circles = document.querySelectorAll('circle');

    for (var i = 0; i < circles.length; i++) {
        circles[i].addEventListener('click', function() {
            if (playerOneFlag) {
                playerOneMove(this);
                findWinner(playerOneList, playerTwoList, { name: "Player1" });
            } else if (playerTwoFlag) {
                playerTwoMove(this);
                findWinner(playerOneList, playerTwoList, { name: "Player2" });
            }
        })
    }

    //findcircles(playerOneList, playerTwoList);
}

function playerOneMove(circle) {
    player.textContent = "Player 1 => Red";
    circle.setAttribute("fill", 'red');
    row = circle.getAttribute("row");
    col = circle.getAttribute("col");
    playerOneList[row - 1].push(Number(col));
    console.log("Added successfully to List 1");
    playerTwoFlag = true;
    playerOneFlag = false;

}


function playerTwoMove(circle) {
    player.textContent = "Player 2 => Green";
    circle.setAttribute('fill', 'green');
    row = circle.getAttribute("row");
    col = circle.getAttribute("col");
    console.log("Row: " + row + " Col: " + col);
    playerTwoList[row - 1].push(Number(col));
    console.log("Added successfully to List 2");
    playerTwoFlag = false;
    playerOneFlag = true;
}

var count1 = 0;
var count2 = 0;

function findWinner(list1, list2, opt) {
    if (opt['name'] === "Player1") {
        console.log("Player 1");
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < list1[i].length; j++) {
                if (list1[i].length > 1) {
                    if (list1[i][j] === list1[i][j + 1] - 1) {
                        console.log("entered Rows List 1");
                        count1++;
                    } else if (list1[i][j] === list1[i][j]) {
                        console.log("entered Cols List 1");
                    }
                }
            }
        }
    } else {
        console.log("Player 2");
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < list1[i].length; j++) {
                if (list2[i].length > 1) {
                    if (list2[i][j] === list2[i][j + 1] - 1) {
                        console.log("entered List 1");
                        count2++;
                    }
                }
            }
        }
    }
    if (count1 >= 4) {
        alert("Player 1 Wins");
        player.textContent = "Player 1 wins, to start again please refresh the page :)"
    } else if (count2 >= 4) {
        alert("Player 2 wins!");
        player.textContent = "Player 2 wins, to start again please refresh the page :)"
    }
    console.log("Count 1: " + count1);
    console.log("Count 2: " + count2);
}