function openGame() {
    document.getElementById("home").style.display = "none";
    document.getElementById("play").style.display = "block";
}

function openInstructions() {
    if( document.getElementById("howtoplay").style.display == "block" ) {
        document.getElementById("centerscreen").style.display = "none";
        document.getElementById("howtoplay").style.display = "none";
    }
    else {
        document.getElementById("leaderboard").style.display = "none";
        document.getElementById("centerscreen").style.display = "block";
        document.getElementById("howtoplay").style.display = "block";
    }
}

function openLeaderboard() {
    if( document.getElementById("leaderboard").style.display == "block" ) {
        document.getElementById("centerscreen").style.display = "none";
        document.getElementById("leaderboard").style.display = "none";
    }
    else {
        document.getElementById("howtoplay").style.display = "none";
        document.getElementById("centerscreen").style.display = "block";
        document.getElementById("leaderboard").style.display = "block";
    }
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

// function bottomFunction() {
// var y = document.getElementById("myBottom");
// if (y.className === "bottombar") {
//     y.className += " bottomresponsive";
// } else {
//     y.className = "bottombar";
// }
