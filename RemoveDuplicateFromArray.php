<?php
function duplicate($arr){
    $k = 0;

    for ($i = 1; $i < count($arr); $i++){
        if($arr[$i] != $arr[$k]){
            $k++;
            $arr[$k] = $arr[$i];
        }
    }
    

    return array_slice($arr, 0, $k + 1);
}

print_r(duplicate([1,2,2,3,4,5,5,5]));