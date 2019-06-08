
var members = [];

function member(firstName, lastName, age, membership, price) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.membership = membership;
    this.price = price;
    this.dues = 'Not Paid';
    this.duesClass = "card-text notPaid";
    this.checkedClass = "card-text checkedIn";
    this.checkInButton = "Check In";
    this.checkInButtonClass = "btn btn-success";

}

function registerMember() {
    var firstName = document.getElementById('memberName').value;
    console.log(firstName);
    var lastName = document.getElementById('memberLastName').value;
    var age = document.getElementById('memberAge').value;
    var membership = $('input[name="membership"]:checked').val();
    
    console.log(membership);

    var price;

    var membership1 = getMembership();
    if (membership1 ==true) {
        price = 30;
    } else {
        price = 50;
    }
    
    var newMember = new member(firstName, lastName, age, membership, price);

    members.push(newMember);
    
    buildUserList(members);

    memberName.value = "";   
    memberLastName.value="";   
    memberAge.value="";
}

function getMembership() {

    var membership = document.getElementsByName('membership');

    for (i = 0; i < membership.length; ++i) {
        if (membership[i].checked) {
            membership = true;
        }
        else{
            membership = false;
            }

    }
    return membership;
} 

function deleteUser(index){
    console.log('Admin wants to delete a user at index: ', index);
    members.splice(index, 1);
    buildUserList(members); 


}

function payDues(i){

    console.log('i is: ' + i);

    members[i].dues = 'Current';
    members[i].duesClass = 'card-text';
    buildUserList(members);

}

function checkIn(i){
    console.log('i for CHECK IN is: ' + i);

    members[i].checkedClass = "card-text";
    members[i].checkInButtonClass = "btn btn-warning";
    members[i].checkInButton = "Check Out";
    buildUserList(members);
}

function checkOut(i){
    console.log('i for CHECK Out is: ' + i);

    members[i].checkedClass = "card-text checkedIn";
    members[i].checkInButtonClass = "btn btn-success";
    members[i].checkInButton = "Check In";
    buildUserList(members); 
}