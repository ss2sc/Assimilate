var clicks = 0;

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
// Check for wins
var win = function() {
    var spots = document.getElementsByClassName("box");
    var i;
    for (i = 0; i < spots.length - 1; i++) {
        if (spots[i].style.backgroundColor !== spots[i+1].style.backgroundColor) {
            return false;
        }
    }
    return true;
}

function changeSquares(numBox) {
    clicks++;
    if ((numBox + 4) % 5 != 4) {  // Check left flip
        flip(numBox - 1);
    }
    if ((numBox + 6) % 5 != 0) {  // Check right flip
        flip(numBox + 1);
    }
    if (numBox - 5 >= 0) {  // Check up flip
        flip(numBox - 5);
    }
    if (numBox + 5 <= 24) {  // Check down flip
        flip(numBox + 5);
    }
    if (win()) {
        clicks = 0;
        document.getElementById("clicks").textContent = "You Win!";
        // Display win message for 1.5 seconds and then go back to clicks taken
        setTimeout(function(){
            document.getElementById("clicks").textContent = "Clicks Taken: " + clicks;
        }, 1500);
    } else {
        document.getElementById("clicks").textContent = "Clicks Taken: " + clicks;
    }
}

/* Helper function for gameplay */
function flip(numBox) {
    var color1 = "rgb(255, 255, 255)";
    var color2 = "rgb(0, 0, 0)";
    var spots = document.getElementsByClassName("box");
    if(spots[numBox].style.backgroundColor === color1) {
        spots[numBox].style.backgroundColor = color2;
    }
    else {
        spots[numBox].style.backgroundColor = color1;
    }
}

// function bottomFunction() {
// var y = document.getElementById("myBottom");
// if (y.className === "bottombar") {
//     y.className += " bottomresponsive";
// } else {
//     y.className = "bottombar";
// }
