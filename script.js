let emailInput=document.getElementById('email');
let passwordInput=document.getElementById('pwd');
let button=document.getElementById('btn');
let messageDiv=document.getElementById('message');
emailInput.addEventListener("change",validate);
passwordInput.addEventListener("change",validate)

let messagemaildiv=document.getElementById('messageemail');
let messagepassworddiv=document.getElementById('messagepassword');
emailInput.onchange=validate();
passwordInput.onchange=validate();
function geek()
{
   if(confirm()==true)
   {
       alert("successfull signup!")
   }
   if(confirm()==false)
   {
       emailInput.value="";
       passwordInput.value=""
       messageDiv.innerText=""
   }
}

function validate()
{

    let email=emailInput.value;

    let password=passwordInput.value;

    if(email !="" && email.includes("@") && email.length>3 && email.includes(".") && password != "" && password.length>8) {
       
       
        if(password != "" && password.length>8)
       {
            messageDiv.innerText="All good to go!";
            messageDiv.style.color="green";

        messagemaildiv.innerText="";
        messagepassworddiv.innerText="";
       
       

        }
        else{
            messageDiv.innerText="";
             messagemaildiv.innerText="Make sure email is more than 3 characters and has @ and a.";
             messagemaildiv.style.color="red";
             messagepassworddiv.innerText=" Make sure password is more than 8 characters.";
             messagepassworddiv.style.color="red";
     
             console.log("Email or password is invalid");
         }
     
    }
      
        else(password != "" && password.length>8)
      {
    if(email !="" && email.includes("@") && email.length>3 && email.includes(".") && password != "" && password.length>8){
            messageDiv.innerText="All good to go!";
            messageDiv.style.color="green";

        messagemaildiv.innerText="";
        messagepassworddiv.innerText="";
      
       

        }
        else{
            messageDiv.innerText="";
             messagemaildiv.innerText="Make sure email is more than 3 characters and has @ and a.";
             messagemaildiv.style.color="red";
             messagepassworddiv.innerText=" Make sure password is more than 8 characters.";
             messagepassworddiv.style.color="red";
     
             console.log("Email or password is invalid");
         }
     
    }
}