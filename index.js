// Write your solution in this file!
//1.
var customerName = "bob";

//2.
function upperCaseCustomerName() {
  return customerName.toUpperCase();
}

//3.
function setBestCustomer() {
  return (bestCustomer = "not bob");
}

setBestCustomer();

//4.
function overwriteBestCustomer() {
  return (bestCustomer = "maybe bob");
}

overwriteBestCustomer();

//5.
const leastFavouriteCustomer = "Jane";

function changeLeastFavouriteCustomer() {
  return (leastFavouriteCustomer = "Rodney");
}

changeLeastFavouriteCustomer();
