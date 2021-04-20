// https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers){
    let numArr = numbers.split(' ').map(function(item) {
      return parseInt(item, 10);
    });
    
    let minNum = Math.min(...numArr);
    let maxNum = Math.max(...numArr);
    
    return(`${maxNum} ${minNum}`);
}