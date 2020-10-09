var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  console.log("Hello")
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
