
var members = [];

function member(firstName, lastName, age, membership, price) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.membership = membership;
    this.price = price;
    this.dues = 'Not Paid';

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