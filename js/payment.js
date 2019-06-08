function init() {

    $("#userList").on("click","button", function(e) {
        
        console.log(e);

        if (e.target.innerHTML == "Pay Dues") {
            console.log('pay dues button');
            e.target.previousElementSibling.previousElementSibling.innerHTML = "Membership Status <strong>Current</strong>";

            e.target.previousElementSibling.previousElementSibling.className = "card-text paid";

    
        } else if (e.target.innerHTML == "Check In") {
            console.log('Login button');

            console.log("inner text: " + e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText);

            // if (e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText == "Current"){
                e.target.className = "btn btn-warning";
                e.target.innerText = "Check Out";
                e.target.previousElementSibling.previousElementSibling.className = "card-text";

            // } else {
            //     alert('Member has not paid. Please bring membership current before checking in');
            // }
            


        } else if (e.target.innerHTML == "Check Out"){
            e.target.className = "btn btn-success";
            e.target.innerText = "Check In";
            e.target.previousElementSibling.previousElementSibling.className = "card-text checkedIn";


        } else if (e.target.innerHTML == "Delete"){

            deleteUser(e.target.id);

        }

    }
    )}
    
    

window.onload = init;