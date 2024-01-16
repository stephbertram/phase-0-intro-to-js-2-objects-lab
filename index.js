// Write your solution in this file!

const employee = {
    name: "Abby",
    streetAddress: "11 Broadway",
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  const newEmployee = updateEmployeeWithKeyAndValue(
    newEmployee,
    "name",
    "Alex"
  );


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway";

    return employee;
}


function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = { ...employee};

    delete newEmployee.name;

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {

    delete employee.name;

    return employee;
}