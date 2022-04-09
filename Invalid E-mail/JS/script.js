
function ValidateEmail(input) {

    var validRegex = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
  
    if (input.value.match(validRegex)) {
  
      alert("You have a valid E-mail ID!");
  
      document.form1.text1.focus();
  
      return true;
  
    } else {
  
      alert("Sorry!! Incorrect E-mail ID!");
  
      document.form1.text1.focus();
  
      return false;
  
    }
  
  }