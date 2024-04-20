function validation() {
    let username = document.getElementById("username") .value;
    let userstatus = false;
    let alphaExp = /^[A-Za-z]+$/;
    let mobile = document.getElementById("mobile") .value;
   let mobilestatus = false;
   let numExp = /^[0-9]+$/;
   let email = document.getElementById("email") .value
   let emailstatus = false;
   let mailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   let person = document.getElementById("person") .value;
   let personstatus = false;
   let perExp = /^[0-9]+$/;


  //namevalidation
    if (username === ""){
        document.getElementById("namenote").innerHTML = "Please enter your name.. ";
    }
    else{
      if (username.match(alphaExp)) {
        document.getElementById("namenote").innerHTML = "";
        userstatus = true;
      }
      else{
        document.getElementById("namenote").innerHTML = "Use only Alphabets"
        userstatus = false;
      }
    }
     
    //mobilevalidation
     if (mobile === ""){
        document.getElementById("mobilenote").innerHTML = " Please enter your mobile number";
     }   
     else{
       if(mobile.match(numExp)) {
        if (mobile.length === 10){
            document.getElementById("mobilenote").innerHTML = "";
            mobilestatus = true;
        }
        else{
            document.getElementById("mobilenote").innerHTML = "10 digit mobile number";
            mobilestatus = false;
        }
       }
       else{
        document.getElementById("mobilenote").innerHTML = "Use only digits";
        mobilestatus = false;
       }
     }

     //emailvalidation
     if(email === "") {
        document.getElementById("emailnote").innerHTML = " Please enter email id";
     }
     else {
      if(email.match(mailExp)) {
         document.getElementById("emailnote").innerHTML ="";
        emailstatus = true;
      }
      else {
        document.getElementById("emailnote").innerHTML ="include @ in email address";
        emailstatus = false;
      }
     }

     //person validation 
     if(person === ""){
        document.getElementById("pernote").innerHTML="enter no of persons"
     }
     else{
        if(person.match(perExp)) {
            if (person.length === 1){
                document.getElementById("pernote").innerHTML = "";
                personstatus = true;
            }
            else{
                document.getElementById("pernote").innerHTML = "maximum 9 members only..";
                personstatus = false;
            }
           }
           else{
            document.getElementById("pernote").innerHTML = "Use only digits";
            personstatus = false;
           }
     }
    if (userstatus === true && mobilestatus === true && emailstatus === true && personstatus === true) {
        return true;
    }
    else{
        return false;
    }
}