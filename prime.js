

function prime(limit){
    const primes = [];


    
    for (let number = 2; number <= limit; number++) {
        let isPrime = true;
    
        for (let i = 2; i <= Math.sqrt(number); i++) {
    
            console.log(Math.sqrt(number))
          if (number % i === 0) {
            isPrime = false;
            break;
          }
        }
    
        if (isPrime) {
          primes.push(number);
        }
      }
    
    
}


prime(10)


