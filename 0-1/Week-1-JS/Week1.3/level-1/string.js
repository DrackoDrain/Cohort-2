// Strings

// How to get Length of a String 
function getLength(str){
    console.log("origin string ", str);
    console.log ("Length", str.length);

}
getLength("Hello World");
 

// How to Find index 
function findIndexOf(str, target){
    console.log("Original String : ", str);
    console.log("Index of string is : ", str.indexOf(target)); // lastIndexOf

}
findIndexOf("Ayush Aryan", "Aryan");



// Slice 
function getSlice(str, start, end ){
    console.log("Original String" , str);
    console.log("After Slice: ", str.slice(start, end));
}
getSlice("Hello World", 0, 5);

// Output -> Hello 



// Replace 

const str = "HEllo world";
console.log(str.replace("HEl", " Aryan "));



// Split 
const value = "HI My Name,is,Ayush,Aryan";
const words = value.split("H");

console.log(words);

// function getSplit(str, separator){
//     let split = str.split(separator);
//     return split;
    
//   }
//  console.log(getSplit("Hello World", "H"));



// Trim / Uppercase / Lowercase
const value1 = "     ayush aryan       ";
console.log(value1.trim());

console.log(value1.toUpperCase());
console.log(value1.toLowerCase());



