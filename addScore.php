<?php
    require 'connect.php';
    function addScore($User, $Score){
        global $db;		
        $query = "INSERT INTO leaderboard (User, Score) VALUES (:user, :score)";
        $statement = $db->prepare($query);
        $statement->bindValue(':user', $User);
        $statement->bindValue(':score', $Score);
        $statement->execute();
        $statement->closeCursor();
    }

    if (isSet($_GET['submit'])){
        if (strlen($_GET['name']) > 0 && strlen($_GET['name']) < 11){
            $name = $_GET['name'];
            $score = $_GET['score'];
            setcookie('name', $name, time()+3600);
            addScore($name, $score);
            header('Location: assimilate.php');
        }
        else{
            echo "<p style='text-align: center;'>Please enter a name less than 10 characters</p>";
        }
    }
?>