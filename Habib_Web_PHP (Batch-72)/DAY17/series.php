<?php
$result='';
if(isset($_POST['btn'])){
    require_once 'FullName.php';
    $fullName = new FullName();
    $result= $fullName->makeSeriesNumber($_POST);
}
?>
<form action="" method="POST">
    <table>
        <tr>
            <th>Starting Number</th>
            <td><input type="number" name="starting_number" ></td>
        </tr>
        <tr>
            <th>Ending Number</th>
            <td><input type="number" name="ending_number" ></td>
        </tr>
        <tr>
            <th>Result</th>
            <td><textarea><?php echo $result;?></textarea> </td>
        </tr>
        <tr>
            <th></th>
            <td><input type="submit" name="btn" id="btn" value="submit"></td>
        </tr>
    </table>
</form>

