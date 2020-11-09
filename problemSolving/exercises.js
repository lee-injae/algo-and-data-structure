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


