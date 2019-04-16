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
    <script type="text/javascript" src="scripts/scripts.js"></script>
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
        <form name="contactForm" action="" method="post">
            <div class="form-group">
                <br>Name:<br>
                <input type="text" name='name' id="name"><br>
                <?php
                    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                        if ($_POST['name'] == '') {
                            echo "<p style='color: red;'> Please enter a name</p>";
                        }
                    }
                ?>
            </div>
            <div class="form-group">
                Your E-mail:<br>
                <input type="text" name='mail' id="mail"><br>
                <?php
                    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                        if (!filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL)) {
                            echo "<p style='color: red;'> Please enter a valid email</p>";
                        }
                    }
                ?>
            </div>
            <div class="form-group">
                Comments/Questions/Feedback:<br>
                <textarea name="comments" id="comments" cols="98" rows="10"></textarea><br>
                <?php
                    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                        if ($_POST['comments'] == '') {
                            echo "<p style='color: red;'> Please enter a comment</p>";
                        }
                    }
                ?>
            </div>
            <input type="submit" name="submit" value="Send">
            <input type="reset" value="Reset"><br/><br/>
            <?php
                if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                    if ($_POST['name'] != '' && filter_var($_POST['mail'], FILTER_VALIDATE_EMAIL) && $_POST['comments'] != '') {
                        echo "Email sent successfully!";
                    }
                }
            ?>

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