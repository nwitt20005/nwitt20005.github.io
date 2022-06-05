// ----------------NAV BAR------------------

function openSearch() {
  document.getElementById("mySearch").style.width = "20vw";
  document.getElementById("search-icon").style.width ="2vw"
  document.getElementById("search-visible").style.transform="scale(0)";
}

function closeSearch() {
  document.getElementById("mySearch").style.width = "0";
  document.getElementById("search-icon").style.width = "0";
  document.getElementById("search-visible").style.transform = "scale(1)";

}


// ----------------SIDE NAV------------------

function openNav() {
  document.getElementById("mySidenav").style.width = "40vw";
  document.body.style.backgroundColor = "#rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.body.style.backgroundColor = "white";
}

// ----------------FILTER BUTTONS------------------


// ----------------ADD TO CART------------------

function openCart() {
  document.getElementById("myCart").style.width = "50vw";
}

function closeCart() {
  document.getElementById("myCart").style.width = "0";
}

function openCartFender() {
  document.getElementById("myCartFender").style.width = "50vw";
}

function closeCartFender() {
  document.getElementById("myCartFender").style.width = "0";
}


// ----------------CHECKOUT VALIDATION------------------

function formValidation(){
  var firstName = document.forms["billing"]["fName"].value;
  var lastName = document.forms["billing"]["lName"].value;
  var eaddress = document.forms["billing"]["eaddress"].value;
  var address1 = document.forms["billing"]["address1"].value;
  var city = document.forms["billing"]["city"].value;
  var pcode = document.forms["billing"]["pcode"].value;

  if ((firstName == "")||(lastName == "")||(eaddress == "")||(address1 == "")||(city == "")||(pcode == "")){
    alert("Required Field Misssing");
    return false;
  } else {
    window.location.href="/html/checkout.html"
  }
}