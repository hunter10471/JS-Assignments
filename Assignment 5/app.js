//Chap 1//

//task 1//
alert("Welcome to my website!");

//task 2//
alert("Error! Please Enter A Valid Password.");

//task 3//
alert("Welcome to JS Land.. \n Happy Coding! ")

//task 4//
alert("Welcome to JS Land.. ")
alert("Happy Coding!")


//Chap 2//

//task 1//
var username;

//task 2//
var myName = "Syed"+" "+"Rafay"+" "+"Zia"

//task 3//
var message = "Hello"+" "+"World!"
alert(message)

//task 4//
var a = prompt("Your Name:","Name");
alert(a)
var b = prompt("Your age:","age");
alert(b)
var c = prompt("Your course:","course")

//task 5//
var a = "pizza";
for (var i=a.length; i>=0; i--){
    for ( var j =0; j<i; j++ )
    {
        document.write(a[j])
    }
    document.write("<br>")
}

//task 6//
var email = "rafayzia10@gmail.com"
var x = "my"+" "+"email"+" "+"is"+" "+email
alert(x)

//task 7//
var book = "A"+" "+"smarter"+" "+"way"+" "+"to"+" "+"learn"+" "+"javascript"
var x = "I"+" "+"am"+" "+"trying"+" "+"to"+" "+"learn"+" "+"from"+" "+"the"+" "+"book"+" "+book
alert(x)

//task 8//
document.write("yay"+" "+"i"+" "+"can"+" "+"html"+" "+"content"+" "+"through"+" "+"javascript")

//task 9//
var x = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(x)

//Chap 3//

//task 1//
 var age = 19
 var x = "i"+" "+"am"+" "+age+" "+"years"+" "+"old"
 alert(x)

 //task 2//
 function VisitCounter(){

    var visits = GetCookie("counter");
    
    if (!visits) { visits = 1;
    
    document.write("By the way, this is your first time here.");
    
    }
    
    else {
    
    visits = parseInt(visits) + 1;
    
    document.write("I note, you have been here " + visits + " times.");}
    
    setCookie("counter", visits,expdate);}

 //task 3//
 var birthyear = 18
 document.write("my"+" "+"birth"+" "+"year"+" "+"is"+" "+birthyear+"<br>"+"Declared"+" "+"variable"+" "+"is"+" "+"a"+" "+"number")   

 //task 4//
 var x = prompt("Your name:","name")
 var y = prompt("your product","product")
 var z = prompt("quantity of your product","quantity")
 alert(x+" "+"has"+" "+"ordered"+" "+y+" "+"of"+" "+"quantity"+z+"from"+" "+"xyz"+" "+"website")

 //Chap 4//

 //task 1//
 var x ; var y ; var z;

 //task 2//
 var rof ; var sydny95; var pop88 ; var rule$09 ; hi_09;
 var 9op ; var 99 ; var 09pop ; var 1200 ; var 0_09p;

 //task 3//
 document.write("<h1>Rules for naming js</h1>")
 document.write("<br>")
 document.write("variable names can only contain letters,numbers,$ and _. For example $my_1stVariable <br>")
 document.write("Variables must begin with a letter, $ or __. For example $name, _name or name <br>")
 document.write( "Variable names are case sensitive")
document.write("Variable names should not be JS keywords.")


//Chap 5//

//Task 1//
var x = prompt("FIRST NUMBER:")
var y = prompt("SECOND NUMBER:")
var z = x+y
document.write("Sum of"+x+" "+"+"+y+" "+"is"+" "+z)


//task 2//
var x = prompt("FIRST NUMBER:")
var y = prompt("SECOND NUMBER:")
var z = x-y
document.write("Subtraction of"+x+" "+"-"+y+" "+"is"+" "+z)


//task 3//
var x = prompt("FIRST NUMBER:")
var y = prompt("SECOND NUMBER:")
var z = x/y
document.write("Division of"+x+" "+"/"+y+" "+"is"+" "+z)


//task 4//
var x = prompt("FIRST NUMBER:")
var y = prompt("SECOND NUMBER:")
var z = x%y
document.write("Modulus of"+x+" "+"%"+y+" "+"is"+" "+z)


