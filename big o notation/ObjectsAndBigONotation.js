let instructor = {
    firstName: "Ocean",
    isInstructor: true,
    favoriteNumbers: [1,2,3,4]
}

// JS built-in methods

Object.keys(instructor) 
//O(N)

Object.values(instructor)
//O(N)

Object.entries(instructor)
//O(N)

instructor.hasOwnProperty("firstName") //gives boolean
//O(1)

instructor.isInstructor 
//O(1)


// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(1)

// when not needing ordering, go with Objects, it's fast and light!



