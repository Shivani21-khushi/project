import userdata from './data.json' assert { type: 'json' };
console.log(userdata);



var dataTable = document.getElementById("dataTab");
//  buttons
var sortAZ = document.getElementById("sortAtoZ")
var sortZA = document.getElementById("sortZtoA")
var sortMarks = document.getElementById("sortByMarks")
var sortPassing = document.getElementById("sortByPassing")
var sortGender = document.getElementById("sortByGender")
var sortClass = document.getElementById("sortByClass")

var searchBox = document.getElementById("search")
var searchButton = document.getElementById("searchBtn")


function insert(haha) {  haha.map((e) => {
    
    var row = dataTable.insertRow(-1);
    
    let ID = row.insertCell(0)
    let Name = row.insertCell(1)
    let Gender = row.insertCell(2)
    let Class = row.insertCell(3)
    let Marks = row.insertCell(4)
    let Passing = row.insertCell(5)
    let Email = row.insertCell(6)
   
    ID.innerHTML = e.id
    
    var image = document.createElement("img")
    image.src = e.img_src
    image.style.border = "1px solid black"
    image.style.borderRadius = "50%"
    image.style.width = "35px"
    Name.append(image)
    
    var span = document.createElement("span")
    span.style.paddingLeft = "10px"
    span.innerText = e.first_name + " " + e.last_name
    Name.append(span)
    
    Name.className = "nameBlock"
    
    Gender.innerText = e.gender
    Class.innerText = e.class
    Marks.innerText = e.marks
    Email.innerText = e.email
    if (e.passing == true) {
        Passing.innerText = "Pass"
    }
    else {
        Passing.innerText = "Fail"
    }
})
}
insert(userdata)


searchButton.onclick = function () {
   
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    
    let value = searchBox.value.toLowerCase()

    let filter1 = userdata.filter(e => e.first_name.toLowerCase().includes(value) || e.last_name.toLowerCase().includes(value) || e.email.toLowerCase().includes(value))
    insert(filter1)
}


function fliterPassing() {
    
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter2 = userdata.filter(e => e.passing == true)
    insert(filter2)
}
sortPassing.addEventListener('click', fliterPassing)


function fliterGender() {
    
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter3a = userdata.filter(e => e.gender === "Female")
    let filter3b = userdata.filter(e => e.gender === "Male")
    insert(filter3a)
    
    var row = dataTable.insertRow(-1);
    var ID = row.insertCell(0)
    var Name = row.insertCell(1)
    var Gender = row.insertCell(2)
    var Class = row.insertCell(3)
    var Marks = row.insertCell(4)
    var Passing = row.insertCell(5)
    var Email = row.insertCell(6)

    ID.innerHTML = " "
    Name.innerHTML = " "
    Gender.innerHTML = " "
    Class.innerHTML = " "
    Marks.innerHTML = " "
    Passing.innerHTML = " "
    Email.innerHTML = " "

    var row = dataTable.insertRow(-1);
    var ID = row.insertCell(0)
    var Name = row.insertCell(1)
    var Gender = row.insertCell(2)
    var Class = row.insertCell(3)
    var Marks = row.insertCell(4)
    var Passing = row.insertCell(5)
    var Email = row.insertCell(6)

    ID.innerHTML = "ID"
    Name.innerHTML = "Name"
    Gender.innerHTML = "Gender"
    Class.innerHTML = "Class"
    Marks.innerHTML = "Marks"
    Passing.innerHTML = "Passing"
    Email.innerHTML = "Email"

    insert(filter3b)
}
sortGender.addEventListener('click', fliterGender)


function fliterClass() {
    
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter4 = userdata.sort((p, q) => {
        return p.class - q.class;
    });
    insert(filter4)
}
sortClass.addEventListener('click', fliterClass)

function fliterMarks() {
    
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter5 = userdata.sort((p, q) => {
        return p.marks - q.marks;
    });
    insert(filter5)
}
sortMarks.addEventListener('click', fliterMarks)

function fliterAZ() {
  
    var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter6 = userdata.sort(function (a, b) {
        if (a.first_name < b.first_name) {
          return -1;
        }
      });
    insert(filter6)
}
sortAZ.addEventListener('click', fliterAZ)


function fliterZA() {
     var totalRows = dataTable.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        dataTable.deleteRow(i);
    }
    let filter7 = userdata.sort(function (a, b) {
        if (a.first_name > b.first_name) {
          return -1;
        }
      });
    insert(filter7)
}
sortZA.addEventListener('click', fliterZA)