//task 5//
var y = 5
document.write("Value after variable declaration undefined")
document.write("initial value : 5")
document.write("Value after increment is :6")
document.write("Value after addition is : 13")
document.write("Value after decrement: 12")
document.write("The remainder is : 0")

//task 6//
var x = 600 
document.write("Cost of 5 movie tickets is"+" "+x*5)

//task 7//
var x = prompt("Table number:")
for (
    var i = 1; i<=10;i++)
    {
        document.write(x+" "+"x"+" "+i+" "+"="+" "+x*i+"<br>")
    }

//task 8//
var x = prompt("Temprature in Celcius:")
document.write(x+" "+"in farheneit is"+" "+(x*9/5)+32)
var x = prompt("Temprature in Farheneit:")
document.write(x+" "+"in Celcius is"+" "+(x-32)*5/9)


//task 9//
var a = prompt("price of product 1")
document.write("Price of product 1 is"+" "+a+"<br>")
var b = prompt("quantity of product 1")
document.write("Quantity of product 1 is"+" "+b+"<br>")
var c = prompt("price of product 2")
document.write("Price of product 2 is"+" "+a+"<br>")
var d = prompt("quantity of product 2")
document.write("Quantity of product 2 is"+" "+b+"<br>")
document.write("Shipping charges are 100. <br>")
document.write("Total cost is"+" "+a*b+c*d+100)


//task 10//
document.write(<h1>MARKS SHEET</h1>)
var x = prompt("Enter marks total:")
 var y = prompt("Enter obtained marks:")
document.write("Total Marks:"+" "+x)
document.write("Obtained Marks"+" "+y)
document.write("Percentage:"+" "+x/y*100)


//task 11//
document.write("Total pakistani rupees"+" "+10*104.80+28*25)

//task 12//
 var x = prompt("Any number?")
document.write((x+5*2)/2)

//task 13//
 var x = prompt("Enter current year")
 var y = prompt("Enter birth year")
 document.write("your age is"+" "+x-y)

 //task 14//
 document.write(<h1>The Geometrizer</h1>)
 var x = prompt("Enter radius")
 document.write("Circumference of circle is"+" "+2*3.14*x)
 document.write("Area of circle is"+" "+3.14*x**2)

 //task 15//
 document.write(<h1>The Lifetime Supply Calculator</h1>)
 var a = "snackers"
 var b = 19
 var c = 65
 var d = 2
 document.write("you will need"+" "+(65-19)*365*2+" "+"to last forever.")




 //Chap 6-9//

 //task 1//
 document.write(<h1>Arthimetic</h1>)
 var a = prompt("Enter a number")
 document.write("The value of a is"+" "+a)
 document.write("the value of ++a is"+" "+++a)
 document.write("the value of a++ is"+" "+a++)
 document.write("the value of --a is"+" "+--a)
 document.write("the value of a-- is"+" "+a--)

 //task 2//
 var a  = 2 ; b =1
 var result = --a - --b + ++b + b--
 //Answer is one//
 // in first step pre decrement occurs so a becomes 1 and b becomes 0//
 //second step b again becomes 1 and gets subtracted by itself so 1 of a is remainder//

 //task 3//
 var a = prompt("Your name?")
 alert("Welcome Dear,"+" "+a)

 //task 4//
 var x = prompt("Table number:")
 if (x === "undefined"){
for (
    var i = 1; i<=10;i++)
    {
        document.write(5+" "+"x"+" "+i+" "+"="+" "+x*i+"<br>")
    }}
    else ()=>{for (var i = 1; i<=10;i++)
    {
       ( document.write(x+" "+"x"+" "+i+" "+"="+" "+x*i+"<br>"))}}

 //task 5//
 var a = prompt("Enter subject name")      
 var b = prompt("Enter subject name")      
 var c = prompt("Enter subject name") 
 var d = 100
 var e = prompt("Enter obtained marks")     
 var f = prompt("Enter obtained marks")     
 var g = prompt("Enter obtained marks")     




 //Chap 9-11//


 //task 1//
 var city = prompt("Enter city name")

if (city === "karachi"){
    alert("Welcome to the city of lights."
    )
}


