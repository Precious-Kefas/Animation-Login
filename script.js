function ml() {
  var mail = document.getElementById("mail").id;
  var pass = document.getElementById("pass").id;
}
if (mail === " ") {
  alert("please input your email!");
} else if (pass === " ") {
  alert("please input your passsword!");
} else {
  //   alert(" WeLcomE, you've signed in sucessfully");
}
function clearText() {
  document.getElementById("mail").placeholder = " ";
  document.getElementById("pass").placeholder = " ";
}
