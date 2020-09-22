console.dir(document);
var myOutput = document.getElementById("output");

console.dir(myOutput);
myOutput.innerHTML = "NEW CONTENT";

var myBTN = document.getElementsByClassName("btn");
myBTN[1].innerHTML = "NEW Button";


document.getElementById('btn1').addEventListener("click", function(){
    alert("Hello again again");
})