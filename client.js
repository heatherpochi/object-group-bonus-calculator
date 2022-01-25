const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
let output = [];

for (employee of employees) {
  let employeeOutput = employeeInput(employee);
  console.log(employeeOutput);
}


function employeeInput(employee) {
  let percentage = 0;
  let rating = employee.reviewRating;
  let salary = Number(employee.annualSalary);
  let name = employee.name;
  let employeeNumber = employee.employeeNumber;
  let totalBonus = 0;
  let totalCompensation = 0;
  percentage = calBonusPercentage(rating, salary, employeeNumber)
  totalBonus = calBonusAmount(percentage, salary);
  totalCompensation = Math.round(salary + totalBonus);
  let person = new Employee(name, percentage, totalCompensation, totalBonus);
  output.push(person)
  return person;
}

function calBonusPercentage(rating, salary, employeeNumber) {
  let percentage = 0;
  if (rating <= 2) {
    percentage = 0;
  } else if (rating === 3) {
    percentage = 0.04;
  } else if (rating === 4) {
    percentage = 0.06;
  } else if (rating === 5) {
    percentage = 0.10;
  }
  if (employeeNumber.length <= 4) {
    percentage += 0.05;
  }
  if (salary > 65000) {
    percentage -= 0.01;
  }
  if (percentage > .13) {
    percentage = .13
  }
  if (percentage < 0) {
    percentage = 0
  }
  percentage = percentage.toFixed(2);
  percentage = Number(percentage);
  return percentage;
}

function calBonusAmount(percentage, annualSalary) {
  let totalBonus = 0;
  let totalCompensation = Number(employee.annualSalary);
  totalBonus = percentage * annualSalary;
  totalBonus = Math.round(totalBonus);
  return totalBonus;
}

function Employee(name, bonusPercentage, totalCompensation, totalBonus) {
  this.name = name;
  this.bonusPercentage = bonusPercentage;
  this.totalCompensation = totalCompensation;
  this.totalBonus = totalBonus;
}

console.log(output);

