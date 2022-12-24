let dropdown = document.getElementById("dropdown");
let result = document.getElementById("result");
let filterbtn = document.getElementById("filterBtn");


let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
]

function filterbyprofession() {
    result.innerHTML = "";
    let dropdownValue = dropdown.value;

    if (dropdownValue == "profession") {
        alert("Select a profession before clicking the button.");
        return;
    }
    arr.forEach((item) => {
        if (item.profession === dropdownValue) {
            let divElement = document.createElement("div");

            divElement.style.borderStyle = "solid";
            divElement.style.margin ="20px 10px";
            divElement.style.borderRadius ="5px";

            
            
            divElement.innerText = item.id + ". Name: " + item.name + " Profession: " + item.profession + " Age: " + item.age;
            result.append(divElement);
        }
    })
    console.log(arr);
}

filterbtn.addEventListener("click", filterbyprofession);

let addName = document.getElementById("name");
let addProfession = document.getElementById("profession");
let addAge = document.getElementById("age");

let aadBtn = document.getElementById("adduser");


function addUser() {
    let kname = addName.value;
    let age = addAge.value;
    let prof = addProfession.value;

    let x = arr.length;
    ++x;

    let crr = { id: x, name: `${kname}`, age: `${age}`, profession: `${prof}` }
    if(kname !== "" && age !== "" && prof !== ""){
        arr.push(crr);
    }
    else{
        alert("fill complete detail.")
    }

    console.log(arr);

    addName.value = "";
    addAge.value = "";
    addProfession.value = "";
}

aadBtn.addEventListener("click", addUser);