//task 2//

var gender = prompt("Enter gender:")
if (gender==="male"){
    alert("Welcome sir")
}
if ( gender==="female"){
    alert("Welcome ma'am")
}

//task 3//
var color = prompt("Enter color of traffic light")
if (color ==="red"){
    alert("Must stop!")
}
if (color ==="yellow"){
    alert("Be ready..")
}
if (color==="green"){
    alert("You can go.")
}



//task 3//
var fuel = prompt("Enter fuel")
if (fuel<0.25){
    alert("low fuel")
}

//task 4//

a. var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//condition is true

b. var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//Output undefined

c. var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
//only condition 3 is true.

if(c === 14){
alert("condition 4 is true");
}


d. var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//condition is true

e. if (true){
alert("True");
}

//undefined
if (false){
alert("False");
}
//undefined

f. if("car" < "cat"){
alert("car is smaller than cat");
}
//undefined

//task 5//

var a = prompt("Enter subject 1 marks")
var b = prompt("Enter subject 2 marks")
var c = prompt("Enter subject 3 marks")

var d = (a+b+c)/300*100
if (d>=80){
    document.write("TOTAL MARKS:300 <br>"
    +"OBTAINED MARKS:"+a+b+c+
    "<br> PERCENTAGE:"+d+"<br>REMARKS:EXCELLENT <br> GRADE:A1")
}
if (d>=70 && d<80){
    document.write("TOTAL MARKS:300 <br>"
    +"OBTAINED MARKS:"+a+b+c+
    "<br> PERCENTAGE:"+d+"<br>REMARKS:GOOD <br> GRADE:A")
}
if (d>=60 && d<70){
    document.write("TOTAL MARKS:300 <br>"
    +"OBTAINED MARKS:"+a+b+c+
    "<br> PERCENTAGE:"+d+"<br>REMARKS:YOU NEED TO IMPROVE <br> GRADE:B")
}
if (d>=50 && d<60){
    document.write("TOTAL MARKS:300 <br>"
    +"OBTAINED MARKS:"+a+b+c+
    "<br> PERCENTAGE:"+d+"<br>REMARKS:SORRY <br> GRADE:C")
}


//task 6//

var a = 5
var b = prompt("guess the number")
if (a===b){
    alert("Bingo!")
}
else (){
    alert ("you were close")
}

//task 7//
var a = prompt("Enter number")
if (a%3===0){
    alert("Number is divisible by 3")
}


//task 8//
var a = prompt("Enter number")
if (a%2===0){
    alert("Number is even")
}
if (a%2==!0){
    alert("Number is odd")
}


//task 9//

var a = prompt("Enter temprature")
if (a>40){
    alert("it is hot outside")
}
if (a>30){
    alert("it is normal outside")
}
if (a>20){
    alert("it is cold outside")
}
if (a>10){
    alert("“OMG! Today’s weather is so Cool.")
}


//task 10//
var a = prompt("Enter first number")
var b = prompt("Enter second number")
var c = prompt("Enter operator")
if (c==="+"){
    alert(a+b)
}
if (c==="-")
{
    alert(a-b)
}
if (c==="/"){
    alert(a/b)
}
if (c==="%"){
    alert(a%b)
}
if (c==="*"){
    alert(a*b)
}

//Chap 12-13//

//task 1//

var x = prompt("Enter anything")
if (x.charCodeAt()>=65 && x.charCodeAt()<=90){
    alert("Uppercase letter")

}
if (x.charCodeAt()>=97 && x.charCodeAt()<=122){
    alert("Lowercase letter")

}
if (x.charCodeAt()>=48 && x.charCodeAt()<=57){
    alert("Digit")

}


//task 2//
var x = prompt("Enter a digit")
var y = prompt("Enter another digit")
if (x>y){
    alert("First digit is bigger")}
    if (x<y){
        alert("Second digit is bigger")
    }
    if (x===y){
        alert("Both digits equal")
    }

//task 3//
var x = prompt("Enter number")
if (x<0){
    alert("Number is negative")
}
if (x>0){
    alert("Number is positive")
}
if(x==0){
    alert("Number is zero")
}


