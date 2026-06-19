<?php
    function isPalindrome($num) {
        $temp = $num;
        $rev = 0;

        while ($temp > 0) {
            $digit = $temp % 10;
            $rev = $rev*10 + $digit;
            $temp = intdiv($temp, 10);
        }

        return $rev === $num;
    }

    $num = 123;

    if (isPalindrome($num)) {
        echo "$num is an Palindrome number";
    } else {
        echo "$num is not an Palindrome number";
    }