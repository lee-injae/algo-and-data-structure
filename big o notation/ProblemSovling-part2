//=============================================
//write a function which takes in a string and returns counts of each character
//in the string? 
//==================================================================

//concrete exmples 
//--------------------
//charCount("aaaa") // {a:4, b:0, c:0}
//charCount("hello) // {h:1. e:1. l:2, o:1}

//complex inputs
//---------------------
//"my phone number is 482923"
//"Hello hi"

//empty inputs
//---------------------
//charCount() or charCount(")
//what do we return? null, undefined? 

//invalid inputs
//---------------------
//edge cases 


//Break it Down
//1. explitcitly write out the steps you need to take. 

//charCount("Your PIN number is 1234!")

//{1: 1,
// 2: 1,
// 3: 1,
// 4: 1,
// b: 1,
// e: 1,
// i: 2,
// ....
//  }

function charCount(str) {
    //return an object with keys that are lowercase alphanumeric characters
    //in the string; values should be 
}
  
//Simplify
//-Find the core difficulty in what you're trying to do
//-Temporarily ignore that difficulty
//-Write a simplified solution
//-Then incorporate that difficulty back in 


function charCount(str) {
    //make an object to return at end 
    let result = {}
    //looping over string, for each character...
    for (i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase()
        //if the char is a number/letter AND is a key in object, add one to count
        if (result[char] > 0) {
            result[char]++;
        } 
        //if the char is a number/letter AND not in object, add it and set value to 1
        else {
            result[char] = 1;
        };
        
    }
        //if character is something else (space, period, etc) don't do anything
    return result
    //return object at end
}








