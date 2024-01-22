// JSON.parse
// JSON.stringify

// Stringify -> converts objects into strings

let user = {
    name: "ayush", 
    gender: "male"
}

// console.log(user["name"]);
user["gender"];
let finalString = JSON.stringify(user);
console.log(finalString);


finalString = finalString.replace("ayush", "aryan");
console.log(finalString);



// parse -> converts strings into objects

const user1 = '{"name": "ayush", "age": 19, "gender": "male"}'

const user2 = JSON.parse(user1)
console.log(user2["gender"])


