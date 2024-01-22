

function findSum(n){
    let a = 0;
    for (let i =0; i< n ; i++){
        a = a+i;
    }
    return a;    
}

let ans = findSum(100);
console.log(ans);
