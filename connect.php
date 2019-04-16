<?PHP
require 'configure.php';

$db_handle = mysqli_connect('localhost', 'pav', 'pav');

// print "Server found" . "<BR>";

$database = "leaderboard";

$db_found = mysqli_select_db( $db_handle, $database );

if ($db_found) {
    $SQL = "SELECT * FROM leaderboard ORDER BY Score ASC LIMIT 15";
    $results = mysqli_query($db_handle, $SQL);
}

else {
    print "Database not found";
}

?>