/*
You are given 3 integers
Check whether two of them are equal to the third
Print the output in format a + b = c (a ≤ b)
*/

function myFunction(nums) {
    let arr = nums[0].split(' ').map(Number)
    let num1 = arr[0];
    let num2 = arr[1];
    let num3 = arr[2];

    if (num1 + num2 == num3)
        return "" + Math.min(num1, num2) + " + " + Math.max(num2, num1) + " = " + num3;
    else if (num1 + num3 == num2)
        return "" + Math.min(num1, num3) + " + " + Math.max(num3, num1) + " = " + num2;
    else if (num2 + num3 == num1)
        return "" + Math.min(num3, num2) + " + " + Math.max(num2, num3) + " = " + num1;
    else
        return "No";
}

