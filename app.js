// CHAPTER # 01


// TASK 01:
alert("Welcome to my website!");

// TASK 02:
alert("Error! Please enter a valid password.");

// TASK 03:
alert("Welcome to JS land...\nHappy Coding!");

// TASK 04:
alert("Welcome to JS land.");
alert("Happy Coding!\nPrevent this page fromadditional dialogs"); //*************************************

// TASK 05:

console.log("Hello... I can run js through my web browser's console.");
alert("Hello... I can run js through my web browser's console.");

// TASK 06:
// html




//  CHAPTER # 02


// TASK 01:
var username;

// TASK 02:
var myName="Lihaz Ali Shah";

// TASK 03:
var massage="Hollo world!";
alert(massage);

// TASK 04:
var studentName="lihaz Ali Shah";
var studentAge="18 years old";
var certificate="Certified Mobile Application Developnmnet";
alert(studentName);
alert(studentAge);
alert(certificate);


// TASK 05:
alert("          PIZZA\n          PIZZ\n          PIZ\n          PI\n          P");


// TASK 06:
var Email="lihazalishah@gmail.com";
alert("My Email address is " + Email);

// TASK 07:
var BOOOK="“A smarter way to learn JavaScript”.";
alert("I'm trying to learn from the book " + BOOOK);

// TAST 08;
document.write("Yah! i can write HTML contant through javascript");


// TAST 08;

alert("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬");


// CHAPTER # 03

// TAST 01;

var age=18;
alert("i'm" + " "+ age +" " +" year old");

// TAST 02;

var visit = 0;
visit++;
  var name= prompt("enter you name");
  alert(name+" visit "+ visit +" time website");
  


// TAST 03;
var birthYear="2001";
document.write("My birth year is " +birthYear + "</br>");
document.write("Data type of my declear variable is number");

// TAST 04;
var site="Diamond Super Market";
var userName=prompt("enter your name");
var products=prompt("enter your products");
var quality=prompt("how many "+ products +" you went!");
document.write(" "+ userName + "  Orderd  "+ quality +" "+ products + " on " + site + " ");


// CHAPTER # 04

// TAST 01;
var a=10,b=20,c=30;
alert(a);
alert(b);
alert(c);

// TAST 02;
// legal variable
var $_="lihaz";_$="something";var Cost = 100;
// illegal Variable
var student_name="lihaz"; name1 ="lihaz";

// TAST 03;
// heading in index.html


// CHAPTER # 05

// TAST 01;
var number1=+prompt("Enter 1st number");
var number2=+prompt("Enter 2nd number");
var Sum = number1 + number2;
document.write("Sum of " + number1 + " and " + number2 +" "+ " is " + Sum );

// TAST 02;
var number1=+prompt("Enter 1st number");
var number2=+prompt("Enter 2nd number");
var Subtract = number1 - number2;
document.write("Subtraction of " + number1 + " and " + number2 +" "+ " is " + Subtract );

var number1=+prompt("Enter 1st number");
var number2=+prompt("Enter 2nd number");
var Multiplication = number1 * number2;
document.write("multiplication of " + number1 + " and " + number2 +" "+ " is " + Multiplication );

var number1=+prompt("Enter 1st number");
var number2=+prompt("Enter 2nd number");
var Division = number1 / number2;
document.write("Division of " + number1 + " and " + number2 +" "+ " is " + Division );

var number1=+prompt("Enter 1st number");
var number2=+prompt("Enter 2nd number");
var mode = number1 % number2;
document.write("Mode of " + number1 + " and " + number2 +" "+ " is " + mode );

// TAST 03;
var number;
document.write("value after variable decleration is:  "+number + "</br>");
number=5;
document.write("initial value : " + number +"</br>");
number=++number;
document.write("Value after increment is :" + number + "</br>");
number= number+7;
document.write("Value after addition is :" + number + "</br>") ;
number=--number;
document.write("Value after decrement is :" + number + "</br>") ;
var remender=number%3;
document.write("The remender is :" + remender + "</br>") ;

// TAST 04;
var ticketPrice = 600;
var totalTicket= 5;
var output= totalTicket*ticketPrice;
document.write("Total cost to buy  "+ " " + totalTicket + "  ticket to a movie is  "+ output +" PKR" );

// TAST 05;
var number=+ prompt("enter number");
document.write("Table of "+" "+number +"</br>");
for(var i=1; i<=10 ;i++){
document.write(" "+ number + " X " + i + " = " + number*i + "</br>");
}

// TAST 06;
var flag =+prompt("convert C into F enter 1 \nconvert F into  C enter 2")
if(flag === 1){
var temp_in_centigrade    =  +prompt("Enter tempreature in centigrade");
var temp_in_ferhit = (temp_in_centigrade * ( 9 / 5 ) ) + 32;
document.write(" "+ temp_in_centigrade +" C "+ " is "+ temp_in_ferhit +" F </br>"); 
}
else if(flag === 2) {
var temp_in_ferhit      =  +prompt("Enter tempreature in ferhit");
var  temp_in_centigrade  = ( temp_in_ferhit - 32) * 9 / 5;
document.write(" "+ temp_in_ferhit +" F "+ " is "+ temp_in_centigrade +" C"); 
}else{
    alert("Enter correct choice!");
}

// TAST 07;
// in html

// TAST 08;
// in html

// TAST 09;
// in html

// TAST 10;
var number = +prompt("enter a number");
var output = [(number+5)*10]/2;
var add =number+5;
var multiply= add*10;
var divide= multiply/2;
document.write("you entered :"+ number +"</br> add 5 number becomes " + add +" and multiply by 10 number becomes "+ multiply +" and then devided by 2 number become "+divide+" </br>");
document.write("Answer is :"+ output);

// TAST 11;
// in html

// TAST 12;
// in html

// CHAPTER # 06

// TAST 1;

var number =+prompt("Enter a number");
document.write("Result : "+" </br>");
document.write("The value of number is :" +" "+ number +" </br>");
document.write("</br> </br> -------------------------------- </br>");

var pre_Increment=++number;
document.write("</br> </br> The value of ++number is :" +pre_Increment+" </br>");
document.write("Now the value of number is :" +pre_Increment+" </br>");

var increment=number+1;
document.write("</br> </br> The value of number++ is :" +number+" </br>");
document.write("Now the value of number is :" +increment+" </br>");

var pre_Decrement=--increment;
document.write("</br> </br> The value of --number is :" +pre_Decrement+" </br>");
document.write("Now the value of number is :" +pre_Decrement+" </br>");

var Decrement=pre_Decrement-1;
document.write("</br> </br> The value of number-- is :" +number+" </br>");
document.write("Now the value of number is :" +Decrement+" </br>");



// TAST 2;

var a=2,b=1;

document.write("a is : "+a+" </br>");
document.write("b is : "+b+" </br>");
var a_pre_Decrement=--a;
var b_pre_Decrement=--b;
var b_pre_Increment=++b;
var b_pos_Decrement=b--;
document.write("</br></br> --a is : "+a_pre_Decrement+" </br>");
var result1=a_pre_Decrement - b_pre_Decrement;
document.write("--a - --b is : "+result1 +" </br>");
var result2=result1 + b_pre_Increment;
document.write("--a -- --b + ++b is : "+ result2 + " </br>");
var result=result2 + b_pos_Decrement;

document.write(" RESULT is : "+result);

// TAST 3;
var name=prompt("enter your name");
alert("your name is " + name + " !!");

// TAST 4;
// task 04 is missing in assignment book;


// TAST 5;

