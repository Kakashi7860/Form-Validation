document.getElementById("submitBtn").addEventListener("click", function () {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let errorText = document.getElementById("error");
    let successText = document.getElementById("success");

    errorText.innerText = "";
    successText.innerText = "";

    if (name === "" || email === "") {
        errorText.innerText = "All fields are required";
        return;
    }

    if (!email.includes("@")) {
        errorText.innerText = "Please enter a valid email";
        return;
    }

    successText.innerText = "Signup successful!";
});
