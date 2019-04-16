<!-- Made by Stephen Shiao (ss2sc) and Vivien Chen (vc2cw) -->
<?PHP

$db_name="leaderboard";
$username='pav';
$password='pav';


$dsn = "mysql:host=localhost:3306;dbname=leaderboard";

$db = new PDO($dsn, 'pav', 'pav');

$db_handle=mysqli_connect('localhost','pav','pav');
$db_found = mysqli_select_db( $db_handle, $db_name );

try{
    $db = new PDO($dsn, $username, $password);
}
catch(PDOException $e){
    echo"<p>error connecting to database</p>";
}

if ($db_found) {
    $SQL = "SELECT * FROM leaderboard ORDER BY Score ASC LIMIT 11";
    $results = mysqli_query($db_handle, $SQL);
}

?>