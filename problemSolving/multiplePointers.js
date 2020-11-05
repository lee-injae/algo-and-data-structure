//Create pointers of values that correspond to an index or position and move towards the beginning
//, end or middle based on a certain condition

//very efficient for solving problems with minimal space complexity as well

//An example
//Write a function called sumZero which accepts a sorted array integers. The function should find
// the first pair where the sum is 0. Return an array that includes both values that sum to zero 
// or undefined if a pair does not exist

//sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
//sumZero([-2,0,1,3] //undefined
//sumZero([1,2,3]) //undefined

//naive solution
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if (sum ===0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) { 
            right--;
        } else {
            left++;
        }
    }
}

//countUniqueValues
//Implement a function called countUniqueValues, which accepts a sorted array, and counts the 
//unique values in the array. There can be negative numbers in the array, but it will always
//be sorted.

//countUniqueValues([1,1,1,1,2]) // 2
//countUniqueValues([1,2,3,4,7,7,12,12,13]) // 7
//countUniqueValues([]) // 0
//countUniqueValues([-2,-1,-1,0,2]) // 4

//my first trial => works
function countUniqueValues(arr) {
    uniqueArr = []
    for (i = 0; i < arr.length; i++) {
        if (!(arr[i] in uniqueArr)) {
            uniqueArr.push(arr[i])
            console.log(uniqueArr)
        }
    }
    console.log(uniqueArr.length - 1)
    return uniqueArr.length - 1
}

//with hints => works

function countUniqueValues(arr){
    let first = 0 
    let second = 1
    
    while (first < second && second < arr.length) {
        if (arr[first] === arr[second]){
            arr.splice(arr[second],1)
            console.log(arr)
        } else {
            first++;
            second++ 
        }
    }
    console.log(arr.length)
    return arr.length
}

//with more hints

function countUniqueValues(arr) {
    let i = 0 
    let j = 1

    for (i = )
}
countUniqueValues([1,1,2,2,2,3,4,4,5,5,5])

