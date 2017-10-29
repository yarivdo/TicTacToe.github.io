// Global variables
var myCells;
var turns;
var numberOfRounds = 0;


$(document).ready(startHere);

function startHere() {

    //Set the turn
    turns = "X";

    // Restart the array
    myCells = {
        "11": "",
        "12": "",
        "13": "",
        "21": "",
        "22": "",
        "23": "",
        "31": "",
        "32": "",
        "33": ""
    };


    //This sets up the cells to be reactive to clicks
    $('.cells').click(cellClicked);

    //Populate the table
    populateTable();
    $('#myTurn').html("It is the <b>X<b> turn to play");

}

function cellClicked() {
    var whichCell = $(this).attr('data-button');

    if (turns == "X") {
        myCells[whichCell] = "X";
        turns = "O";
        $('#myTurn').html("It is the <b>O<b> turn to play");
        populateTable();
        checkGame();
    } else {
        myCells[whichCell] = "O";
        turns = "X";
        $('#myTurn').html("It is the <b>X<b> turn to play");
        populateTable();
        checkGame();
    }

    numberOfRounds += 1;
    if (numberOfRounds == 9) {
        alert("Game is over");
    }
}

function populateTable() {
    $('#11').html(myCells[11]);
    $('#12').html(myCells[12]);
    $('#13').html(myCells[13]);
    $('#21').html(myCells[21]);
    $('#22').html(myCells[22]);
    $('#23').html(myCells[23]);
    $('#31').html(myCells[31]);
    $('#32').html(myCells[32]);
    $('#33').html(myCells[33]);
}

// This function is the logic behind checking if there is a combination of 3 Xs or 3 Os
function checkGame() {
    //The trick I'm using is that int value can be converted to String in JS
    /*
    The principle I am working on is that the cells are now marked as following:
    startingCell+0      startingCell+1   startingCell+2
    startingCell+10     startingCell+11  startingCell+12
    startingCell +20    startingCell+21  startingCell+22
    */
    var startingCell = 11;

    checkRow(11);
    checkRow(21);
    checkRow(31);

    checkColumn(11);
    checkColumn(12);
    checkColumn(13);

    checkDiagonal(11);
    checkDiagonal2(31);





    /*
    if (myCells[startingCell] != "") {
            if (myCells[startingCell] == myCells[startingCell + 1] && myCells[startingCell + 1] == myCells[startingCell + 2]) {
                console.log("Checked for Row #1");
            } else if (myCells[startingCell] == myCells[startingCell + 11] && myCells[startingCell + 11] == myCells[startingCell + 22]) {
                console.log("checked for diagonal from 11 to 33");
            } else if (myCells[startingCell] == myCells[startingCell + 10] && myCells[startingCell + 10] == myCells[startingCell + 20]) {
                console.log("checked for column #1");
            }
        }
    */



}

function checkRow(startingCell) {

    if (myCells[startingCell] != "") {
        if (myCells[startingCell] == myCells[startingCell + 1] && myCells[startingCell + 1] == myCells[startingCell + 2]) {
            console.log("Checked for Row #1");
        }
    }
}

function checkColumn(startingCell) {
    if (myCells[startingCell] != "") {
        if (myCells[startingCell] == myCells[startingCell + 10] && myCells[startingCell + 10] == myCells[startingCell + 20]) {
            console.log("checked for column #1");
        }
    }
}

function checkDiagonal(startingCell) {
    if (myCells[startingCell] != "") {
        if (myCells[startingCell] == myCells[startingCell + 11] && myCells[startingCell + 11] == myCells[startingCell + 22]) {
            console.log("checked for diagonal from 11 to 33");
        }
    }
}

function checkDiagonal2(startingCell) {
    if (myCells[startingCell] != "") {
        console.log(myCells[startingCell]);
         console.log(myCells[startingCell-9]);
         console.log(myCells[startingCell-18]);
        if (myCells[startingCell] == myCells[startingCell - 9] && myCells[startingCell] - 9 == myCells[startingCell - 18]) {
            console.log('checked for diagonal from 31 to 13');
        }
    }
}