var number=+ prompt("enter number");
if(number>=1 ){
     document.write("Table of "+" "+number +"</br></br>");
     for(var i=1; i<=10 ;i++)
     {
        document.write(" "+ number + " X " + i + " = " + number*i + "</br>");
      }
}
else{
    document.write(" Default printing Table of 5 </br></br>");
    for(var i=1; i<=10 ;i++)
    {
       document.write(" 5  X " + i + " = " + 5*i + "</br>");
     }
}

// TAST 6;

var subject_1_name=prompt("Enter 1st subject name");
var subject_2_name=prompt("Enter 2nd subject name");
var subject_3_name=prompt("Enter 3rd subject name");

var subject_1_mark=+prompt("Enter your "+ subject_1_name +" marks </br>");
var subject_2_mark=+prompt("Enter your "+ subject_2_name +" marks </br>");
var subject_3_mark=+prompt("Enter your "+ subject_3_name +" marks </br>");

var subject_1_percentage=subject_1_mark/100 *100;
var subject_2_percentage=subject_2_mark/100 *100;
var subject_3_percentage=subject_3_mark/100 *100;

var totalMarks=300;
var total_ObtainMarks= subject_2_mark + subject_2_mark +subject_3_mark;
var percentage= total_ObtainMarks/totalMarks * 100;

document.write("------ Subject --- "+""+" --- Total Marks --- "+" "+" "+" "+" --- Obtained Marks --- "+" "+" "+" "+" --- Percentage --- </br></br> ");
document.write(" -------- " + subject_1_name+" -------- "+" ------- 100 ------- "+" ------- "+subject_1_mark+" ------- "+" "+" ------- "+subject_1_percentage+" % </br>");
document.write(" -------- "+ subject_2_name+" -------- "+" ------- 100 ------- "+" ------- "+subject_2_mark+" ------- "+" "+" ------- "+subject_2_percentage+" % </br>");
document.write(" -------- "+ subject_3_name+" -------- "+" ------- 100 ------- "+" ------- "+subject_3_mark+" ------- "+" "+" ------- "+subject_3_percentage+" % </br>");
document.write(" ------------------------------------ "+ totalMarks +" ---------- "+total_ObtainMarks+" ----------- "+percentage+" %");



// CHAPTER 09 10;

// Task 1;
var CityName=prompt("Enter city name");
if(CityName==='karachi' || CityName==='KARACHI'){
    alert("Welcome to City of lights !! ");
}else if(CityName==='Lahore' || CityName==='lahore' || CityName==='LAHORE'){
    alert("welcome to lahore..\n lahore is one of the beautiful city of our country Pakistan.");
}
else if(CityName==='islamabad' || CityName==='Islamabad' || CityName==='ISLAMABAD'){
    alert("welcome to Islamabad..\n Islamabad is one of the beautiful city of our country Pakistan.");
}else{
    alert("welcome to "+ CityName +" !!");
}


// Task 2;
var gender=prompt("Enter gender");

if(gender==="male" || gender==="Male" || gender=== "MALE"){
    alert("Good Morning sir!!");
}
else if(gender==="female" || gender==="Female" || gender==="FEMALE"){
    alert("Good Morning Ma'am")
}
else{
    alert("please enter correct option!!");
}

// Task 3;

var color=prompt("Enter Signal color");
if(color==="red" || color==="Red" || color==="RED"){
    alert("Must Stop !!");
}else if(color==="yellow" || color==="Yellow" || color==="YELLOW"){
    alert("Ready to move !!");
}else if(color==="green" || color==="Green" || color==="GREEN"){
    alert("Move now!!");
}else{
    alert("Please enter signal color.");
}

// Task 4;

var fuel_OF_car=prompt("Enter remaining Fuel of car in liters");

if(fuel_OF_car<"0.25 liters" || fuel_OF_car<"0.25"){
    alert("Please refill the fuel in your car");
}else{
    alert("Thank you for coperate!!");
}

// Task 5;

// a)
var a = 4;
 if (++a === 5){ alert("given condition for variable a is true"); } // alert massege is running

// b)
var b = 82;
 if (b++ === 83){ alert("given condition for variable b is true"); } // not running condition false

// c)
var c = 12;
 if (c++ === 13){
      alert("condition 1 is true"); } // not running
  if (c === 13){
       alert("condition 2 is true"); } // condition 2 is true
   if (++c < 14){
        alert("condition 3 is true"); } // not running
 if(c === 14){
      alert("condition 4 is true"); } // condition 4 is true

// d)
 var materialCost = 20000;
 var laborCost = 2000;
 var totalCost = materialCost + laborCost;
 if (totalCost === laborCost + materialCost){  // condition running (true)
     alert("The cost equals"); 
    }

// e)
if (true){ alert("True"); }  // running
if (false){ alert("False"); } // not running

// f)
if("car" < "cat"){ alert("car is smaller than cat"); } //running

// Task 6;
// html

// Task 7;

var number=6;
var guessNumber=+prompt("Guess the number..\n [Hint: number is in between 1-10]");

if(guessNumber===6){
    alert("Bingo! Correct answer");
}else if(guessNumber===5 || guessNumber===7){
    alert("Close enough to the correct answer.");
}else if(guessNumber===1 || guessNumber===2 || guessNumber===3 || guessNumber===4 || guessNumber===8 || guessNumber===9 || guessNumber===10) {
    alert("Wrong!!! better Luck next time .");
}else{
    alert("enter number or enter number between range");
}


// Task 8;

var number=+prompt("Enter a number");
if(number%3==0){
    alert("Number is divisible by 3");
}
else{
    alert("Number is not divisible by 3");
}

// Task 9;

 var number=+prompt("Enter a number");
 if(number%2==0){
     alert(" "+ number +" is Even number ");

 }else {
     alert(" "+number +" is odd number ");
 }


// Task 10;

 var Temperature=+prompt("Enter temperature");
 if(Temperature>40){
     alert("It is too hot outside.");
 }else if(Temperature>30){
    alert("The Weather today is Normal.”");
}else if(Temperature>20){
    alert("Today’s Weather is cool.”");
}else if(Temperature>10){
    alert("OMG! Today’s weather is so Cool.”");
}

// Task 11;


var number1=+prompt("enter 1st number");
var number2=+prompt("enter 2nd number");
var sign=prompt("enter sign");

document.write("1st number : "+ number1 +" </br>");
document.write("2nd number : "+ number2 +" </br>");
document.write("Sign is : "+ sign +" </br>");
if(sign==='+'){
    var result=number1 + number2;
    document.write("Result :  "+ number1 +" "+ sign +" "+number2 +" = "+ result);

}else if(sign==='-'){
    var result=number1 - number2;
    document.write("Result : "+ number1 +" "+ sign +" "+number2 +" = "+ result);

}else if(sign==='*'){
    var result=number1 * number2;
    document.write("Result :  "+ number1 +" "+ sign +" "+number2 +" = "+ result);

}else if(sign==='/'){
    var result=number1 / number2;
    document.write("Result :  "+ number1 +" "+ sign +" "+number2 +" = "+ result);

}else if(sign==='%'){
    var result=number1 % number2;
    document.write("Result :  "+ number1 +" "+ sign +" "+number2 +" = "+ result);

}


// Chapter 12 13;

// Task 1;

var character = prompt("Enter chharacter");
var input=character.charCodeAt(character);
 if(input >=65 && input <=90){
     alert(character+" is Upper case letter");
 }
 if(input >=97 && input <=122){
    alert(character+" is lower case letter");
}
else{
    alert(character+" is number");
}

// Tast 2;
var num_1= prompt("Enter 1st number");
var num_2= prompt("Enter 2nd number");
if(num_1 > num_2){
    alert(num_1+" is greater");
}
if(num_2 > num_1){
    alert(num_2+" is greater");
}
if(num_1 === num_2){
    alert("Both number are equal");
}

