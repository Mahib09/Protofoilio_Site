//scroll navbar
myID = document.getElementById("hidnav");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 200) {
    myID.className = "box show"
  } else {
    myID.className = "box hide"
  }
};
window.addEventListener("scroll", myScrollFunc);

