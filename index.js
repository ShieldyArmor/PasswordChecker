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
    return /\W|_/.test(str);
  }

  function redirectCheck(str) {
    if (passCheck.test(str) == true) {
      window.location.assign("https://www.obama.org");
    }
  }

  const passCheck = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\W|_]).{13,}$/;

function receiveMessage() {
var assignedVariable = document.getElementById("choppingBlock").value;
var confirmVariable = document.getElementById("confirm").value;

  emptyWarning.innerText = (assignedVariable == "") ? "You need to write something!" : "";

  lengthWarning.innerText = (assignedVariable.length <= 13) ? "Your password must be at least 13 characters" : "";

  numberWarning.innerText = (hasNumber(assignedVariable) == false) ? "Your password must include at least one number" : "";

  capitalWarning.innerText = (assignedVariable == assignedVariable.toLowerCase()) ? "Your password must include at least one capital letter" : "";

  symbolWarning.innerText = (containsSpecialChars(assignedVariable) == false) ? "Your password must include at least one symbol" : "";

  confirmWarning.innerText = (assignedVariable != confirmVariable) ? "Your confirmation does not match!" : "";

  if ((assignedVariable == confirmVariable)){
    redirectCheck(assignedVariable)
  }

}