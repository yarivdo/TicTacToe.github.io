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
    "11" : " * ",
    "12" : " * ",
    "13" : " * ",
    "21" : " * ",
    "22" : " * ",
    "23" : " * ",
    "31" : " * ",
    "32" : " * ",
    "33" : " * "
    };


    //This sets up the cells to be reactive to clicks
    $('.cells').click(cellClicked);

    //Populate the table
    populateTable();
    $('#myTurn').html("It is the <b>X<b> turn to play");





}

function cellClicked() {
    var whichCell = $(this).attr('data-button');

    if(turns == "X") {
        myCells[whichCell] = "X";
        turns = "O";
        $('#myTurn').html("It is the <b>O<b> turn to play");
        populateTable();
    } else {
        myCells[whichCell] = "O";
        turns = "X";
        $('#myTurn').html("It is the <b>X<b> turn to play");
        populateTable();
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
