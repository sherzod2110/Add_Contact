// Call form elements 
let elForm = document.querySelector(".form");
let elInput1 = elForm.querySelector("#js-input-1");
let elInput2 = elForm.querySelector("#js-input-2");
let elInput3 = elForm.querySelector("#js-input-3");
let elInput4 = elForm.querySelector("#js-input-4");
let elBtn = elForm.querySelector(".form__btn");  

//  Results 
let elList = document.querySelector(".list");

// Contacts array 
let elArray = [];


// Hearing the form 
elForm.addEventListener("submit", function(evt) {
  evt.preventDefault();
   // Get form values 
  let name = elInput1.value.trim();
  let surname = elInput2.value.trim();
  let relation = elInput3.value.trim();
  let phone = elInput4.value.trim();

  createContactObject(name, surname, relation, phone);


  if (name == "" || name.length < 3 || name.length > 15) {
    elInput1.style.borderColor = "red";
    return
  }
  if (surname == "" || surname.length < 3 || surname.length > 15) {
    elInput2.style.borderColor = "red";
    return
  }
  elInput1.style.borderColor = "#CED4DA";
  elInput2.style.borderColor = "#CED4DA";
  
  elList.innerHTML = "";

  // Append the array to the league
  for (let i = 0; i < elArray.length; i++) {

    // New elementlar
    let elNewLi = document.createElement("li");
    elNewLi.classList.add("text")
    elNewLi.innerHTML = `<p>Name: <span>${elArray[i].name}</span></p> <p>Last name: <span>${elArray[i].surname}</span></p> <p>Relation: <span>${elArray[i].relation}</span></p>
    <p>Phone number: <span>${elArray[i].phone}</span></p>
    ` 
    elList.append(elNewLi);

  }
  elInput1.value = null;
  elInput2.value = null;
  elInput3.value = null;
  elInput4.value = null;
  

})


// Push the abeyk from form to array 
let createContactObject = function(name, surname, relation, phone){

  elArray.push({
    name,
    surname,
    relation,
    phone,
  })
 }


// Result splice 
 elList.addEventListener("click", function(evt){
  if(evt.target != elList){
    let indexItem = elArray.indexOf(evt.target.textContent.toLowerCase())
    elArray.splice(indexItem, 1)
    elList.removeChild(evt.target);
  }
})
