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

function reduceToTotal(array, startingPoint=0){
  let numbers = startingPoint;
  
  array.forEach(function(num){
    numbers += num;
  });
  return numbers;
}


function reduceToAllTrue(array, startingPoint){
  let numbers = startingPoint;
  
  array.forEach(function(num){
    if num == true {
      numbers += num;
    }
  });
  return numbers;
}

