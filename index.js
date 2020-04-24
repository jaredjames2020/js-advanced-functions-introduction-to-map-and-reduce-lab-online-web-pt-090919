// Your code here
function mapToNegativize(array){
  const numbers = [];
  
  array.forEach(function(num){
    numbers.push(num * -1);
  });
  return numbers;
}

function mapToNoChange(array){
  const numbers = [];
  
  array.forEach(function(num){
    numbers.push(num);
  });
  return numbers;
}

function mapToDouble(array){
  const numbers = [];
  
  array.forEach(function(num){
    numbers.push(num * 2);
  });
  return numbers;
}

function mapToSquare(array){
  const numbers = [];
  
  array.forEach(function(num){
    numbers.push(num * num);
  });
  return numbers;
}