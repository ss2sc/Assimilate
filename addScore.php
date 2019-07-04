<!-- Made by Stephen Shiao (ss2sc) and Vivien Chen (vc2cw) -->

<?php
    require 'connect.php';
    function addScore($User, $Score, $level){
        global $db;		
        if($level == 0) {
            $query = "INSERT INTO leaderboard (User, Score) VALUES (:user, :score)";
        } else if ($level == 1) {
            $query = "INSERT INTO leaderboard2 (User, Score) VALUES (:user, :score)";
        } else if($level == 2) {
            $query = "INSERT INTO leaderboard3 (User, Score) VALUES (:user, :score)";
        } else if ($level == 3) {
            $query = "INSERT INTO leaderboard4 (User, Score) VALUES (:user, :score)";
        } else if ($level == 4) {
            $query = "INSERT INTO leaderboard5 (User, Score) VALUES (:user, :score)";
        }
        $statement = $db->prepare($query);
        $statement->bindValue(':user', $User);
        $statement->bindValue(':score', $Score);
        $statement->execute();
        $statement->closeCursor();
    }

    if (isSet($_GET['submit'])){
        if (strlen($_GET['name']) > 0 && strlen($_GET['name']) < 13){
            $name = $_GET['name'];
            $score = $_GET['score'];
            $level = $_GET['currlevel'];
            setcookie('name', $name, time()+3600);
            addScore($name, $score, $level);
            header('Location: assimilate.php');
        }
        else{
            echo "<p style='text-align: center;'>Please enter a name less than 10 characters</p>";
        }
    }
?>