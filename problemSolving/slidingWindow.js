//Slidingwindow
//Thie pattern involves creating a window which can either be an array or number from one position 
//to another. Depending on a certain condition, the window either increases or closes
//(and a new window is created). Very useful for keeping track of a subset of data in 
//an array/string

//An Example
//Write a function called maxSubarraySum which accepts an array of integers and a number 
//called n. The function should calculate the maximum sum of n consecutive elements in the array.

//my first trail for a naive solution  --not working

function maxSubarraySum(arr,n){
    let sum = 0
    for (i = 0 ; i < arr.length - n + 1; i++){
        for (j = 1; j < n; j++){
            // if (n - j > 0) {
                 newSum = arr[i+j] 
                 
            if (sum < newSum){
                sum = newSum
            }
            console.log(newSum,sum)
        }
    }
    console.log(sum)
    return sum
}


//colt's naive answer ->nested loop...
function maxSubarraySum(arr,num) {
    if (num > arr.length) {
        return null
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for(let j = 0; j < num; j++) {
            temp +=arr[i+j] 
        }
        if (temp > max) {
            max = temp;
        }
        console.log(temp,max)
    }
    return max
}

//slidingWindow approach

function maxSubarraySum(arr,n){
    let maxSum = 0;
    let tempSum = 0;
    if (n > arr.length) return null;
    for (let i = 0; i < n ; i++) {
        maxSum += arr[i] 
    }
    tempSum = maxSum
    for (let i = n; i < arr.length; i++ ) {
        tempSum = tempSum - arr[i-n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum
}

maxSubarraySum([1,2,1,3,5,6,4,7,8],4)




