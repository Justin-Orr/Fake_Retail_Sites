var accountbtn = document.getElementById("account-btn");
var dropdown = document.getElementById("account-dropdown");

accountbtn.addEventListener("mouseover", displayDropwdown);
accountbtn.addEventListener("mouseout", hideDropwdown);

function displayDropwdown() {
  dropdown.style.display = "block";
}

function hideDropwdown() {
  dropdown.style.display = "none";
}