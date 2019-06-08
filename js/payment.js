function init() {

    $("#userList").on("click","button", function(e) {
        
        console.log(e);

        if (e.target.innerHTML == "Pay Dues") {
            
            payDues(e.target.parentElement.id);

        } else if (e.target.innerHTML == "Check In") {
            console.log('Login button');

            console.log("inner text: " + e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText);

            if (e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText == "Membership Status Current"){
                

                checkIn(e.target.parentElement.id);

            } else if (e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText == "Membership Status Not Paid" ) {
                alert('Member has not paid. Please bring membership current before checking in');
            }
            


        } else if (e.target.innerHTML == "Check Out"){

            checkOut(e.target.parentElement.id);

        } else if (e.target.innerHTML == "Delete"){

            deleteUser(e.target.parentElement.id);
        }
    }
    )}
    
    
window.onload = init;