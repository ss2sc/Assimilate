function openGame() {
    document.getElementById("home").display = "none";
    //document.getElementById("play").display = "block";
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
