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
    for (i = 0 ; i < arr.length - (n - 1)); i++){
        for (j = 1; j < n; j++){
            if (n - j > 0) {
                newSum = arr[i] + arr[j] 
            }
              
            if (sum < newSum){
                sum = newSum
            }
        }
    }
    console.log(sum)
    return sum
}

maxSubarraySum([1,2,1,3,5,6,3],3)



