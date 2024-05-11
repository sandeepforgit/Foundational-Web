const isPrime=function(num){
    if(num<=1) return false;
    for(let i=2;i*i<=num;i++){
        if(num%i==0) return false;
        
    }
    return true;
}


console.log(isPrime(100));



console.log(isPrime(101));



console.log(isPrime(103));


console.log(isPrime(109));

console.log(isPrime(121));

