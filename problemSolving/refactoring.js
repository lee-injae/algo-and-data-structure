//brute version

function charCount(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj;
}

//refactor version
function charCount(str) {
    var obj = {};
    for (var char of str) {
        var char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            if (obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }
    return obj;
}

//next

function charCount(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

//next(final)

function charCount(str) {
    var obj = {};
    for (var char of str) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // numeric(0-9)
        !(code > 64 && code < 91) && // upper alphabet (A-Z)
        !(code > 96 && code <123)) { // lower alphabet (a-z)
     return false;
    }
    return true;
}

//RECAP
// 1. Understand the problem
// 2. Explore concrete examples(inputs, outputs, edge cases, invalid inputs..etc)
// 3. Break it down
// 4. Solve/Simplify
// 5. Look back and Refactor






