
// Array 

const initialArray = [1,2,3];
initialArray.push(2);
initialArray.pop();
initialArray.shift();  /* shift -> in frontv */
initialArray.unshift(0);
console.log(initialArray);



// Concat Array

const initialArray1 = [1,2,3];
const secondArray = [6,7,10];

const concatarray = initialArray1.concat(secondArray);

console.log(concatarray);


// Foreach 

const initialArray2 = [ "12 ", 34,345];

function logThing(str){
  console.log(str);
}

initialArray2.forEach(logThing);


