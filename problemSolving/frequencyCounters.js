//Frequency Counters

//This pattern uses objects or sets to collect values/frequencies of values
//This can often avoid the need for nested or O(N^2) operations with arrays / strings

//An Example
    //Write a function called same, which accepts two arrays. 
    //The function should return if every value in the array has it's correspoding 
    //values squared in the second array. The frequency of values must be same. 

//my first trial
function counters(arr1, arr2) {
    compareArr = []
    compareArr = arr1.map(num => num * num)
    if (arr2.includes(compareArr)) {
        return true
    } else {
        return false
    }
}

//naive solution
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2)
        arr2.splice(correctIndex, 1)
    }
    return true;
}

//refactored version

function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1 
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
    }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true
}



