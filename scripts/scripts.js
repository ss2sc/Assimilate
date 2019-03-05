function openGame() {
    document.getElementById("home").style.display = "none";
    document.getElementById("play").style.display = "block";
}

function openInstructions() {
    document.getElementById("leaderboard").style.display = "none";
    document.getElementById("centerscreen").style.display = "block";
    document.getElementById("howtoplay").style.display = "block";
}

function openLeaderboard() {
    document.getElementById("howtoplay").style.display = "none";
    document.getElementById("centerscreen").style.display = "block";
    document.getElementById("leaderboard").style.display = "block";
}