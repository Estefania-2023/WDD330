
// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
    let numStr = num.toString(); // Initialize return value as string
    const numZeros = totalLen - numStr.length; // Calculate no. of zeros
    for (let i = 1; i <= numZeros; i++) {
      numStr = `0${numStr}`;
    }
    return numStr;
  }

let result;
result = padZeros(7842, 5); 
console.log(result)// returns "0042"