// Task 3;

var num_1= prompt("Enter a number");

if(num_1 > 1){
    alert(num_1+" is positive");
}
if(num_1 <= -1){
    alert(num_1+" is negative");
}
if(num_1 == 0){
    alert("number is 0");
}

// Task 4;

var character= prompt("Enter a character");

if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ||character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U'){
    alert("true");
}
else{
    alert("False");
}

// Task 5;

var My_password="lihaz123";
var pASSword=prompt("Enter password");
if(pASSword === My_password){
    alert("Correct! The password you entered matches the original password.");
}
else if(pASSword == ""){
    alert("Please enter your password.");
}
else
if(pASSword != My_password){
    alert("Incorrect password");
}

// Task 6;

var hour=13;
if(hour < 18){
    alert("Good day")
}else{
    alert("Good evening");
}

// Task 7;

var time=+prompt("Enter time.\nclock format like: 1900 = 7pm.");

if(time >= 0000 && time < 1200){
  alert("Good Morning!");
}else if(time >= 1200 && time < 1700){
    alert("Good Afternoon!");
  }else if(time >= 1700 && time < 2100){
    alert("Good Evening!");
  }else if(time >= 2100 && time<2359){
    alert("Good night!");
  }




// Chapter 14-16;
// Assignment 13-15;



// Task 1;

var student_Name=[];

// Task 2;

var student_Name= new Array();

// Task 3;

var student_Name=["lihaz", "ali", "shah"];

// Task 4;

var student_Roll_num=["1","2","3","4"];

// Task 5;

var boolean_Array=[true,false];

// Task 6;

var student_Name_0r_rollnum=["lihaz",1234,"Ali",6789,true];

// Task 7;
// html

// Task 8;

var student_Name= [];                  //array initialize for name
var student_Score=[];                 //array initialize for score
var percentage=[];                   //array initialize for percentage calculation
var size = 3; //Maximum Array size
var totalMarks=500;

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	student_Name[i] = prompt('Enter Name ' + (i+1));
	student_Score[i] = prompt('Enter Score ' + (i+1));
}
for(var k=0; k<size; k++){
   percentage[k]=student_Score[k]/totalMarks *100;
}
//Print the array in the console.
for(var j=0; j<size; j++){
document.write("Score of "+student_Name[j]+" is "+student_Score[j]+". percentage :"+percentage[j]+"% </br>");
}

// Task 9;

var color=["Red","Blue","Green"];
document.write("initial array </br>");
console.log("initial array \n");
for(var i=0;i<color.length;i++){
console.log(color[i]);
document.write("</br>"+color[i]+" </br>");
}


var add_Start=prompt("enter color to add at start");
color.unshift(add_Start); //adding color at start
document.write("After adding a color at start</br>");
console.log("After adding a color at start\n");
for(var i=0;i<color.length;i++){
    console.log(color[i]);
    document.write(" </br>"+color[i]+"  </br>");
    }

    var add_end=prompt("enter color to add at end");
color.push(add_end); //adding colorat end
document.write("After adding a color at end</br>");
console.log("After adding a color at end\n");
for(var i=0;i<color.length;i++){
    console.log(color[i]);
    document.write(" </br>"+color[i]+"  </br>");
    }

    var add_Start1=prompt("enter one color to add at start");
    var add_Start2=prompt("enter another color to add at start");
color.unshift(add_Start1); //adding two color at start add1
color.unshift(add_Start2); //adding two color at start add2
document.write("After adding two color at start</br>");
console.log("After adding two color at start\n");
for(var i=0;i<color.length;i++){
    console.log(color[i]);
    document.write(" </br>"+color[i]+"  </br>");
    }

    var delete_Start=prompt("press enter or ok for delete first color");
    color.shift(delete_Start); //delete color at start
    document.write("After deleted a color at start</br>");
    console.log("After deleted a color at start\n");
    for(var i=0;i<color.length;i++){
        console.log(color[i]);
        document.write(" </br>"+color[i]+"  </br>");
        }

        var delete_last=prompt("press enter or ok for delete last color");
    color.pop(delete_last); //delete color at start
    document.write("After deleted a color at end</br>");
    console.log("After deleted a color at end\n");
    for(var i=0;i<color.length;i++){
        console.log(color[i]);
        document.write(" </br>"+color[i]+"  </br>");
        }

        var Add_Any_position_index=+prompt("Enter color at any position\nplease enter index");
        var color_name=prompt("enter color name");
    color.splice(Add_Any_position_index,0,color_name); //add color at any position
    document.write("After add a color at "+Add_Any_position_index+"position </br>");
    console.log("After add a color at "+Add_Any_position_index+" position\n");
    for(var i=0;i<color.length;i++){
        console.log(color[i]);
        document.write(" </br>"+color[i]+"  </br>");
        }

        var delete_color_at_Any_index=+prompt("Enter index where you delete color");
        var How_many_color=+prompt("enter number how many color you delete");
    color.splice(delete_color_at_Any_index,How_many_color); //delete color(s) at any position
    document.write("After deleted  color(s) from "+delete_color_at_Any_index+" position to "+How_many_color+" position </br>");
    console.log("After delete color(s) from "+delete_color_at_Any_index+" position to "+How_many_color+" position\n");
    for(var i=0;i<color.length;i++){
        console.log(color[i]);
        document.write(" </br>"+color[i]+"  </br>");
        }





// Task 10;

var student_Score=[];
var size=5;

for(var i=0; i<size; i++) {
	//Taking Input from user
	student_Score[i] = prompt('Enter Score ' + (i+1));
}
document.write(student_Score.sort()); // for sorting i n assending order



// Task 11;

 var cities=["karachi","Lahore","Islamabad","Quetta","Peshawer"];
 document.write("Cities list.</br></br> ");
 for(var i=0; i<cities.length; i++){
   document.write(cities[i]+" </br>");
}
var selected_Cities=cities.slice(1,4);
document.write("</br>selected cities </br></br>");
document.write(selected_Cities);

// Task 12;

var arr = ["This","is","my", "cat"];
document.write("Array </br>");
document.write(arr);
var sentence=arr.join(" ");
document.write("</br></br> String </br>");
document.write(sentence);


// Task 13; //FIFO

var devices=[];
var size=5;
document.write("Devices:</br></br>");
for(var i=0; i<size; i++) {
// 	//Taking Input from user
    devices[i] = prompt('Enter device ' + (i+1));
    console.log(devices[i]);
    document.write(" "+devices[i]+" ,");
}
for( var j=0; j<size; j++){
var choice=+prompt("enter your choice\n 1-----> for delete device\n  0-----> for printing");
if(choice=== 1){
var deleted=devices.shift();
document.write("</br> Out: </br>");
document.write(deleted+" </br>");
}else if(choice === 0){
    document.write("Devices in list:</br>");
document.write(" </br> "+devices+" ,</br>");
size--;
}
}

// Task 14; //  LIFO

var devices=[];
var size=5;
document.write("Devices:</br></br>");
for(var i=0; i<size; i++) {
// 	//Taking Input from user
    devices[i] = prompt('Enter device ' + (i+1));
    console.log(devices[i]);
    document.write(" "+devices[i]+" ,");
}
for( var j=0; j<size; j++){
var choice=+prompt("enter your choice\n 1-----> for delete device\n  0-----> for printing");
if(choice=== 1){
var deleted=devices.pop();
document.write("</br> Out: </br>");
document.write(deleted+" </br>");
}else if(choice === 0){
    document.write("Devices in list:</br>");
document.write(" </br> "+devices+" ,</br>");
size--;
}
}


