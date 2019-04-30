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
    if (isset($_GET['level'])) {
        $level = $_GET['level'];
        if($level == 0) {
            $SQL = "SELECT * FROM leaderboard ORDER BY Score ASC LIMIT 11";
        } else if ($level == 1) {
            $SQL = "SELECT * FROM leaderboard2 ORDER BY Score ASC LIMIT 11";
        } else if($level == 2) {
            $SQL = "SELECT * FROM leaderboard3 ORDER BY Score ASC LIMIT 11";
        } else if ($level == 3) {
            $SQL = "SELECT * FROM leaderboard4 ORDER BY Score ASC LIMIT 11";
        } else if ($level == 4) {
            $SQL = "SELECT * FROM leaderboard5 ORDER BY Score ASC LIMIT 11";
        }
    } else {
        $SQL = "SELECT * FROM leaderboard ORDER BY Score ASC LIMIT 11";
    }
    $results = mysqli_query($db_handle, $SQL);
}
if (isset($_GET['level'])) {
    echo '<tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
        </tr>';

    $rank = 1;
    foreach ($results as $result){
        echo "<tr> 
            <td>{$rank}</td>
            <td>{$result['User']}</td>
            <td>{$result['Score']}</td>
            <tr>";
        $rank++;
    }
}
?>