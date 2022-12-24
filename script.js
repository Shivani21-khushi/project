let dropdown = document.getElementById("dropdown");
let result = document.getElementById("result");
let filterbtn = document.getElementById("filterBtn");


let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "Karen", age: "19", profession: "admin" }
]

// result.append(arr.jack);

// arr.forEach((item)=>{
//     let div = document.createElement("div");
//     div.innerHTML = item;
//     result.append(div);
// });
    


function filterbyprofession() {
    result.innerHTML = "";
    let dropdownValue = dropdown.value;

    if (dropdownValue == "profession") {
        alert("Select a profession before clicking the button.");
        return;
    }


    arr.forEach((item) => {
        if (item.profession === dropdownValue) {
            let div = document.createElement("div");
            div.setAttribute("class");
            div.style.borderStyle="solid";
            div.style.margin="15px 0px";
            div.style.borderRadius="10px";
            div.innerText = item.id + ". Name: " + item.name + "  Profession: " + item.profession + "  Age: " + item.age;
            result.append(div);
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
    let Uname = addName.value;
    let age = addAge.value;
    let prf = addProfession.value;

    let x = arr.length;
    ++x;

    let brr = { id: x, name: `${Uname}`, age: `${age}`, profession: `${prf}` }
    if(Uname !== "" && age !== "" && prf !== ""){
        arr.push(brr);
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