// Global variables
var myCells;


$(document).ready(startHere);

function startHere() {
    // Restart the array

    myCells = {
    "11" : "*",
    "12" : "*",
    "13" : "*",
    "21" : "*",
    "22" : "*",
    "23" : "*",
    "31" : "*",
    "32" : "*",
    "33" : "*"
    };


    $('.cells').click(cellClicked);

}

function cellClicked() {
    var whichCell = $(this).attr('data-button');
    console.log(whichCell);
}
