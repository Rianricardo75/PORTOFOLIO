const form = document.forms["regisform"]
const username = form["username"]
const email = form["email"]
const password = form["password"]
const gender = form["gender"]
const tos = form["tos"]


form.addEventListener("submit",function(event){

    let flag = false;

    //batas karakter
    if(username.value.length < 6)
    {
        alert("Username must be at least 6 Characters");
        flag = true;
        //error message
    }

    if(checkEmail(email.value) == false && flag == false)
    {
        alert("Invalid Email");
        flag = true;
    }

    
    if((password.value.length < 8 || password.value.length > 16)
        && flag == false)
        {
            alert("Passwrod must be between 8 to 16 characters");
            flag = true;
        }

    if(gender.value == "" && flag == false)
    {
        alert("Gender must be chosen");
        flag = true;
    } 

    if(tos.checked == false && flag == false)
    {
        alert("You must agree with our terms of services");
        flag = true;
    }

    // masih ada errornya
    if(flag == true)
    {
        event.preventDefault();
    }

});

function checkEmail(email)
{
    // di akhiri untuk @gmail.com / @yahoo.com
    if(email.endsWith("@gmail.com") == false
        && email.endsWith("@yahoo.com") == false)return false;
    
    // ga boleh ada 2 @
    if(email.indexOf("@") != email.lastIndexOf("@"))return false;

    return true;
}

// console.log(form);