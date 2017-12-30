<?php

/**
 * Created by PhpStorm.
 * User: Web App Develop-PHP
 * Date: 12/27/2017
 * Time: 4:46 PM
 */
class Demo
{

    Public $name="sobuj Khan";
    Public $city="Dhaka";
    Public $country="Bangladesh";


    function newOne(){
        echo 'in function new one';
    }

    function newTwo(){
        echo 'in function new two';
    }
    function newThree(){
    echo 'in function new three';
    }

    function makeFullNAME($data){
        $firstName=$data['first_name'];
        $lastName=$data['last_name'];
        $fullName= $firstName.' '.$lastName;
        return $fullName;

    }


}