// Task 15;
// html



// Chapter 17-20;


// Task 1;

var arr=[
    [1],
    [2],
    [3],
    [4],
          ];

// Task 2;

var arr=[            ///// 2D array
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1],
];
document.write("2D Array:</br>");
for(var i=0; i<arr.length ; i++){

    for( var j=0 ; j< arr.length+1 ; j++){
        document.write(" "+arr[i][j]);
    }
    document.write("</br>");
}

// Task 3;

for( var i=1; i<=10 ; i++){  // counting 1-10
    document.write(i+" </br>");
}


// Task 4;

var number=+ prompt("enter number");         //////// table of any num from any length
var length=+ prompt("Enter length of table");
if(number>=1 ){
     document.write("Table of "+" "+number +"</br> Length "+ length+ " </br></br>");
     for(var i=1; i<=length ;i++)
     {
        document.write(" "+ number + " X " + i + " = " + number*i + "</br>");
      }
}


// Task 5;

var fruit=["Apple","Mango","Banana","Orange","strawberry"];
document.write("Fruits name:</br></br>");
for(var i=0 ; i< fruit.length; i++){
    document.write(""+ fruit[i] +" </br>");
}
document.write("</br>");

for( var i=0 ; i<fruit.length; i++){
    document.write(" Element of index "+ i +" is "+ fruit[i]+" </br>");
}

// Task 6;

document.write("Counting: </br></br>"); //a)
for(var i=1; i<=15; i++){
    document.write(i+", ");
}

document.write("</br></br> Reverse Counting: </br></br>"); //b)
for(var j=10; j>=1; j--){
    document.write(j +", ");
}

document.write("</br></br> Even Counting: </br></br>"); //c)
for(var i=0 ;i <= 20; i=i+2){
    document.write(i +", ");
}

document.write("</br></br> odd Counting: </br></br>"); //d)
for(var i=0 ;i <= 20; i++){
    if(i%2!=0){
        document.write(i +", ");
    }
}
document.write("</br></br> Series: </br></br>"); //c)
for(var i=2 ;i <= 20; i=i+2){
    document.write(i +"k, ");
}


// Task 7;

var arr=["cake","pine apple","cookie","chips","patties"];

var input=prompt("Enter iteam name");


    // console.log(arr[0]);
    if(input === "cake"){
        alert(input+" is available at index  0  in our bakery");

    }
    
    if(input === "pine apple"){
        alert(input+" is available at index  1  in our bakery");

    }
    
    if(input === "cookies"){
        alert(input+" is available at index  2  in our bakery");

    }
   
    if(input === "chips"){
        alert(input+" is available at index  3  in our bakery");

    }
    
    if(input === "patties"){
        alert(input+" is available at index  4  in our bakery");

    }
  
    else{

        alert("We are sorry, "+ input + " is not available in our bakery.");
    
    }


// Task 8;

  var arr=[];                     // finding large value
  var size=5;                
  for( var i=0 ; i<size ; i++){
      arr[i]=+prompt("Enter number "+(i+1));
  }

var max_value = arr[0];

for(var i=0;i<5; i++){
    if(arr[i]>max_value){
        max_value=arr[i];
    }
}
document.write("Array items: </br> </br>");
document.write(arr+", </br></br>");
document.write("</br> The Largest number is : "+ max_value);

// Task 9;

  var arr=[];                     // finding smallest value
  var size=5;                
  for( var i=0 ; i<size ; i++){
      arr[i]=+prompt("Enter number "+(i+1));
  }

var min_value = arr[0];

for(var i=0;i<5; i++){
    if(arr[i]<min_value){
        min_value=arr[i];
    }
}
document.write("Array items: </br> </br>");
document.write(arr+", </br></br>");
document.write("</br> The smallest number is : "+ min_value);


// Task 10;

document.write("Multiples of  5 (Range: 1-100) </br>"); //// multiples of 5 (Range :1-100)
for( var i=1; i <= 100; i++){
    if(i%5==0){
        document.write(i+" , ");
     }
    }






// chapter # 21-25(Strings Methods)
// Assignment # 21-25

// Task # 1

var firstName = prompt("enter your First name");
var lastName = prompt("enter your Last name");

var fullName= firstName +" "+ lastName ;
alert("Hello "+fullName);

// Task # 2

var mobileModle = prompt("enter your Favorite Mobile MOdel");
var lengthofString = mobileModle.length;   //name.length for finding length of string
document.write("My Favorite phone is : "+ " " + mobileModle);
document.write("</br> Length of string : "+ lengthofString);

// Task # 3

var text = "pakistani";
var index = text.indexOf("n");
document.write("String : pakistani. </br>")
document.write("Index of ' n ' is :"+index);

// Task # 4

var text = "Hello World";
var lastIndex = text.lastIndexOf("l");
document.write("String : Hello World </br> Last index of 'l' is :"+lastIndex);

// Task # 5

var text = "pakistani";
var char_ATindex= text.charAt(3);
document.write("String : pakistani </br> Character at index 3 is :"+char_ATindex);

// Task # 6

var firstName = prompt("enter your First name");
var lastName = prompt("enter your Last name");
var fullName = firstName.concat(" " +lastName);  // using concat() method
alert(fullName);

// Task # 7

var city = "Hyderabad";
var replace = city.replace("Hyder", "Islam"); // name.replace() method use for replacing 
document.write("city : Hyderabad </br> After replacement :"+replace );

// Task # 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
var replace = message.replace(/and/g,"&");
document.write("Massage : Ali and Sami are best friends. They play cricket and football together. </br> After replacement :"+replace);

// Task # 9

var string="472";
var convert =Number(string);// convert string into number using ( Number() / parseInt())
document.write("value :"+string+" </br> type : string </br> value :"+convert+"</br> type: Number");
console.log(string );
console.log(convert );

// Task # 10

var input =prompt("Enter a word");
var caseChange= input.toUpperCase(); // .toUppercase
document.write("INPUT :"+ input +"</br> Upper Case : "+ caseChange);

// Task # 11

var input =prompt("Enter a word");
var caseChange= input.toLowerCase(); // .toLowercase
document.write("INPUT :"+ input +"</br> titel Case : "+ caseChange);

// Task # 12

var num =12.45;
var convert= num.toString();
alert("number is : 12.45");
var replace = convert.replace(".","");// using replace( ) method for removing dot(.)
alert("After removing dot number is :"+replace);

// Task # 13

var name = prompt("Enter your name");
 
for(var i=0; i<=name.length; i++){
    if( name[i]=== '!' || name[i]=== ',' || name[i]=== '@' || name[i]=== '.'){
        alert("enter a valid username. ");
      
        break;

    }
}


// Task # 14


 var falg=0;
  var Array = ["cake", "apple pie", "cookie", "chips", "patties"]
 var input = prompt("Welcome  to ABC bakery . what do you went to order sir/ma'am.");
 var case_Change = input.toLowerCase();

 for( var i=0;i<Array.length ; i++){
     if(Array[i] === case_Change){
    alert(input+" is avaliable at index "+i+" in ABC bakery ");

       falg=falg+1;
     }
 }
 if(falg === 0){
     alert("We are sory "+input +" is not avaliable in our bakery");

 }



// Task # 15

