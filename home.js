function ghanaName(){
   var year = document.getElementById("year").Value;
   var month = document.getElementById("month").Value;
   var dayOfMonth = document.getElementById("day").value;
   var date = new Date ('{year}-{month}-{dayofmonth}');
   var birthday = date.getDay();
   var male = date.getDay();
   var male = document.getElementById("male");
   var female = document.getElementById("female");
   var result = document.getElementById("result");
   var days = ["Sunday","Monday","Tuesday","Wenesday","Thursday","Friday","saturday"];
   var maleNames = ["Kwasi","Kwando","Kwaku","Kwabena","Yaw","kofi","kwame"];
   var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
  
IF (year ==""|| year.length < 4 || year.length > 4){
    alert("please enter a valid year!");
}
else if (month < 0 || month > 12){
    alert("please enter a valid month!");
}

}
else if(male.checked == false && female.checked == false){
    alert("please enter your gender");
}
else if (male.checked == true){
    result.innerHTML = "Your Ghananian name is " + maleNames(birthday) + "since you were born on a" +days[birhday];

}

else if (female.checked == true){
    result.innerHTML = "Your Ghananian name is " + femaleNames(birthday) + "since you were born on a" +days[birhday];

}
else{
    alert("Error")
   }

