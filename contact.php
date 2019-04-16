<!-- Assimilate Game Website -->
<!-- Single Page Application -->
<!-- Stephen Shiao (ss2sc) and Vivien Chen (vc2cw) -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Assimilate</title>
    <meta name="authors" content="Made by Stephen Shiao and Vivien Chen">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- External libraries -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"/>
    <!-- hamburger -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


    <!-- Our own sheets -->
    <link rel="stylesheet" type="text/css" media="screen" href="styles/main.css" />
    <script type="text/javascript" src="Assimilate/scripts/scripts.js"></script>
</head>
<body>
    <!-- A grey horizontal navbar that becomes vertical on small screens -->
    <nav class="navbar navbar-expand-lg">
        <div class=" navbar-collapse">
            <div class="topnav" id="myTopnav">
                <a href="assimilate.php" class="active"><b>ASSIMILATE</b></a>
            </div>
        </div>
    </nav>

    <div id = "contact"> 
        <h1>CONTACT US</h1>
        <h4>Want to make Assimilate better? <br> Shoot Stephen and Vivien an email if you have any comments, questions, or feedback: <br></h4>
        <form name="contactForm" action="mailto:yystoaix@gmail.com" onsubmit="return validateForm()" method="post">
            <div class="form-group">
                <br>Name:<br>
                <input type="text" id="name"><br>
                <span class="error" id="name-note"></span>
            </div>
            <div class="form-group">
                Your E-mail:<br>
                <input type="text" id="mail"><br>
                <span class="error" id="mail-note"></span>
            </div>
            <div class="form-group">
                Comments/Questions/Feedback:<br>
                <textarea name="comments" id="comments" cols="98" rows="10"></textarea><br>
                <span class="error" id="comments-note"></span>
            </div>
            <input type="submit" value="Send">
            <input type="reset" value="Reset">
        </form>
    </div>
    
    <div id="centerscreen" class="container center-screen" style="display:none; height: 400px; width: 300px;">
        <!-- How to play View -->
        <div id="howtoplay" style="display:none;">
            <h2 style="text-align: center;">How to play</h2>
            <br>
            <p>Click on a square in the grid. This will flip the colors of all adjacent squares.</p>
            <p>The goal of the game is to make all the squares in the grid the same color!</p>
        </div>

        <!-- Leaderboard View -->
        <div id="leaderboard" style="display:none;">
            <h2 style="text-align: center;">Leaderboard</h2>
        </div>
    </div>
    <div class="bottombar" id="myBottom">
        <a href="about.html">About</a>
        <a href="contact.php">Contact Us</a>
            <!-- <a href="javascript:void(0);" class="icon" onclick="bottomFunction()">&#9776;</a> -->
    </div>
</body>
</html>