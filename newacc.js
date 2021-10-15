


function createACC() {
        newusername = document.getElementById("username1").value;
        newpassword = document.getElementById("password1").value;
        localStorage.setItem("Username", newusername); //To create a data entry for the new username
        localStorage.setItem("Password", newpassword); //To create a data entry for the new password
        window.location = "index.html";
}