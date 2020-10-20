let names = ["Micaehl", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// Insertion - depends
// Removal - depends

//adding/removing an element at index 0 is not efficient because
//all the other element's index will have to change too.

//push and pop is always faster than shift and unshift.

// Searching - O(N)
// Access - O(1)


//Built-in Array methods

//push - O(1)
//pop - O(1)
//shift - O(N)
//unshift - O(N)
//concat - O(N)
//slice - O(N)
//splice - O(N)
//sort - O(N * log N)
//forEach/map/filter/reduce/etc. - O(N)