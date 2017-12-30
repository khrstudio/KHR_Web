<?php

class FullName
{
    function makeFullName($data)
    {
        $firstName = $data['first_name'];
        $lastName = $data['last_name'];
        $fullName = $firstName . ' ' . $lastName;
        // echo $fullName;
        return $fullName;
    }

    function makeSeriesNumber($data)
    {
        $startingNumner = $data['starting_number'];
        $endingNumner = $data['ending_number'];
        $result = 0;
        if ($startingNumner < $endingNumner) {
            for ($i = $startingNumner; $i <= $endingNumner; $i++) {
                $result += $i;
            }
            return $result;
        } else {
//            $result="please input small to large";
//            return $result;
            for ($i = $startingNumner; $i >= $endingNumner; $i--) {
                $result += $i ;

            }



        }
        return $result;
    }
}