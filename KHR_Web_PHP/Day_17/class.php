<?php

class Demo {
    public $name="Shahin Alam";
    public $city="Dhaka";
    public $country="Bangladesh";

    function one(){
        echo 'in one';
    }
    function two(){
        echo 'in two';
    }
    function three(){
        echo 'in three';
    }
}

$demo = new Demo;
echo $demo->name;