var passWord = prompt("Enter password");   // password code
document.write("Entered Password :"+passWord +"</br>");
for(var i=0; i<=passWord.length; i++){
    if(passWord[0] >= 0 || passWord[0] <= 9){
        document.write("Password can not begin with a number </br> Please enter a  valid passward .");
        break;
    }
    else if(passWord[i] === '>' || passWord[i] === '<' || passWord[i] === ';' || passWord[i] === ':' || passWord[i] === '"' || passWord[i] === '?' || passWord[i] === ',' || passWord[i] === '.' || passWord[i] === '|' || passWord[i] === '`' ||  passWord[i] === '~' ||  passWord[i] === '!' ||  passWord[i] === '@' ||  passWord[i] === '#' ||  passWord[i] === '$' ||  passWord[i] === '%' ||  passWord[i] === '^' ||  passWord[i] === '&' ||  passWord[i] === '*' ||  passWord[i] === '(' || passWord[i] === ')' || passWord[i] === '-' ||  passWord[i] === '_' || passWord[i] === '=' || passWord[i] === '+' ){
    document.write("Special character are not allowed in Password </br> Please enter a valid passward .");
      break;
    }
}


// Task # 16

var university = "University of karachi";
document.write("university name : University of karachi </br> </br> ");

var split= university.split("");
for(var i=0; i<split.length; i++){
    document.write(split[i]+"</br>");
}


// Task # 17

var input = prompt("Enter a word");
var lastWord= input.slice(input.length-1,input.length);
document.write("User input : "+input+"</br> Last ward of input : "+lastWord);

// Task # 18

var flag=0;
var string = prompt("Enter a sentence this program count word 'the' or 'THE' or 'The' in your sentence  ");
var numChars = string.length;
 for (var i = 0; i < numChars; i++) {
 if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The" || string.slice(i, i + 3) === "THE"){
   flag=flag+1;
 }
 }
document.write("Text : "+string +"</br>")
 document.write("There are "+flag+" occurance(s) of ward 'the' or 'The' or 'THE' ");


// chapter # 26-30(Number methods)
// Assignment # 26-30

// Task # 1

var number = +prompt("Enter a positive flooting number");
if(number >0){
 var roundOf=Math.round(number);
 var ceil =Math.ceil(number);
 var floor = Math.floor(number);

 document.write("Number :"+number +"</br> round of value : "+roundOf+"</br> floor value : "+floor+"</br> ceil value : "+ceil );
}
else{
    document.write("Please enter positive number");
}

// Task # 2

var number = +prompt("Enter a negative flooting number");
if(number <0){
 var roundOf=Math.round(number);
 var ceil =Math.ceil(number);
 var floor = Math.floor(number);

 document.write("Number :"+number +"</br> round of value : "+roundOf+"</br> floor value : "+floor+"</br> ceil value : "+ceil );
}
else{
    document.write("Please enter negative number");
}


// Task # 3

var number = prompt("Enter a number");//absolute vale
if(number[0] === '-'){
   var convert=number.slice(1);
   document.write("absolute value of |"+number+"| is :"+convert);
}
else{
    document.write("absolute value of |"+number+"| is :"+number);
}

// Task # 4

var number =Math.random()*7;  // dice random value
var floor = Math.floor(number);
if(floor === 0){

}else{
    document.write("Random dice value :"+floor);
}

// Task # 5

var number = Math.random()*3; // coin toss
var floor = Math.floor(number);
if(floor === 1){
    document.write("1 </br> Random coin value </br> Tail");
}else if(floor === 2){
    document.write("2 </br> Random coin value </br> Head");
}else if (floor === 0) {
    floor++;
    if(floor === 1){
        document.write("1 </br> Random coin value </br> Tail");
    }
}

// Task # 6

var number =Math.random()*100;  //  random value 1-100
var floor = Math.floor(number);

document.write("Random  value between 1-100 is :"+floor);


// Task # 7

var weight = prompt("Enetr your weight in kilograms");
document.write("The User weight is : "+weight+" kilograms");



// Task # 8

 var number =6;
 var input= +prompt("Guess the number [Hint number is between 1-10]");
 if(input === number){
     alert("congratulation!")
 }else{
     alert("Try again!")
 }

// chapter # 31-34  (Dates Methods)
// Assignment # 31-34

// Task # 1

var date = new Date();
document.write(date);

// Task # 2

var monthNames=["january","Febouary","March","April","May","June","July","August","September","October","November","December"]
var date = new Date();
var month=date.getMonth();

for(var i=0; i<12; i++){
    if(month === i){
    document.write("Current month : "+monthNames[i]);
    }
}


// Task # 3

var daysName=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var date = new Date();
var day=date.getDay();
 
for(var i=0; i<daysName.length; i++){
    if(day === i){
        document.write("Today is "+daysName[i]);
    }
}


// Task # 4

var date = new Date();
var day=date.getDay();
 
if(day=== 0 || day === 6){
    document.write("it's Fun day");
}else if(day === 1){
    document.write("Today is  Mon");
}else if(day === 2){
    document.write("Today is  Tues");
}else if(day === 3){
    document.write("Today is  Wed");
}else if(day === 4){
    document.write("Today is  Thurs");
}else if(day === 5){
    document.write("Today is  Fri");
}

// Task # 5

var date = new Date();
var date=date.getDate();

if(date<=15){
    document.write("First fifteen days of the month”")
}else{
    document.write("Last days of the month.")
}

// Task # 6

var date = new Date();

document.write("Current Date : "+date);
var miliSecond = date.getTime();
document.write("</br>Elapsed milliseconds since january 1,1970 : "+miliSecond);
var minutes= miliSecond/(1000*60*60);
document.write("</br>Elapsed minutes since january 1,1970 : "+minutes);

// Task # 7

var date = new Date();
var Hours=date.getHours();
document.write(Hours);
if(Hours < 12){
    alert("Its AM");
}else{
    alert("Its PM");
}

// Task # 8

var Laterdate =new Date();
var monthSet=Laterdate.setMonth(11);
var dateSet=Laterdate.setDate(31);
var setTime=Laterdate.setHours(0);
var setMinutes=Laterdate.setMinutes(0);
var setSeconds=Laterdate.setSeconds(0);
var setMiliSec=Laterdate.setMilliseconds(0);
document.write(Laterdate);

// Task # 9

var date = new Date(2020, 3, 24); // 24 April 2020 1st ramzan
document.write( "1st Ramzan was on "+date+"</br>");
var date1=new Date(); 
var numberOfDays = Math.ceil((date1 - date) /(1000*60*60*24) ); // gives num of days 
document.write(numberOfDays+" days passed since 1st Ramazan")


// Task # 10

var currentDate= new Date();
var time = currentDate.setFullYear(2015);//set year
var seconds= time/(1000*60) // convert into milisec to second
var round=Math.floor(seconds);// round of
document.write("On reference date "+currentDate+",</br>"+round+" seconds had passed since beginning of 2015");


// Task # 11

var currentDate= new Date();   // 1 hour back time
var a_HOur_Back= new Date();
var hour =a_HOur_Back.getHours();
hour=a_HOur_Back.setHours(hour-1);
document.write("Current date : "+currentDate+"</br> 1 Hour ago , it was "+a_HOur_Back);


// Task # 12

var currentDate= new Date(); // 100 year back
var  years_Back= new Date();
var year =years_Back.getFullYear();
yearr=years_Back.setFullYear(year-100);
alert("Current date : "+currentDate+"\n 100 years ago , it was "+years_Back);

// Task # 13
                      // age calculater
  var input = prompt("Enter your age");
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  year=year-input;
  document.write("Your age is  "+input+" </br> Your Birth Year is "+year);


// Task # 14


document.write("</br></br><!-- <h1>K-Electric Bill</h1> --></br></br>");

var monthNames=["january","Febouary","March","April","May","June","July","August","September","October","November","December"]
var customerName = prompt("Enter customer name");// get name

var currentdate= new Date();// for seting of month
var month=currentdate.getMonth();
for(var i=0; i<12; i++){
    if(month === i){
      month=monthNames[i];
    }
}

