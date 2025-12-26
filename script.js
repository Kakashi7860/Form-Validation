document.getElementById("submitBtn").addEventListener("click",function (){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let errorText = document.getElementById("error").value;
    let successText = document.getElementById("success").value;

    errorText.innerText = " ";
    successText.innerText = " ";
    

    

    if(name === "" && email === ""){
        errorText.innerText = "All Fields are required"
        return;
    }

    if(!email.includes("@")){
        errorText.innerText = "please enter a valid email"
    }

    successText.innerText = "signup successful !!"
})