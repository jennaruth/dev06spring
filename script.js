console.log("waiting for you to click the button");
function sayHello(){
  console.log("button has been clicked");
  console.log("initiating sayHello() function");
  var textName = document.getElementById("textName");
  var textOutput = document.getElementById("textOutput");
  var name = txtName.value;
  console.log("Username is:" + name);
  console.log("Greeting message output");
  txtOutput.value = "Nice to meet you, " + name + ".";
  console.log("Show greeting to user");
}

function countLetters() {
  console.log("start countLetters() function");
  var txtName = document.getElementById("textName");
  var letters = document.getElementById("letters");
  var name = txtName.value;
  console.log("Username: " + name);
  var count = name.length;
  console.log("This is the length of your name" + count);
  console.log("Length of name")
  letters.value = "These are how many letters are in your name: " + count;
  console.log("user can see the length of their name")
 }