//Write a function called sameFrequency. Given two positive integers,
//find out if the two numbers have the same frequency of digits.

//Your solution MUST have the following complexities: 
//Time: O(N)

//Sample Input:
//sameFrequency(182,281) // true
//sameFrequency(34,14) // false
//sameFrequency(3589578, 5879385) // true
//sameFrequency(22,222) // false

function sameFrequency(num1, num2) {

    let s1 = num1.toString()
    let s2 = num2.toString()
    if (s1.length !== s2.length) return false;

    let counter = {}
    // for (let digit of s1) {
    //     counter[digit] = (counter[digit] || 0) + 1 
    // }
    //or 
    for(i = 0; i < s1.length; i++){
        let digit = s1[i]
        counter[digit] ? counter[digit] += 1 : counter[digit] = 1;   
    }

    for (i = 0; i < s2.length; i++){ 
        let digit = s2[i]
        if (!counter[digit]) {
            return false
        }  else {
            counter[digit] -= 1
        }
    }
   
    console.log(counter)
    return true
}

//another way
function sameFrequency(num1, num2) {
    let s1 = num1.toString()
    let s2 = num2.toString()
    if (s1.length !== s2.length) return false;

    let counter1 = {}
    let counter2 = {}
    for (let digit of s1) {
        counter1[digit] = (counter1[digit] || 0) + 1   
    }
    for (let digit of s2) {
        counter2[digit] = ++counter2[digit] || 1
    }

    for (let digit in counter1) {
        if (!(digit in counter2)) {
            return false
        } 
        if (counter1[digit] !== counter2[digit]) {
            return false
        } 
    }
    return true
}


sameFrequency(1233,3213)