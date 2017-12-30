<?php

function demo($firstName=null, $lastName=null) {
//    echo 'Hello World';
//    $firstName = 'Robin';
//    $lastName = 'Kumar';
    $fullName = $firstName.' '.$lastName;
//    echo $fullName;
    return $fullName;
}
echo '<br/>......................<br/>';
echo demo('Rahim', 'Box');

echo '<br/>......................<br/>';
$res = demo('Korim', 'Box');
echo $res;

echo '<br/>......................<br/>';
$newRes = demo('Rubel', 'Khan');
echo 'Full Name Is: '.$newRes;

echo '<br/>......................<br/>';
demo('Monir', 'Khan');



