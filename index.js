// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName() {
   customerName = customerName.toUpperCase()
}



function setBestCustomer () {
    bestCustomer = "not bob"; // no variable assigned turns it into global
}
const changeLeastFavoriteCustomer = "?";


function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}

const changeLeastFavoriteCustomer = "init value";

function changeLeastFavoriteCustomer() {
   changeLeastFavoriteCustomer = "After value";
}