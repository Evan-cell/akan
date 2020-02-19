function ghanaName() {
    var day = document.getElementById("day").value;
    var DD = parseInt(day);
    var month = document.getElementById("month").value;
    var MM = parseInt(month);
    var year = document.getElementById("year").value;
    var YY = parseInt(year);
    var CC = parseInt(YY - 1) / 100 + 1;
    var dayOfTheWeek = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
    var maleNames = ["Kwasi", "Kwando", "Kwaku", "Kwabena", "Yaw", "kofi", "kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    debugger;
    if (document.getElementById("gender").checked) {
        var gender = 'male';
        console.log(gender);
    } else {
        var gender = 'female';
        console.log(gender);
    }

    if (MM < 0 || MM > 12) {
        alert("invalid month");
    } else if (DD < 0 || DD > 31) {
        alert("invalid day");
    } else if (MM == 2 && DD > 29) {
        alert("this month does not have that number of days");
    } else if (YY < 1000 || YY > 2020) {
        alert("invalid year");
    }else{

    if (Math.ceil(dayOfTheWeek) == 1 && gender === 'male') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + maleNames[1] + " " + " since you were born on a Monday";
    } else if (Math.ceil(dayOfTheWeek) == 2 && gender === 'male') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + maleNames[2] + " " + " since you were born on a Tuesday";
    } else if (Math.ceil(dayOfTheWeek) == 3 && gender === 'male') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + maleNames[3] + " " + "since you were born on a Wednesday";
    } else if (Math.ceil(dayOfTheWeek) == 4 && gender === 'male') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + maleNames[4] + " " + " since you were born on a Thursday";
    } else if (Math.ceil(dayOfTheWeek) == 5 && gender === 'male') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + maleNames[5] + " " + " since you were born on a Friday";
    } else if (Math.ceil(dayOfTheWeek) == 6 && gender === 'male') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + maleNames[6] + " " + " since you were born on a Saturday";
    } else if (Math.ceil(dayOfTheWeek) == 0 && gender === 'male') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + maleNames[0] + " " + " since you were born on a Sunday";
    }

    else if (Math.ceil(dayOfTheWeek) == 1 && gender === 'female') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + femaleNames[1] + " " + " since you were born on a Monday";
    } else if (Math.ceil(dayOfTheWeek) == 2 && gender === 'female') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + femaleNames[2] + " " + " since you were born on a Tuesday";
    } else if (Math.ceil(dayOfTheWeek) == 3 && gender === 'female') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + femaleNames[3] + " " + " since you were born on a Wednesday";
    } else if (Math.ceil(dayOfTheWeek) == 4 && gender === 'female') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + femaleNames[4] + " " + " since you were born on a Thursday";
    } else if (Math.ceil(dayOfTheWeek) == 5 && gender === 'female') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + femaleNames[5] + " " + " since you were born on a Friday";
    } else if (Math.ceil(dayOfTheWeek) == 6 && gender === 'female') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + femaleNames[6] + " " + " since you were born on a Saturday";
    } else if (Math.ceil(dayOfTheWeek) == 0 && gender === 'female') {
        document.getElementById("result").innerHTML = "Your Ghananian name is " + femaleNames[0] + " " + " since you were born on a Sunday";
    } else {
        alert("Fill in your information correctly");
    }
}}