var numberOFunits=+prompt("Enter Total Number of Units");// get units
var chargePERunits=prompt("Enter Charge per Units");// get amount per unit
var netAmount= numberOFunits * chargePERunits;
var latePamentsurCharge=350;
var grossAmount= netAmount + latePamentsurCharge;

document.write("Customer Name :"+customerName+" </br> Month : "+month+"<br> Number of Units : "+numberOFunits+" units</br> Charge per unit : "+chargePERunits+"</br></br> Net Amount payable(within due date) : "+netAmount+"</br> Late payment Surcharge : "+latePamentsurCharge+"</br> Gross Amount payable(After due date) : "+grossAmount);


// chapter # 35-38  (functions)
// Assignment # 35-38

// Task # 1

 function dateTime(){
     var date=new Date();
     document.write(date);
 }
dateTime();

// Task # 2

function fullName(){
    var FirstN=prompt("Enter your FirstName");
    var LastN=prompt("Enter your LastName");
    // alert("Hwllo "+FirstN.concat(" "+LastN)); // through method concat()
    var FullN=FirstN+LastN;// without method
    alert("Hello "+FullN);

}
fullName();

// Task # 3

function add(no1,no2 = 0){
    return (no1 + no2);
}
var no1=+prompt("enter 1st number");
var no2=+prompt("enter 2nd number");
var sum = add(no1,no2);
alert("Addition of "+no1+" and "+ no2 +" is :"+sum);

// Task # 4

function calculator(no1,no2 = 0, operator ){
    switch(operator){
        case '+':
            return (no1 + no2);
        case '-':
            return (no1 - no2);
        case '*':
            return (no1 * no2);
        case '/':
            return (no1 / no2);
        case '%':
            return (no1 % no2);
        default:
            alert("Please Enter Valid operator.");           
    }
    
}
var no1=+prompt("enter 1st number");
var operator=prompt("enter operator");
var no2=+prompt("enter 2nd number");
var result= calculator(no1,no2,operator);
alert("Result of "+no1+" "+operator+" "+ no2 +" is :"+result);


// Task # 5

function square(no){
    return(no*no);
}
var no = +prompt("Enter a number this functiom gives you square of your number");
var result=square(no);
alert("Square of "+no+" is : "+result);

// Task # 6

function Factorial(n) { 
    var ans=1; 
      
    for (var i = 2; i <= n; i++) {
        ans = ans * i; 
    }

    return ans; 
} 
  
var no = prompt("Enter a number")
var  result = Factorial(no);
alert("Factorail of "+ no +" is : "+result);

// Task # 7

function counting(){
    var startNo =+prompt("Enter start number");
    var endNo =+prompt("Enter end number");
    document.write("Counting form "+startNo+" to "+endNo+"</br></br>");
    for(var i=startNo;i<=endNo; i++){
       document.write(i+" </br>");
    }
}
counting();

// Task # 8

function Hypotenuse(){
    
    var base = prompt("Enter base of a triangle");
    var perpandicular = prompt("Enter perpendicular of a triangle");
     function square(base,perpandicular){
        return ((base*base) + (perpandicular*perpandicular));

     }
  
     document.write("Hypotenus of a triangle are : "+square(base,perpandicular));
}
 Hypotenuse();

// Task # 9

function area_Of_a_Rectangle(width,height =0){
    var Area = width * height;
    document.write("</br>width = "+width+" height = "+ height+"</br>")
    document.write("Area of a rectangle are : "+Area+"</br>");
}
area_Of_a_Rectangle(3,4);// passing value 
var width = prompt("Enter width");
var height=prompt("Enter height");
area_Of_a_Rectangle(width,height);// passing variable

// Task # 10

function checkingForpalandrome(string){
  var check="";
  for(var i=string.length-1;i>=0;i--){
      check += string[i]; // concatination
  }
  if(check === string){
      alert(string+" is palandrome ");
  }else{
    alert(string+" is not palandrome ");
  }
}
var word=prompt("Enter a word");
checkingForpalandrome(word);

// Task # 11

function firstWorduppercase(string){
    var firstWord=string.slice(0,1)
    var OtherWord=string.slice(1);
    var convert = firstWord.toUpperCase();
    var convertedString= convert+OtherWord;
    document.write("Example string : "+string+"</br> Expected output : "+convertedString);
}
var input = prompt("Enter  string");
firstWorduppercase(input);

// Task # 12

 function largeWord(string){
     var split = string.split(' ');
     var lengthOFlongestWord=0
      var longestWord=0;
     document.write("your input  String  ' "+string+"' </br> </br>");
     for(var i=0; i<split.length;i++){
           if(split[i].length> longestWord){
               longestWord = split[i];
               lengthOFlongestWord=split[i].length;// length of longestword
            }
           
        }
        return longestWord;
    }
 var input = prompt("Enter string");
 var result=largeWord(input);
 document.write(" The longest word in this string is: "+result)


// Task # 13

function charCount(string,letter){
    var flag=0;
    
    for(var i=0;i<string.length;i++){
        if(string[i] === letter){
            flag=flag+1;
        }
    }
    document.write("String : "+string+"</br>"+flag+" time occurance(s) of letter "+letter);
}
var string=prompt("Enter string");
var character=prompt("Enter a character \n check for uppercase character or loercase character ");
charCount(string,character);

// Task # 14

function calcArea(radius){ // function for Area
    var area_OF_circle = 3.142 * (radius*radius)
    return area_OF_circle;
   
}// ending area function

function calcCircumference(radius){ // function for circumference
    var circumference = 2 * 3.142 * radius;
    return circumference;
}// ending circumference function

function circle(){ // main function of circle this function call both function o
    var result;
    var number=+prompt("for finding Area of circle press 1 \n for finding circumference of circle press 2 "  );
    var radius = + prompt("Enter radius of circle");

  switch(number){

     case 1:
       result=calcArea(radius);
       alert("Area of a circle is : "+result);
       break;
    case 2:
       result=calcCircumference(radius);
       alert("Circumference of a circle is : "+result);
       break;
   }// ending switch
}// ending circle function
circle();// calling function in main









//chapter 38-42
// assignment 38-42

//tast # 1

 function power(a,b){
    var result= Math.pow(a,b);
     alert("num1 is :"+a+"\n num2 is :"+b+"\npower "+a+" raised to "+b+" is :"+result);

 }
 var num1 = prompt("enter no1");
 var num2 = prompt("enter no2");
 power(num1,num2);

//tast # 2

function leapYear(input){
    if(input%4==0){
        alert(input+" is leapyear ");
    }
    else{
        alert(input+" is not a leapyear ");
    }
}
var input = prompt("Enter a year to b checked ");
leapYear(input)

//tast # 3

// area of triangle
// given
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2

function calculate_S(a,b,c){// calculating S =( a + b + c ) / 2;

    var s = ( a + b + c ) / 2;
    return s;
  
}
function Area_of_triangle(s,a,b,c) // CALCULATING AREA of Triangle
{    
    var areaa = s*(s-a)*(s-b)*(s-c);
    alert("side a : "+a+"\nside b : "+b+"\nside c : "+c+"\nArea of triangle is :" + areaa + " metersq");
    
}
 
var a = +prompt("Enter a side of triangle ");
var b = +prompt("Enter b side of triangle ");
var c = +prompt("Enter c side of triangle ");
 var s = calculate_S(a,b,c);
 Area_of_triangle(s,a,b,c);


//tast # 4



