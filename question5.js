// Question: Write a JavaScript program that checks if a given string is a palindrome.


function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;


    while (i < j) {
        if (str[i] !== str[j]) {
            return false;
        }
        i++;
        j--;
    }


    return true;
}


console.log(isPalindrome("racecar"));
console.log(isPalindrome("notaracecar"));