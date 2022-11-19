let selectedValue = document.getElementById("list").value;
function getSelectedValue() {
  selectedValue = document.getElementById("list").value;
}

const employeeArr = [
  { id: 1, name: "John", age: "18", profession: "Developer" },
  { id: 2, name: "Jack", age: "20", profession: "Developer" },
  { id: 3, name: "Karen", age: "19", profession: "Admin" },
];

filterEmployee = () => {
  var filteredArray = employeeArr.filter(filteredEmployee);
  var text = "";
  filteredArray.forEach(myFun);

  function myFun(user) {
    text +=
       user.id +
      "." + " "+
      "name"+":"+user.name +
       "  "+ 
     "profession"+":"+user.profession +" "+
      "age"+":"+user.age +
      "<br>";
  }
  document.getElementById("item").innerHTML = text;
  };

filteredEmployee = (employee) => {
  employee.age = Number(employee.age);
  if (employee.name == "John") {
    employee.age = 19;
  }
  console.log(typeof employee.age);

  if (selectedValue == "profession") {
    return true;
  }
  return employee.profession == selectedValue;
};
filterEmployee();