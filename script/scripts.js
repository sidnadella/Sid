function validateForm() {
    var cn = document.forms["myForm"]["cntry"].value;
    if (cn == "FC") {
        alert("Foreign Citizens are not eligible to vote.");
        return false;
    }


    var db = document.forms["myForm"]["dob"].value;
    var today = new Date();
    var birthDate = new Date(db);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }    
    if (age < 18) {
    	alert("You must be 18 years old to register");
    	return false;
    }

    var sn = document.forms["myForm"]["ssn"].value;
    if (sn.length < 9) {
    	alert("Please enter valid 9 digit SSN without any special characters.");
    	return false;
    }

    var zip = document.forms["myForm"]["zip"].value;
    if (zip.length < 9) {
    	alert("Please enter valid 5 or 9 digit zip code without any special characters.");
    	return false;
    }
}

function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }

  function getAge(DOB) {
    var today = new Date();
    var birthDate = new Date(DOB);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }    
    return age;
}
}