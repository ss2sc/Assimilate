<?php 
$db_handle=mysqli_connect('localhost','pav','pav');
echo "<script type='text/javascript'>alert('got here!');</script>";
if($_GET['q'] == 0) {
    $SQL = "SELECT * FROM leaderboard ORDER BY Score ASC LIMIT 11";
} else if ($_GET['q'] == 1) {
    $SQL = "SELECT * FROM leaderboard2 ORDER BY Score ASC LIMIT 11";
} else if($_GET['q'] == 2) {
    $SQL = "SELECT * FROM leaderboard3 ORDER BY Score ASC LIMIT 11";
} else if ($_GET['q'] == 3) {
    $SQL = "SELECT * FROM leaderboard4 ORDER BY Score ASC LIMIT 11";
} else if ($_GET['q'] == 4) {
    $SQL = "SELECT * FROM leaderboard5 ORDER BY Score ASC LIMIT 11";
}

$results = mysqli_query($db_handle, $SQL);

?>