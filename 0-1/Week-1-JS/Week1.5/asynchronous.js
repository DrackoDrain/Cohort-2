// Asynchronous function -> Happens in parts, or deligate the works

function findSumTill(n){
    let a =0;
    for (let i = 0; i < n ; i++){
        a += i;
    }
    console.log(a);
  }
  // console.log(findSumTill(9));
  
  function findSum(){
      return findSumTill(100);
  }
  
  
  setTimeout(findSum, 1000);

  console.log("Hello world")

  


