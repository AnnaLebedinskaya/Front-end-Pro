function sumSalaries(department) {
  let sum = 0;

  for (let key in department) {
    let value = department[key];

    if (Array.isArray(value)) {
      sum += value.reduce((acc, employee) => acc + employee.salary, 0);
    } else if (typeof value === 'object') {
      sum += sumSalaries(value);
    }
  }

  return sum;
}

let company = {
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
  development: {
    web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

console.log(sumSalaries(company));
