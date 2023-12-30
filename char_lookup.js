

const list = [];

// QUESTION
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.


function fearNotLetter(str) {
    let beta = str[str.length-1];
  let alpha = str[0];
  let result = "";
  for (let i = alpha.charCodeAt(0); i <= beta.charCodeAt(0); i++) {
      const letter = String.fromCharCode(i);
      
      if(!str.includes(letter)){
          result = letter
      }

    
    }
    // console.log(result.length === 0)
return result.length === 0 ? undefined : result;
}

fearNotLetter("abce");