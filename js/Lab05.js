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
    // let sum1 = 0;
    // for (let i = 0; i < arr.length; i++) {
    //     sum1 += arr[i];
    // }
    // return sum1;
    let sum1 = arr.reduce(function (prevValue, elem, i, array) {
        return prevValue + elem;
    });
    return sum1;
}

function multiply(arr) {
    // let multiply1 = 1;
    // for (let i = 0; i < arr.length; i++) {
    //     multiply1 *= arr[i];
    // }
    // return multiply1;
    let multiply1 = arr.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
    return multiply1;
}

function reverse(str) {
    let str1 = str.split('');
    // let str2 = [];
    // while (str1.length > 0) {
    //     str2.push(str1.pop());
    // }
    // return str2.join('');
    let str2 = str1.reduce(function (prevValue, elem, i, array) {
        return prevValue + array[array.length - i - 1];
    }, '');
    return str2;
}

function findLongestWord(arr) {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    return maxLength;
}

function filterLongWords(arr, n) {
    // let arr1 = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i].length > n) {
    //         arr1.push(arr[i]);
    //     }
    // }
    // return arr1;
    let arr1 = arr.filter(function (elem, i, array) {
        return elem.length > n;
    });
    return arr1;
}

// const a = [1, 3, 5, 3, 3];
// a) multiply each element by 10;
function jsfiddle_a(a) {
    let b = a.map(function (elem, i, array) {
        return elem * 10;
    });
    return b;
}
// b) return array with all elements equal to 3;
function jsfiddle_b(a) {
    let c = a.filter(function (elem, i, array) {
        return elem == 3;
    });
    return c;
}
// c) return the product of all elements;
function jsfiddle_c(a) {
    let d = a.reduce(function (prevValue, elem, i, array) {
        return prevValue * elem;
    });
    return d;
}

/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if (Array.isArray(expected)) {
        expected = expected.toString();
    }
    if (Array.isArray(result)) {
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
document.getElementById('max').innerHTML += "Expected output of max(30, 40) is 40  "
    + myFunctionTest(40, function () {
        return max(30, 40);
    });
document.getElementById('maxOfThree').innerHTML += "Expected output of maxOfThree(30, 20, 40) is 40  "
    + myFunctionTest(40, function () {
        return maxOfThree(30, 20, 40);
    });
document.getElementById('isVowel').innerHTML += "Expected output of isVowel('A') is true  "
    + myFunctionTest(true, function () {
        return isVowel('A');
    });
document.getElementById('isVowel').innerHTML += "<br/>Expected output of isVowel('B') is false  "
    + myFunctionTest(false, function () {
        return isVowel('B');
    });
document.getElementById('sum').innerHTML += "Expected output of sum([1,2,3,4,5]) is 15  "
    + myFunctionTest(15, function () {
        return sum([1, 2, 3, 4, 5]);
    });
document.getElementById('multiply').innerHTML += "Expected output of multiply([1,2,3,4,5]) is 120  "
    + myFunctionTest(120, function () {
        return multiply([1, 2, 3, 4, 5]);
    });
document.getElementById('reverse').innerHTML += "Expected output of reverse('abcde') is 'edcba'  "
    + myFunctionTest('edcba', function () {
        return reverse('abcde');
    });
document.getElementById('findLongestWord').innerHTML += "Expected output of findLongestWord(['abcde', 'qwe', 'weer']) is 5  "
    + myFunctionTest(5, function () {
        return findLongestWord(['abcde', 'qwe', 'weer']);
    });
document.getElementById('filterLongWords').innerHTML += "Expected output of filterLongWords(['abcde', 'qwe', 'weer'], 3) is ['abcde', 'weer']  "
    + myFunctionTest(['abcde', 'weer'], function () {
        return filterLongWords(['abcde', 'qwe', 'weer'], 3);
    });
document.getElementById('jsfiddle_a').innerHTML += "Expected output of jsfiddle_a([1, 3, 5, 3, 3]) is [10, 30, 50, 30, 30]  "
    + myFunctionTest([10, 30, 50, 30, 30], function () {
        return jsfiddle_a([1, 3, 5, 3, 3]);
    });
document.getElementById('jsfiddle_b').innerHTML += "Expected output of jsfiddle_b([1, 3, 5, 3, 3]) is [3, 3, 3]  "
    + myFunctionTest([3, 3, 3], function () {
        return jsfiddle_b([1, 3, 5, 3, 3]);
    });
document.getElementById('jsfiddle_c').innerHTML += "Expected output of jsfiddle_c([1, 3, 5, 3, 3]) is 135  "
    + myFunctionTest(135, function () {
        return jsfiddle_c([1, 3, 5, 3, 3]);
    });