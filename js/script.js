var admin = {
    name: "admin",
    password: "admin",
}

function login() {
    var name = document.getElementById("txtUsername").value;
    var password = document.getElementById("txtPassword").value;
    if ( name ==admin.name && password==admin.password){
        alert("Login Success");
        window.location = "admin.html";
    }
    else{
        alert("Wrong Login Info");
    }
}
