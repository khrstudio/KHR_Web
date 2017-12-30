<?php

    echo "<pre>";
    print_r($_POST);

require_once 'FullName.php';
$fullName = new FullName;

    $name='';
    if (isset($_POST['btn']))

        {

            $name= $fullName->makeFullName($_POST);
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
            <td><input type="text" value="<?php echo $name; ?>" name="" id="fullName"></td>
        </tr>
        <tr>
            <th></th>
            <td><input type="submit" name="btn" id="btn" value="submit"></td>
        </tr>
    </table>
</form>





