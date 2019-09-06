function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

function isVowel(a) {
    if (a === "A" || a === "E" || a === "I" || a === "O" || a === "U") {
        return true;
    }
    return false;
}

function sum(arr) {
    let sum1 = 0;
    for (let i =0; i< arr.length; i ++) {
        sum1 += arr[i];
    }
    return sum1;
}

function multiply(arr) {
    let multiply1 = 1;
    for (let i =0; i< arr.length; i ++) {
        multiply1 *= arr[i];
    }
    return multiply1;
}

function reverse(str) {
    let str1;
    for (let i =0; i< str.length; i ++) {
        str1.push(str.pop());
    }
    return str1;
}

function findLongestWord(arr) {
    let maxLength = 0;
    for  (let i =0; i< arr.length; i ++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    return maxLength;
}

function filterLongWords(arr, n) {
    let arr1 = [];
    for  (let i =0; i< arr.length; i ++) {
        if (arr[i].length > n) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
  return elem * 10;
})
console.log(b);
const c = a.filter(function(elem, i, array){
  return elem == 3;});
console.log(c);
const d = a.reduce(function(prevValue, elem, i, array){
  return prevValue * elem;
});
console.log(d);

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}

// console.log("Expected output of max(30, 40) is 40  " + myFunctionTest(40, function () {
//     return max(30, 40);
// }));
document.getElementById('max').innerHTML+= "Expected output of max(30, 40) is 40  "
 + myFunctionTest(40, function () {
    return max(30, 40);
});
document.getElementById('maxOfThree').innerHTML+= "Expected output of maxOfThree(30, 20, 40) is 40  "
 + myFunctionTest(40, function () {
    return maxOfThree(30, 20, 40);
});
document.getElementById('isVowel').innerHTML+= "Expected output of isVowel('A') is true  "
 + myFunctionTest(true, function () {
    return isVowel('A');
});
document.getElementById('isVowel').innerHTML+= "<br/>Expected output of isVowel('B') is false  "
 + myFunctionTest(false, function () {
    return isVowel('B');
});
document.getElementById('sum').innerHTML+= "Expected output of sum([1,2,3,4,5]) is 15  "
 + myFunctionTest(15, function () {
    return sum([1,2,3,4,5]);
});
document.getElementById('multiply').innerHTML+= "Expected output of multiply([1,2,3,4,5]) is 120  "
 + myFunctionTest(120, function () {
    return multiply([1,2,3,4,5]);
});
document.getElementById('reverse').innerHTML+= "Expected output of reverse('abcde') is 'edcba'  "
 + myFunctionTest('edcba', function () {
    return reverse('abcde');
});


