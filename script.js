let selectedValue = document.getElementById("list").value;
function getSelectedValue() {
  selectedValue = document.getElementById("list").value;
}

const employeeArr = [
  { Id: 1, Name : "John", Age : "18", Profession : "Developer" },
  { Id: 2, Name : "Jack", Age : "20", Profession : "Developer" },
  { Id: 3, Name : "Karen", Age : "19", Profession : "Admin" },
];

filterEmployee = () => {
  var filteredArray = employeeArr.filter(filteredEmployee);
  var text = "";
  filteredArray.forEach(myFun);

  function myFun(user) {
    text +=
       user.Id +
      "." + " "+
      "Name"+":"+user.Name +
       "  "+ 
     "Profession"+":"+user.Profession +" "+
      "Age"+":"+user.Age +
      "<br>";
  }
  document.getElementById("item").innerHTML = text;
  };

filteredEmployee = (employee) => {
  employee.Age = Number(employee.Age);
  if (employee.Name == "John") {
    employee.Age = 18;
  }
  console.log(typeof employee.Age);

  if (selectedValue == "Profession") {
    return true;
  }
  return employee.Profession == selectedValue;
};
filterEmployee();