/* Made by Stephen Shiao (ss2sc) and Vivien Chen (vc2cw) */
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

//
function openSubmit(){
    document.getElementById("centersubmit").style.display = "block";
    document.getElementById("submitscreen").style.display = "block";
    document.getElementById("closeButton").style.display = "block";
}

function closeCenter() {  // Make all center views invisible
    document.getElementById("centerscreen").style.display = "none";
    document.getElementById("centersubmit").style.display = "none";
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
var clicks = 0;
var record = 100;

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
        // call php function to INSERT
        var newRecord = (a, b) => a < b;
        if (newRecord(clicks, record)) {
            record = clicks;
            document.getElementById("clicks").textContent = "New Record of " + record + "!";
            document.getElementsByName("score")[0].value = clicks;
            openSubmit(); //open submission screen
        } 
        else {
            document.getElementById("clicks").textContent = "You Win!";
        }

        clicks = 0;
        // Display win message for 1.5 seconds and then go back to number of clicks and reset the puzzle
        setTimeout(function(){
            resetBoard();
        }, 2500);
    } else {
        document.getElementById("clicks").textContent = "Clicks Taken: " + clicks;
    }
}

function resetBoard() {
    clicks = 0;
    document.getElementById("clicks").textContent = "Clicks Taken: 0";
    var level = document.getElementById('level').innerHTML;
    level = level[level.length-1] - 1;
    changeLevel(level);    
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

function getClicks(){
    return document.getElementByName("score");
}

var xhr = GetXmlHttpObject();
xhr.open('GET', 'levels.xml', true);
xhr.send(null);
/* Change levels asychronously with ajax */
function changeLevel(level) {
    if (xhr == null) {
        alert("Your browser does not support XMLHTTP!");
        return;
    }
    if(xhr.status === 200) {
        var response = xhr.responseXML;
        var spots = document.getElementsByClassName("box");
        var levels = response.getElementsByTagName("level");
        for (var i = 0; i < 25; i++) {
            console.log(levels[level].childNodes[2*i+1].firstChild.nodeValue);
            spots[i].style.backgroundColor = levels[level].childNodes[2*i+1].firstChild.nodeValue;
        }
    }

    document.getElementById('level').innerHTML = "Level " + (level + 1);

    loadLeaderboard(level);
}

function loadLeaderboard(level) {
    var tablexhr = GetXmlHttpObject();
    tablexhr.open('GET', 'openTable.php?q='+level, true);
    tablexhr.send(null);
}

function GetXmlHttpObject()
{	
   if (window.XMLHttpRequest)
   {  // code for IE7+, Firefox, Chrome, Opera, Safari
      return new XMLHttpRequest();
   }
   if (window.ActiveXObject)
   { // code for IE6, IE5
     return new ActiveXObject ("Microsoft.XMLHTTP");
   }
   return null;
}