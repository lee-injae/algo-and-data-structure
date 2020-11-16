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
    for(let i = 0; i < s1.length; i++){
        let digit = s1[i]
        counter[digit] ? counter[digit] += 1 : counter[digit] = 1;   
    }

    for (let i = 0; i < s2.length; i++){ 
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

//Implement a function called , areThereDuplicates which accepts a variable number of arguments
//, and checks whether there are any duplicates among the arguments passed in. You can solve 
//this using the frequency counter pattern OR the multiple pointers pattern.

//Examples: 
//areThereDuplicates(1,2,3) //false
//areThereDuplicates(1,2,2) //true
//areThereDuplicates('a','b','c','a') //true

//frequency counter pattern -> works

function areThereDuplicates(){
    let collection = {}
    for (let val in arguments){
        collection[arguments[val]] = ++collection[arguments[val]] || 1
    }
    for(let key in collection){
        if(collection[key] > 1) return true
    }
    return false
}

function areThereDuplicates(...arg) {
    let size = arg.length;
    let lookup = {};
    for (let i = 0; i < size; i++) {
      let word = arg[i];
      if (lookup[word]) {
        return true;
      } else lookup[word] = 1;
    }
    return false;
  }
  
//Multiple Pointers pattern

function areThereDuplicates(...args){
      args.sort((a,b) => a - b);
      let start = 0;
      let next = 1;
        while(next < args.length){
            if(args[start] === args[next]){
                return true
        }
        start++
        next++
    }
    return false
  }

//fixes the edge - ex argumets of (1,'1',[1])
function areThereDuplicates(...args) {
    const lookup = {};
   
    for (const arg of args) {
      if (lookup[arg + typeof arg]) return true;
      lookup[arg + typeof arg] = 1;
    }
    return false;
  }
// alternate edge solving answer

const areThereDuplicates = (...args) => {
    const frequency = {};
 
    for (let value of args) {
        if (frequency[value.toString()]) {
            return true
        }
        frequency[value.toString()] = true;
    }

    return false
}

//another alternative of weeding out edge case, my favorite

function areThereDuplicates(...args){
    //No args, only 1 arg, no need to loop exit early 
     if(args.length < 2){
         return false;
     }
     
     let freq = {}
  
     for(let i = 0; i < args.length; i++){
         let key = args[i];
         
         //Key already exists, exit early
         if(key in freq){
             return true;
         }else{
             //Can be any value, only the key existing matters
             freq[key] = 1;
         }
     }
  
     //Return by default as no early exit
     return false;
 }

 //Write a function called averagePair. Given a sorted array of integers and a target average,
 //determine if there is a pair of values in the array where the average of the pair equals
 //the target average. There may be more than one pair that matches the average target.

 //Constraints: Time: O(N), Space:O(1)
 //Sample input: 
 //averagePair([1,2,3],2.5) // true
 //averagePair([1,3,3,5,6,7,10,12,19],8) //true
 //averagePair([-1,0,3,4,5,6], 4.1) //false
 //averagePair([],4) // false

 // my initial solution -> works!
function averagePair(arr, avg) {
    if (arr.length < 2) return false;
     
    let i = 0;
    let j = 1;
   
    while ( i < j && j < arr.length) {
        if (((arr[i] + arr[j]) / 2) === avg) {
            return true
        } else if (j === arr.length - 1) {
            i++;
            j = i + 1
        } else {
            j++
        }
    }
    return false
}

//my next approach -> wrong

function averagePair(arr, avg) {
    if (arr.length < 2) return false;
     
    let i = 0;
    for (j = 1; j < arr.length; j++)
        if (((arr[i] + arr[j]) / 2) === avg) {
            console.log(arr[i]+arr[j])
            return true
        } else if (j === arr.length - 1) {
            i++
            j = i + 1
        }
    return false
}

//solution from Colt
function averagePair(arr, num){
    let start = 0 
    let end = arr.length -1;
    while (start < end) {
        let avg = (arr[start]+arr[end]) / 2
        if (avg === num) return true;
        else if (avg < num) start++
        else end--
    }
    return false
}

averagePair([1,3,3,5,6,7,10,12,19], 8)
        

//Write a function called isSubsequence which takes in two strings and checks whether the characters
//in the first string form a subsequence of the characters in the second string. In other words, 
//the function should check whether the characters in the first string appear somewhere in the second
//string, without their order changing. 

//Examples:
//isSubsequence('hello', 'hello world') //true
//isSubsequence('sing, 'sting') // true
//isSubsequence('abc', 'abracadabra') // true
//isSubsequence('abc', 'acb') // false(order matters)

//Time Complexity: O(N+M)
//Space Complexity: O(1)

//my first trial -> works
function isSubsequence(str1, str2) {
    if (str1.length > str2.length) return false;

    let i = 0 
    let j = 0 
    while (i < str1.length ) {
        if (str1[i] === str2[j]) {
            i++;
            j++;
        } else if (j === str2.length)  {
            return false
        } else {
            j++
        }
    }
    return true
}

//Colt's answer - Iterative
function isSubsequence(str1, str2){
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while ( j < str2.length) {
        if (str2[j] === str1[i]) i++;
        if (i === str1.length) return true;
        j++
    }
    return false;
}

// Recursive but not O(1) Space
function isSubsequence(str1, str2) {
    if(str1.length) return true
    if(str2.length) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1));
    return isSubsequence(str1, str2.slice(1))
}

isSubsequence('abc', 'abracadabra')

