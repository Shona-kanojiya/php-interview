<?php 
    /* An Armstrong number (or narcissistic number) is an integer that equals the sum of its own digits, 
    where each digit is raised to the power of the total number of digits in the number.
    Examples of Armstrong Numbers3-digit 
    example 
    (153): \(1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153\)
    4-digit example (1634): \(1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634\) */

    function isArmstrong($num) {
        $total_digit = strlen((string)$num);
        $temp = $num;
        $sum = 0;

        while ($temp > 0) {
            $digit = $temp % 10;
            $sum += $digit ** $total_digit;
            $temp = intdiv($temp, 10);
        }

        return $sum === $num;
    }

    $num = 1634;

    if (isArmstrong($num)) {
        echo "$num is an Armstrong number";
    } else {
        echo "$num is not an Armstrong number";
    }