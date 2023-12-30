// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
const num1 = arr[0] > arr[1]  ?  arr[0] : arr[1];
const num2 = arr[1] < arr[0]  ? arr[1]: arr[0];



    // for(let i = 0; i <arr.length; i++){

    // }
    return lcm(num1,num2);
  }

  function lcm(num1,num2){
    return  num1*num2/num1-num2;
  }
  
 console.log( smallestCommons([1,5]));