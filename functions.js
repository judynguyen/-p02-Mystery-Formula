var score = 0;
function saveUserDetails(){
  var name = document.getElementById("username").value;
  var age = document.getElementById("age").value;
  var month = document.getElementById("month").value;
  month = month.toLowerCase();
  if(month=="january"){
    month = 1;
  }
  else if (month=="february") {
    month = 2;
  }
  else if (month=="march") {
    month = 3;
  }
  else if (month=="april") {
    month = 4;
  }
  else if (month=="may") {
    month = 5;
  }
  else if (month=="june") {
    month = 6;
  }
  else if (month=="july") {
    month = 7;
  }
  else if (month=="august") {
    month = 8;
  }
  else if (month=="september") {
    month = 9;
  }
  else if (month=="october") {
    month = 10;
  }
  else if (month=="november") {
    month = 11;
  }
  else if (month=="december") {
    month = 12;
  }
  setCookie("uName", name);
  setCookie("age", age);
  setCookie("month", month);
}

/*
replaces the first example with the user input cookies
*/
function replace(){
  var name = getCookie("uName");
  var age = getCookie("age");
  var month = getCookie("month");
  if(month==1){
    month = "January";
  }
  else if (month==2) {
    month = "February";
  }
  else if (month==3) {
    month = "March";
  }
  else if (month==4) {
    month = "April";
  }
  else if (month==5) {
    month = May;
  }
  else if (month==6) {
    month = "June";
  }
  else if (month==7) {
    month = "July";
  }
  else if (month==8) {
    month = "August";
  }
  else if (month==9) {
    month = "September";
  }
  else if (month==10) {
    month = "October";
  }
  else if (month==11) {
    month = "November";
  }
  else if (month=12) {
    month = "December";
  }
  document.getElementById("nameA").innerHTML=name;
  document.getElementById("ageA").innerHTML=age;
  document.getElementById("monthA").innerHTML=month;
}

/*
adds the length of name + (name length + age) + birth month + sum of all previous numbers
*/
function calculateCookie(){
  var userInput = document.getElementById("a1").value;
  userInput = userInput.toString();

  var name = getCookie("uName");
  console.log(name);
  var nameLength = name.length;
  console.log("name length: " + nameLength);
  var nameLSTR = nameLength.toString();
  var age = getCookie("age");
  console.log("age: " + age);
  var ageNameSum = Number(nameLength)+Number(age);
  console.log("sum of age and name: " + ageNameSum);
  var ansSTR = ageNameSum.toString();
  console.log("age+name sum in string: " + ansSTR);
  var month = getCookie("month");
  var monthStr = month.toString();
  var cookieSum = Number(nameLength)+Number(ageNameSum)+Number(month);
  var cookieStr = cookieSum.toString();
  var finalCS = nameLSTR+ansSTR+monthStr+cookieStr
  finalCS = finalCS.toString();
  console.log("final cookie string: " + finalCS);

  if(userInput == finalCS){
    score+=5;
    setCookie("scoreTotal", score);
    alert("Correct! You earned 5 pts. \nYour total score is now " + getCookie("scoreTotal") + ".");

  }
  else{
    alert("Try again.");
  }
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