function Main(sub1,sub2,sub3){// main function
    var percent=percentage(sub1,sub2,sub3);// call % fun
    var avg_Mark=avrage_marks_of_3_Subjects(sub1,sub2,sub3); // call avg fun

    alert("subject1 mark : "+sub1+"\nsubject2 mark : "+sub2+"\nsubject3 mark : "+sub3+"\nPercentage of all subjects : "+percent+" %\nAvrage of all subjects is : "+avg_Mark);


}

function percentage(sub1,sub2,sub3){ // calculating %

    var total_Mark_of_3_subjects=300;
    var percentagee= ((sub1+sub2+sub3)/total_Mark_of_3_subjects)*100;
    return percentagee;
}

function avrage_marks_of_3_Subjects(sub1,sub2,sub3){ // calculating avg marks

    var avg = sub1+sub2+sub3/3;
    return avg;
}

var sub1 = + prompt("Enter sub1 mark");
var sub2 = + prompt("Enter sub2 mark");
var sub3 = + prompt("Enter sub3 mark");
Main(sub1,sub2,sub3);


//tast # 5

function our_index_of_function(string){
var flag =0;
    var find_location_of_single_character =prompt("Enter asingle character")
    for(var i=0 ; i<string.length ;i++)
    {
        if(string[i] == find_location_of_single_character){
             alert("(1st occurance)The character  "+find_location_of_single_character+" is present  at position :"+i+" in below string \n "+string);
               flag++;
            }
        
    }
    if(flag == 0){
        alert("character "+find_location_of_single_character +" not found in below string \n"+string);
    }
    
}
var input = prompt("Enter a string max_length 25");
our_index_of_function(input);



//tast # 6

function delete_Vowels(string){  // deleting all vowels
    var deleting_a=string.replace(/a/g,""); // delete a from string
    var deleting_e=deleting_a.replace(/e/g,"");// delete e from string
    var deleting_i=deleting_e.replace(/i/g,"");// delete i from string
    var deleting_o=deleting_i.replace(/o/g,"");// delete o from string
    var deleting_u=deleting_o.replace(/u/g,"");// delete u from string
    var deleting_A=deleting_u.replace(/A/g,"");// delete A from string
    var deleting_E=deleting_A.replace(/E/g,"");// delete E from string
    var deleting_I=deleting_E.replace(/I/g,"");// delete I from string
    var deleting_O=deleting_I.replace(/O/g,"");// delete O from string
    var deleting_U=deleting_O.replace(/U/g,"");// delete U from string
    alert("your input string is : "+string +"\n After removing vowels the string becomes \n "+deleting_U);
}
var input = prompt("enter a strings");
delete_Vowels(input);

// tast # 7

function Count_Double_Vowels(String){
var i=0;

document.write("input string is :"+String+"</br>");
document.write("Such accurance are ");

for(i=0;i<String.length;i++)
  {
     switch(i<String.length)
     {
        case (String[i] == 'a' || String[i] == 'e'|| String[i] == 'i' || String[i] == 'o' || String[i] == 'u'||String[i] == 'A' ||String[i] == 'E' || String[i] == 'I' || String[i] == 'O' || String[i] == 'U'  ):
        // check 1at vowel
            if( String[i+1] == 'a' || String[i+1] == 'e'|| String[i+1] == 'i' || String[i+1] == 'o' || String[i+1] == 'u'||String[i+1] == 'A' ||String[i+1] == 'E' || String[i+1] == 'I' || String[i+1] == 'O' || String[i+1] == 'U')
          {// checked 2nd
            var d_vowels = String.slice(i,i+2);
           
            document.write(d_vowels+" ,");
          }  // ending if
         break;
        
     }// ending switch
    
  }// ending for


}//end function

var input = prompt("Enter some text");
Count_Double_Vowels(input);


//tast # 8



function Distance_in_meter(distance_in_km){
    var distance_in_meter= distance_in_km*100;
    
    return distance_in_meter;
}
function Distance_in_feet(distance_in_meter){
    var distance_in_feet= distance_in_meter*3.28;
   
    return distance_in_feet;
}
function Distance_in_inches(distance_in_feet){
    var distance_in_inches= distance_in_feet*12;
   
    return distance_in_inches;
}
function Distance_in_cm(distance_in_inches){
    var distance_in_cm= distance_in_inches*2.54;
  
    return distance_in_cm;
}

function Distance_between_Two_cities(distance_in_km){
    while(distance_in_km != 0)
    {

      alert("1. for showing distance in meter \n2. for showing distance in feet \n3. for showing distance in inches \n4. for showing distance in cm\n5. for showing distance in All\n0. for Exir\n ");
      var choice = +prompt("Enter your choice");
        switch(choice){
            case 1:
                var D_in_meter=Distance_in_meter(distance_in_km);
                alert("Distance _between two cities in  meter are : "+D_in_meter+" meter");
                break;
    
            case 2:
                var D_in_feet=Distance_in_feet(D_in_meter);
                alert("Distance _between two cities in  feet are : "+D_in_feet+" feet");
                break;
             case 3:
                var D_in_inches=Distance_in_inches(D_in_feet);
                alert("Distance _between two cities in  inches are : "+D_in_inches+" inches");
                break;
            case 4:
                var D_in_cm=Distance_in_feet(D_in_inches);
                alert("Distance _between two cities in  cm are : "+D_in_cm+" cm");
                break;    
            case 5:
                var D_in_meter=Distance_in_meter(distance_in_km);
                var D_in_feet=Distance_in_feet(D_in_meter);
                var D_in_inches=Distance_in_inches(D_in_feet);
                var D_in_cm=Distance_in_feet(D_in_inches);
                alert("Distance _between two cities in  Kilometer are : "+distance_in_km+" Km\nDistance _between two cities in  meter are : "+D_in_meter+" meter\nDistance _between two cities in  feet are : "+D_in_feet+" feet\nDistance _between two cities in  iniches are : "+D_in_inches+" inches\nDistance _between two cities in  cm are : "+D_in_cm+" cm\n");
              break;
    
            case 0:
                distance_in_km = 0;
                break;

            default :
            alert("please enter correct choice!!!");
                
    
        }//ending switch

    }//ending while
    
}///ending distance function

var distance_in_km=prompt("Enter distance in km");
Distance_between_Two_cities(distance_in_km);


//tast # 9

function overtimepayment(input)
{ var OVERtimePayment =0;

   do
    {
        if(input>40){
            OVERtimePayment = OVERtimePayment + 12.00; // increment overtimr Rs
            input--;
           
        }
        else {
            alert("Employee worked only "+input+" hour . not overtime ,\n");
            input=0;
        }
        
    } while(input>40);//ending do while loop
    

    alert("Employee Overtime payment will be Rs : "+OVERtimePayment);
}//ending function

var input = +prompt("Enter Employee Total worked hour");
overtimepayment(input);


//tast # 10

function withdrawn(input)
{
    var storeinput= input;
  var hundred=0;
  var fifty=0;
  var ten=0;
    while(input>=10)
    {
        if(input>=100){
          hundred++;
           var input = input-100;

        }
        else if(input>=50){
            fifty++;
            var input = input-50;

        }
        else if(input>=10){
            ten++;
            var input = input-10;
        }
    }// ending while

    alert("Your input withdrawn amount is "+storeinput+"\nYou will have "+hundred+" Hundred notes "+fifty+" Fifty notes "+ten+" Ten notes and "+input+" ruppes")
}// ending function

var input = +prompt("Enter amount to withdraen.");
withdrawn(input);



//chapter 43-48
// assignment 43-48

 // task # 1

function showingAlertonclick(){
    alert("Hellow!!");
}

 // task # 2

function alertshow(){
    alert("Thanks for purchasing phone from us");
}

 // task # 3

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }

 // task # 4

