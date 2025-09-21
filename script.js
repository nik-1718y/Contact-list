let submitbtn = document.querySelector("#submit-btn");
let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");
let table = document.querySelector("#contact-table")

function contact(){
    if(nameInput.value !== "" && phoneInput.value !== "" && emailInput !== ""){
  let name=nameInput.value;
    let phone=phoneInput.value;
    let email=emailInput.value;
    let tablerow=document.createElement("tr");
    tablerow.innerHTML=`
        <td>${name} </td>
    <td>${phone}</td>
     <td>${email}</td>
     <button class="del">Delete</button>
    <button class="fav">Favorite</button>


    `;
    table.appendChild(tablerow);
    nameInput.value = "";
    phoneInput.value = "";
    emailInput.value = "";
    let deletebtn=tablerow.querySelector(".del");
    deletebtn.addEventListener("click",()=>{
        tablerow.remove();
    });
    let favouriteBtn =tablerow.querySelector(".fav");
    favouriteBtn.addEventListener("click",()=>{
        tablerow.classList.toggle("color");
    })
    }
}
submitbtn.addEventListener("click",contact);
