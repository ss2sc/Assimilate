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
    document.getElementById("howtoplay").style.display = "none";
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("closeButton").style.display = "none";
}

function closeSubmit(){
    document.getElementById("submitscreen").style.display = "none";
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
        //call php function to INSERT
        var newRecord = (a, b) => a < b;
        if (newRecord(clicks, record)) {
            record = clicks;
            document.getElementById("clicks").textContent = "New Record of " + record + "!";
            openSubmit();
        } 
        // else {
        //     document.getElementById("clicks").textContent = "You Win!";
        // }

        clicks = 0;
        // Display win message for 1.5 seconds and then go back to number of clicks and reset the puzzle
        setTimeout(function(){
            document.getElementById("clicks").textContent = "Clicks Taken: " + clicks;
            var spots = document.getElementsByClassName("box");
            // Hard-coded reset board for now
            // Row 1
            spots[0].style.backgroundColor = "rgb(255, 255, 255)";
            spots[1].style.backgroundColor = "rgb(0, 0, 0)";
            spots[2].style.backgroundColor = "rgb(0, 0, 0)";
            spots[3].style.backgroundColor = "rgb(0, 0, 0)";
            spots[4].style.backgroundColor = "rgb(255, 255, 255)";

            // Row 2
            spots[5].style.backgroundColor = "rgb(0, 0, 0)";
            spots[6].style.backgroundColor = "rgb(0, 0, 0)";
            spots[7].style.backgroundColor = "rgb(255, 255, 255)";
            spots[8].style.backgroundColor = "rgb(0, 0, 0)";
            spots[9].style.backgroundColor = "rgb(0, 0, 0)";

            // Row 3
            spots[10].style.backgroundColor = "rgb(255, 255, 255)";
            spots[11].style.backgroundColor = "rgb(255, 255, 255)";
            spots[12].style.backgroundColor = "rgb(255, 255, 255)";
            spots[13].style.backgroundColor = "rgb(255, 255, 255)";
            spots[14].style.backgroundColor = "rgb(255, 255, 255)";

            // Row 4
            spots[15].style.backgroundColor = "rgb(0, 0, 0)";
            spots[16].style.backgroundColor = "rgb(0, 0, 0)";
            spots[17].style.backgroundColor = "rgb(255, 255, 255)";
            spots[18].style.backgroundColor = "rgb(0, 0, 0)";
            spots[19].style.backgroundColor = "rgb(0, 0, 0)";

            // Row 5
            spots[20].style.backgroundColor = "rgb(255, 255, 255)";
            spots[21].style.backgroundColor = "rgb(0, 0, 0)";
            spots[22].style.backgroundColor = "rgb(0, 0, 0)";
            spots[23].style.backgroundColor = "rgb(0, 0, 0)";
            spots[24].style.backgroundColor = "rgb(255, 255, 255)";
        }, 2500);
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


/* Validating form data for Contact Page */; 
function validateForm(){ 
    var name = document.forms["contactForm"]["name"].value; 
    var email = document.forms["contactForm"]["mail"].value; 
    var comments = document.forms["contactForm"]["comments"].value; 
    var validFormat = true;
    if (name == ''){    // check if appropriate data are entered
        document.getElementById("name").focus(); 
        document.getElementById("name-note").innerHTML = "Please enter a name"; 
        validFormat = false; 
    }
    else {
        document.getElementById("name-note").innerHTML = ""; 
    }
    if (email === ''){    // check if appropriate data are entered
        //alert("email");
        if(validFormat) // Have it focus on the first invalid textfield
            document.getElementById("mail").focus(); 
        document.getElementById("mail-note").innerHTML = "Please enter your email"; 
        validFormat = false; 
    } 
    else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        //alert("email"); 
        if(validFormat) // Have it focus on the first invalid textfield
            document.getElementById("mail").focus(); 
        document.getElementById("mail-note").innerHTML = "Please enter a valid email that contains @, doesn't have double dots and doesn't start with \".\""; 
        validFormat = false; 
    }
    else {
        document.getElementById("mail-note").innerHTML = "";
    }
    if (comments === ''){    // check if appropriate data are entered 
        //alert("comments");
        if(validFormat) // Have it focus on the first invalid textfield
            document.getElementById("comments").focus(); 
        document.getElementById("comments-note").innerHTML = "Please enter a comment/question"; 
        validFormat = false; 
    }
    else {
        document.getElementById("comments-note").innerHTML = "";
    }
    return validFormat; 
} 