//task 4//
var x = ["a","e","i","o","u"]
var y = prompt("Enter a letter")
if (x.includes(y,0)){
    alert("True")
}
else {
    alert("False")
}

//task 5//
var x =prompt("Enter a password")
var y = prompt("Enter password again")
if (x===y){
    alert("Correct pass")
}
else{
    alert("Incorrect")
}


//task 6//
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening";}


//task 7//
var x = prompt("Enter time")
if (x>=0000 && x<=1200){
    alert("Good morning")
}
else if (x>=1200 && x<=1700){
    alert("Good afternoon")
}
else if (x>=1700 && x<=2100){
    alert("Good Evening")
}
else if (x>=2100 && x<=2359){
    alert('Good night')
}


//Chap 14-16//


//task 1-6//

var x = []
var y = {}
var z = ["A","b","hi"]
var c = [1,2,3,56]
var d = [c>totalCost,0<9,x>9]
var e = ["a",23,5<9,"hi"]

//task 7//
var  x = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write(<h1>QUALIFICATIONS:</h1>+"<br>"
)
for (var i=0; i<9; i++)
{
    document.write(i+")"+" "+x[i])
    document.write("<br>")
}

//task 8//
var x = ["michael","sam","john"]
var y = [300,400,360]
for ( i=0; i<=x.length;i++){
    document.write(x[i]+" "+"Score"+" "+y[i]+" "+"percentage"+" "+y[i]/500*100+"<br>")
}

//task 9//
var x = ["red","yellow","green"]
var y = prompt("Enter a color")
x.unshift(y)
alert(x)
var y = prompt("Enter a color")
x.push(y)
alert(x)
var y = prompt("Enter a color")
var z = prompt("Enter a color")
x.unshift(y,z)
alert(x)
x.pop
alert(x)
var x = ("Enter color name")
var y = ("Enter how many colors")
x.splice(y,0,x)
alert(x)
var x = ("Enter how many colors")
var y = ("Enter index")
x.splice(y,x)
alert(x)


//task 10//
var x = [100,90,120,200]
x.sort();
alert(x)

//task 11//
var  cities = ["karachi","lahore","lyari","multan"]
var selectedcities = []
cities.slice(0,2)
alert(cities)
alert(selectedcities)


//task 12//
var arr = ["This", "is", " my ", " cat"];
document.write(arr.join(" "))


//task 13//

array = [];
 array.push(1);
 array.push(2);
 array.push(3);
 array.shift();


 //Chap 17-20//

 //task 1//
 var a = [[[]]]

 //task 2//
 var a = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]

 //task 3//
 for (i=0;i<11;i++)
 {
     document.write(i,"<br>")
 }

//task 4//
 var x = prompt("Enter number")
 var y = prompt('Enter length')
 {for (var i = 1; i<=y;i++)
    {
       ( document.write(x+" "+"x"+" "+i+" "+"="+" "+x*i+"<br>"))}}

//task 5//
var fruits = ["apple", "banana", "mango", "orange",
    "strawberry"]  
for (i=0;i<=fruits.length,i++)
{document.write
(fruits[i])}


//task 6//
var a = [1,2,3,4,5,6,7,8,9]
document.write("Counting:",a)
document.write("reverse:",a.reverse())
for (i=0;i<=a.length,i++;){
if (a[i]%2===0){
document.write("Even:",a[i])}
else{
    document.write("odd:",a[i])
}}


//task 7//
var a = ["cake", "apple pie", "cookie", "chips","patties"]
var x = prompt("Enter item")
if (a.indexOf(x) in a){
alert(a.indexOf(x),"is available in our bakery")}
else{
    alert("item isnt available.")
}


//task 8//
var a = [24, 53, 78, 91, 12]
document.write(a)
var b = 0
for (i==0,i<=a.length;i++;){
if (b>a[i]){
    b=a[i]
}
}
document.write("largest num",b)

//task 9//
var a = [24, 53, 78, 91, 12]
document.write(a)
var b = 0
for (i==0,i<=a.length;i++;){
if (b<a[i]){
    b=a[i]
}
}
document.write("smallest num",b)


//task 10//
for (i=1,i<=20;i++;){
document.write(5*i," ")
}



