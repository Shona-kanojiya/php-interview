function isArmstrong(num) {
    const digitsArr = num.toString().split('');
    const power = digitsArr.length;

    const sum = digitsArr.reduce((acc, digit) => {
        return acc + Math.pow(Number(digit), power);
    }, 0);

    return sum === num;
}

console.log(isArmstrong(1531))