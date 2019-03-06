function openGame() {
    document.getElementById("home").style.display = "none";
    document.getElementById("play").style.display = "block";
}

function openInstructions() {
    if( document.getElementById("howtoplay").style.display == "block" ) {
        closeCenter();
    }
    else {
        document.getElementById("leaderboard").style.display = "none";
        document.getElementById("closeButton").style.display = "block";
        document.getElementById("centerscreen").style.display = "block";
        document.getElementById("howtoplay").style.display = "block";
    }
}

function openLeaderboard() {
    if( document.getElementById("leaderboard").style.display == "block" ) {
        closeCenter();
    }
    else {
        document.getElementById("howtoplay").style.display = "none";
        document.getElementById("closeButton").style.display = "block";
        document.getElementById("centerscreen").style.display = "block";
        document.getElementById("leaderboard").style.display = "block";
    }
}

function closeCenter() {  // Make all center views invisible
    document.getElementById("centerscreen").style.display = "none";
    document.getElementById("howtoplay").style.display = "none";
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("closeButton").style.display = "none";
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

/* Gameplay */
function changeSquares(numBox) {
    if ((numBox + 4) % 5 != 4) {  // Check left movement
        flip(numBox - 1);
    }
    if ((numBox + 6) % 5 != 0) {  // Check right movement
        flip(numBox + 1);
    }
    if (numBox - 5 >= 0) {  // Check up movement
        flip(numBox - 5);
    }
    if (numBox + 5 <= 24) {  // Check down movement
        flip(numBox + 5);
    }
}

/* Helper function for gameplay */
function flip(numBox) {
    var color1 = "white";
    var color2 = "black";
    var spots = document.getElementsByClassName("box");
    if(spots[numBox].style.backgroundColor == color2) {
        spots[numBox].style.backgroundColor = color1;
    }
    else {
        spots[numBox].style.backgroundColor = color2;
    }
}

// function bottomFunction() {
// var y = document.getElementById("myBottom");
// if (y.className === "bottombar") {
//     y.className += " bottomresponsive";
// } else {
//     y.className = "bottombar";
// }
