var emptyWarning = document.querySelector(".noTextWarning");
var lengthWarning = document.querySelector(".tooShort");
var numberWarning = document.querySelector(".noNumber");
var capitalWarning = document.querySelector(".noCapital");
var symbolWarning = document.querySelector(".noSymbol");    
var confirmWarning = document.querySelector(".noConfirm");    

function containsNumber() {
    return /[0-9]/.test();
  }

  function hasNumber(myString) {
    return /\d/.test(myString);
  }

  function containsSpecialChars(str) {
    return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(str);
  }

function receiveMessage() {
var assignedVariable = document.getElementById("choppingBlock").value;
var confirmVariable = document.getElementById("confirm").value;

if (assignedVariable == ""){
    emptyWarning.innerText = "You need to write something!";
    console.error("No encryption variable detected, program terminated.");
  }
else{
    emptyWarning.innerText = "";
  }

  if (assignedVariable.length <= 13){
    lengthWarning.innerText = "Your password must be at least 13 characters";
    console.error("input too short");
  }
else{
    lengthWarning.innerText = "";
  }

  if (hasNumber(assignedVariable) == false){
    numberWarning.innerText = "Your password must include at least one number";
    console.error("Unable to detect number");
  }
else{
    numberWarning.innerText = "";
}

if (assignedVariable == assignedVariable.toLowerCase()){
    capitalWarning.innerText = "Your password must include at least one capital letter";
    console.error("Unable to detect capital letter");
   }
else{
    capitalWarning.innerText = "";
}

if (containsSpecialChars(assignedVariable) == false){
    symbolWarning.innerText = "Your password must include at least one symbol";
    console.error("Unable to detect symbol");
  }
else{
    symbolWarning.innerText = "";
}

if (assignedVariable != confirmVariable){
    confirmWarning.innerText = "Your confirmation does not match!";
    console.error("Could not match inputs");
  }
else{
    confirmWarning.innerText = "";
}

}