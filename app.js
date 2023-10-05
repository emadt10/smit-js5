// CHAPTER 26-30

// QUESTION 1

// var num = +prompt("Enter a positive num: ")
// if (num>0)
// {
//     document.write("number: "+num);
//     document.write("<br>round off value: "+Math.round(num));
//     document.write("<br>floor value: "+Math.floor(num));
//     document.write("<br>ceil value: "+Math.ceil(num));
// }

// QUESTION 2

// var num = +prompt("Enter a negative num: ")
// if (num<0)
// {
//     document.write("number: "+num);
//     document.write("<br>round off value: "+Math.round(num));
//     document.write("<br>floor value: "+Math.floor(num));
//     document.write("<br>ceil value: "+Math.ceil(num));
// }

// Question 3

// var num = +prompt("Enter a number: ")
// document.write("The absolute value of "+num+" is "+Math.abs(num));

//Question 4

// var a=math.floor(Math.random()*6);
// document.write("Dice Value ="+a);

//Question 5

// var a=Math.ceil(Math.random()*2);
// document.write("coin Value ="+a);
// if (a==1){
//     document.write("Tails");
// }
// else{
//     document.write("Heads");
// }

//Question 6
// var a=Math.round(Math.random()*100);
// document.write("Random Value ="+a);

//Question 7

// var w = prompt("Enter your weight in kilograms: ");
// document.write("The weight of user is "+parseFloat(w)+" kilogram.");

//Question 8
// var a=Math.ceil(Math.random()*10);
// var b=+prompt("Enter no 1-10");
// if (a==b){
//     document.write("Congratulation You Got it Right!!!");
// }
// else{
//     document.write("Try Again!!");
// }

//31-34

//Question 1
//  var current= new Date()
//  document.write(current);

//Question 2
// var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var currDate = new Date();
// document.write("Current month: "+month[currDate.getMonth()]);

//Question 3

// var week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
// var current=new Date();
// document.write("Current Day:"+ week[current.getDay()]);

//Question 4
// var week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//  var current=new Date();
//  document.write("Current Day:"+ week[current.getDay()]);
//  var x= week[current.getDay()];
//  if(x=="Sun"||x=="Sat"){
//     document.write("FunDaY");
//  }
//  else{
//     document.write("WeeekDay");
//  }

//Question 5
// var currDate = new Date();
//var x=currDate.getDate();
// if (x<16)
// {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

//Question 6
// var current=new Date();
// document.write("Curent Date ="+current);
// var nDate = currDate.getTime();
// document.write("<br>Elapsed millliseconds since January 1, 1970: " +nDate);
// document.write("<br>Elapsed minutes since January 1, 1970: " +(nDate/60000));

//Question 7

// var currDate = new Date();
// if (currDate.getHours() > 11 && currDate.getHours() < 24)
// {
//     document.write("It's PM");
// }
// else if (currDate.getHours()<12 || currDate.getHours()==24)
// {
//     document.write("It's AM");

// }

//Question 8

// var laterDate = new Date("Dec 31, 2020");
// document.write("Later date: "+laterDate);

//Question 9
// var ramDate = new Date("Mar 22, 2023");
// var currDate = new Date();

// var daySinceRam = currDate-ramDate;
// var result = Math.floor(daySinceRam/(1000 * 60 * 60 * 24));
// document.write(result+" days have passed since 1st Ramadan, 2023");

//Question 10

// var currDate = new Date();
// var refDate = new Date("Jan 1, 2015");

// var newDate = currDate-refDate;
// var result = newDate/1000;
// document.write("On reference date "+currDate+", "+result+" seconds have passed since beginning of 2015");

//Question 11
// var currDate = new Date();

// var timeHourAgo = new Date(currDate);
// timeHourAgo.setHours(currDate.getHours()-1);

// document.write("current date: "+currDate+"<br>1 hour ago, it was "+timeHourAgo);

// QUESTION 12

// var currDate = new Date();

// var dateHundredYearsAgo = new Date(currDate);
// dateHundredYearsAgo.setFullYear(currDate.getFullYear() - 100);

// var formattedDate = dateHundredYearsAgo.toString();

// alert("current date: "+currDate+"\n100 years back, it was "+formattedDate);


//Question 13
// var x=+prompt("enter Your age");
// var cdate=new Date();
// var cyear=cdate.getFullYear();
// var dob=cyear-x;
// document.write("Your Date of Birth Year = "+dob);


//Question 14
// var a=prompt("Enter your Name");
// var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
// var curmonth=new Date();
// var x=month[curmonth.getMonth()];
// var unit=16;
// var nunit=+prompt("Total Unit ");
// var nap=nunit*unit;
// var latesur=350;
// var gap=nap+latesur;

// document.write("K-ELECTRIC");
// document.write("Customer Name: "+a);
// document.write("Month: "+x);
// document.write("Number of Unit :" +nunit);
// document.write("CHarges per Unit: "+unit);
// document.write("Net Amount Payable: "+nap);
// document.write("Late Surcharges : "+latesur);
// document.write("Gross Amount PayAble : "+gap);