<?php
require_once 'Demo.php';
$demo = new Demo();
//echo $demo ->name;
$result=' ';
if(isset($_POST['btn'])){
  $result=$demo->makeFullNAME($_POST);
}



?>
<form action="" method="POST">
    <table>
        <tr>
            <th>First Name</th>
            <td><input type="text" name="first_name" id="lastName"></td>
        </tr>
        <tr>
            <th>Last Name</th>
            <td><input type="text" name="last_name" id="firstName"></td>
        </tr>
        <tr>
            <th>Full Name</th>
            <td><input type="text" value="<?php echo $result; ?>" name="full_name" id="fullName"></td>
        </tr>
        <tr>
            <th></th>
            <td><input type="submit" name="btn" id="btn" value="Submit"></td>
        </tr>
    </table>
</form>
