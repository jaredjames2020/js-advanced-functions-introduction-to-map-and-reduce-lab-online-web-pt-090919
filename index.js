// Your code here
function mapToNegativize(array){
  numbers = [];
  
  array.forEach(function(num){
    return numbers.push(num * -1);
  });
  return numbers;
}