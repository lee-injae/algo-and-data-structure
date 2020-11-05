//Given two strings, write a function to determine if the second string is an anagram of the first.
//An anagram is a word, phrase, or name formed by rearraning the letters of another,
//such as cinema, formed from iceman.

//my first trial => works!
function anagram(str1, str2){
    //edge case 
    if (str1.length !== str2.length) {
        return false
    }
    //make objects
    str1Obj = {}
    str2Obj = {}
    //count each letter of each string
    for (let char of str1) {
        str1Obj[char] = (str1Obj[char] || 0) + 1
    }
    for (let char of str2) {
        str2Obj[char] = ++str2Obj[char] || 1
    }
    //compare keys of the two objects
    for (let key in str1Obj) {
        if (!(key in str2Obj)) {
            return false
        } 
        if (str1Obj[key] !== str2Obj[key])
            return false
    }
    console.log(str2Obj)
    console.log(str1Obj)
    return true
}



//colt's function => only two loops compared to three in mine

function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        //if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < second.length; i++) {
        let letter = second[i]
        // can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}

//helpful for comparing multiple pieces of data, particularly when you compare individual pieces,
//squares, same digits, etc. 

