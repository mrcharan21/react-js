var Myvar;
// Function to set a global variable

function mainFunction() {
    Myvar = setTimeout(display,1000);
}

//Function to get a global variable

function display() {
    document.getElementById("loader").style = "display = none; opacity: 0 ; transition: opacity 1s ease-in-out";
    document.getElementById("mainContent").style = "display: block; opacity: 1; transition: opacity 1s ease-in-out";
}

//create a function to validate the form

function validateForm() {
    if (document.frm.petname.value == "") {
        document.getElementById("petNameError").innerHTML = "Please enter a pet name";
        document.frm.petname.focus();
        return false;
    }
    if(document.frm.pettype.value == "")
    {
       document.getElementById("petNameError1").innerHTML = "Please select your pet's type";
       document.frm.pettype.focus();
       return false;
       
      }

   if(document.frm.petage.value == "")
    {
       document.getElementById("petNameError2").innerHTML = "Please enter your pet's age";
       document.frm.petage.focus();
       return false;
       
      }
      
}