function changeimage(id,src){
    var image = document.getElementById(id);
    image.src = src;
}

 // task # 5

var count = 0;
function counterincrease(){
    var input= document.getElementById('input')
 count = count + 1;
 input.value=count;

}

function counterdecrease(){
    var input= document.getElementById('input')
    count = count - 1;
    input.value=count;
   
   }


//chapter 49-52
// assignment 49-52

 // task # 1

function submit()///email fun
{
var input = document.getElementById("val");
var tag = document.createElement("p");
var text = document.createTextNode(input.value);
tag.appendChild(text);
var massage = document.getElementById("masseges");
massage.appendChild(tag);


input.value=" ";/// for clear input

}


function submitp()//passsward fun
{
var input = document.getElementById("val_p");
var tag = document.createElement("p");
var text = document.createTextNode(input.value);
tag.appendChild(text);
var massage = document.getElementById("masseges");
massage.appendChild(tag);


input.value="";/// for clear input

}


 // task # 2

function readmore(){
    var text =document.getElementById('text').innerHTML;
    var paragraph = document.getElementById('para');

    paragraph.innerHTML=text;
}
function readmore1(){
    var text =document.getElementById('text1').innerHTML;
    var paragraph = document.getElementById('para1');

    paragraph.innerHTML=text;
}


// task # 3// this task code is not working a/c to given task 

function sName()///email fun
{
var input = document.getElementById("name");
var tag = document.createElement("p");
var text = document.createTextNode(input.value);
tag.appendChild(text);
var massage = document.getElementById("masseges");
massage.appendChild(tag);


input.value=" ";/// for clear input

}


function roll()//roll num fun
{
var input = document.getElementById("roll");
var tag = document.createElement("p");
var text = document.createTextNode(input.value);
tag.appendChild(text);
var massage = document.getElementById("masseges");
massage.appendChild(tag);


input.value="";/// for clear input

}

function S_class()//class fun
{
var input = document.getElementById("class");
var tag = document.createElement("p");
var text = document.createTextNode(input.value);
tag.appendChild(text);
var massage = document.getElementById("masseges");
massage.appendChild(tag);


input.value="";/// for clear input

}


//chapter 52-57
// assignment 52-57

 // task # 1


    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById('myImg');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
     function img_click(src) 
    {
        var close = document.getElementById('close');
        modal.style.display = "block";
        modalImg.src = src;
        close.style.fontSize='80px';
        close.style.color='gray'
        close.style.marginLeft='1010px';
        var Body= document.getElementById('body')
        Body.style.backgroundColor ='gainsboro';
             

        
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close");

    // When the user clicks on <span> (x), close the modal
    function span_click()
     {
        
        modal.style.display = "none";
        var Body= document.getElementById('body');
        Body.style.background ="none";
        
    }

    // task # 2
    
    var count= 20;
    function increment()// font increment button
    {
        count= count+10;
      var paragraph= document.getElementById('para');
       paragraph.style.fontSize=count + "px";
       
    
    }
    
    function decrement()// font  decrement button
    {
        count= count-10;
      var paragraph= document.getElementById('para');
       paragraph.style.fontSize=count + "px";
       
    
    }
    




//chapter 58-69
// assignment 58-69
 
// task # 1

// i. Get element of id “main-content” and assign them in a variable.

var main_contant = document.getElementById('main-content');

 // ii. Display all child elements of “main-content” element.

console.log(main_contant.childNodes)

//iii. Get all elements of class “render” and show their innerHTML in browser.

var classs = document.getElementsByClassName('render');// here we target through  className
document.write("</br></br>All elements of class render and  their innerHTML through javascript </br></br>");
document.write(classs[0].childNodes[0].nodeValue+"</br></br>"+classs[1].childNodes[0].nodeValue+"</br></br>");
document.write(classs[2].childNodes[0].nodeValue+"</br></br>"+classs[3].childNodes[0].nodeValue+"</br></br>");
document.write(classs[4].childNodes[0].nodeValue+"</br></br>");


// iv. Fill input value whose element id first-name using javascript.

var first_name = document.getElementById('first-name');
var p_first_name= document.createElement('p');
var text_first_name= document.createTextNode(first_name.value);
p_first_name.appendChild(text_first_name);

//v. Repeat part iv for id ”last-name” and “email”.

var last_name = document.getElementById('last-name');
var p_last_name= document.createElement('p');
var text_last_name= document.createTextNode(last_name.value);
p_last_name.appendChild(text_last_name);

var Email = document.getElementById('email');
var p_Email= document.createElement('p');
var text_Email= document.createTextNode(Email.value);
p_Email.appendChild(text_Email);

// task # 2

 // 2. use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.

var From_content =  document.getElementById('form-content');
var node_type=From_content.nodeType;
if(node_type == 1){
    document.write("</br></br> node type of element having id 'form-content' is 1 its mean Element");
}else{
    document.write("</br></br> node type of element having id 'form-content' is 3 its mean Junk");
}

 //ii. Show node type of element having id “lastName” and its child node.

var last_Name =  document.getElementById('lastName');
var node_type=last_Name.nodeType;
if(node_type == 1){
    document.write("</br></br> node type of element having id 'lastName' is 1 its mean Element");
}else{
    document.write("</br></br> node type of element having id 'lastName' is 3 its mean Junk");
}
var child_last_Name = last_Name.childNodes[0];
document.write("</br>child nodes of element having id 'lastName'</br> is"+child_last_Name.childNodes[0]+"</br> mean #text"); 

 // iii. Update child node of element having id “lastName”.

var lastName= document.getElementById('lastName');
 lastName.childNodes[0].nodeValue = 'Last Name : Zender';// updating value of child
 
 var main_contant = document.getElementById('main-content');// here we checjed value update or not
console.log(main_contant.childNodes);

 var text = main_contant.childNodes[0];
 var text1 = main_contant.childNodes[1];
 var text2 = main_contant.childNodes[2];
 var text3 = main_contant.childNodes[3];
 var text4 = main_contant.childNodes[4];

document.write("All elements of class render and  their innerHTML through javascript </br></br>"+text.childNodes[0].nodeValue+"</br>");
document.write("</br>"+text1.childNodes[0].nodeValue+"</br>");
document.write("</br>"+text2.childNodes[0].nodeValue+"</br>");
document.write("</br>"+text3.childNodes[0].nodeValue+"</br>");
document.write("</br>"+text4.childNodes[0].nodeValue+"</br>");


// iv. Get First and last child of id .

var main_contant = document.getElementById('main-content');
var first_child = main_contant.firstChild;
var last_child = main_contant.lastChild;

document.write("Tag of first child of id “main-content” : "+first_child.nodeName+"</br> value of first child : "+first_child.childNodes[0].nodeValue+"</br></br>");
document.write("Tag of last child of id “main-content” : "+last_child.nodeName+"</br> value of first child : "+last_child.childNodes[0].nodeValue);

 // v. Get next and previous siblings of id “lastName”.

var LastName = document.getElementById('lastName');
var previous_sibling = LastName.previousSibling;
var Next_sibling= LastName.nextSibling;

document.write("Tag of previous sibling of id “lastName” : "+previous_sibling.nodeName+"</br> value of previous sibling : "+previous_sibling.childNodes[0].nodeValue+"</br></br>");
document.write("Tag of next sibling of id “lastname” : "+Next_sibling.nodeName+"</br> value of next sibling : "+Next_sibling.childNodes[0].nodeValue);

 // vi. Get parent node and node type of element having id “email”


var Email = document.getElementById('email');
document.write("Tag of parent node of element having id “email”  is "+Email.parentNode.nodeName+" </br> node type of element having id “email” is "+Email.nodeType+" mean element");