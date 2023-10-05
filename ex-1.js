// Exercise #1: For Each Function

function addSalaries(number){
  return number + 5000;
}

function forEach(array, operation) {
  // Start coding here
  return array.map(number => operation(number));
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];

// Using `forEach` function here

newEmployeeSalaries = forEach(employeeSalaries, addSalaries);
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
