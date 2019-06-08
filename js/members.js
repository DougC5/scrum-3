
function buildUserList(members) {

    console.log('members: ', members);

    var fullListOfUsers = document.getElementById("userList");
    var numUsers = document.getElementById("numUsers");
    console.log(fullListOfUsers);
    fullListOfUsers.innerHTML = '' ;
    var userTxt = '';
    var numberOfUsers = 
                    `<div class="alert alert-success" role="alert">
                    Number of Registered Users: ${members.length}
                    </div>`;

    for (i = 0; i < members.length; i++) {
        var member = '';

        if (members[i].student) {
            member = 'student';

        } else {
            member = 'standard';
        }

        userTxt +=` 
         <div class="card mt-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${members[i].firstName} ${members[i].lastName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Age: ${members[i].age}</h6>
                <p class="card-text">Membership Price <strong>${members[i].price}</strong></p>
                <p class="card-text">Membership Price <strong>${members[i].price}</strong></p>
                <p class="card-text notPaid" id="dues${i}">Membership Status <strong>${members[i].dues}</strong></p>
                <p class="card-text checkedIn">Membership Price <strong>Checked In!!</strong></p>
                <button type="buttonPay" class="btn btn-primary">Pay Dues</button>                
                <button type="buttonCheck" class="btn btn-success">Check in</button> 
            </div>
            </div>`;

    }

    numUsers.innerHTML = numberOfUsers;

    fullListOfUsers.innerHTML = userTxt;

}
