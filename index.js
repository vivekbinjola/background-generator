//  calculator 

// var first=prompt('enter the first number') /*Take input from the user by using prompt*/
// var second=prompt('enter the second number')
// sum= Number(first)+Number(second);  /*Number() changes string to a Number*/
// alert("the sum is: "+sum);

// console.log("how are you","i am vivek");

// function sayhello(){
//     console.log('hello');
// }
// sayhello();

// var saybye= function (){
//     console.log('bye');
// }
// saybye();

// function sing(song)
// {
//     console.log(song)
// }

// sing('hello');
// sing('bye');

// function multiply(a,b) 
// {
//     return a*b;
// }
// multiply(3,4);  run this in console;


// USE RETURN ONLY ONCE BECAUSE PROGRAM TERMINATES 
// AFTER ONE USE


// ARRAY

// var list= ["vivek","cat","bird"];
// console.log(list);

// var newlist=list.concat(["ankit","palak"]);

//  console.log('newlist');


//  The splice() method can be used to add new items to an array:

//  Example
//  var fruits = ["Banana", "Orange", "Apple", "Mango"];
//  fruits.splice(2, 0, "Lemon", "Kiwi");
//  The first parameter (2) defines the position where new elements should be added (spliced in).

//  The second parameter (0) defines how many elements should be removed.

//  The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

//  The splice() method returns an array with the deleted items:



// OBJECTS

// objects are collection of properties.

// var user= {
//     name:"vivek",
//     age:21,
//     college:"GEU"

// };

//   user.favfood= "butterchicken";


// List&FUNCTIONS inside object

// var user = {
//     name: "vivek",
//     age: 21,
//     college: "GEU",
//     skills: ["html", "css", "js"],
//     shout: function(){
//     console.log('ahjjjjjj');
// }
// FUNCTION INSIDE A OBJECT IS A METHOD
//  };

// user.skills;

// objects inside list

// var user=
// [
//     {
//         name:"vivek",
//         college:"geu"
//     },
//     {
//         name:"ankit",
//         college:"uit"
//     }
// ];

//  output:

// user[1]
// {name: "ankit", college: "uit"}
// user[0].name
// "vivek"

//   FACEBOOK PAGE


// var database =
//     [
//         {
//             name: "vivek",
//             password: "vivekbin"
//         },
//         {
//             name: "sonali",
//             password: "binjola"
//         },
//         {
//             name: "ankit",
//             password: "phondani"
//         }

//     ];

// var newsfeed = [
//     {
//         user: "sonali",
//         timeline: "posts"
//     },
//     {
//         user: "ankit",
//         timeline: "funny posts"
//     }
// ];

// var userprompt = prompt("Type Username");
// var passprompt = prompt("Type password");

// signin(userprompt, passprompt)

// function uservalid(user, pass) {
//     for (var i = 0; i < database.length; i++) {
//         if (user === database[i].name &&
//             pass === database[i].password) {
//             return true;
//         }
//     }
//     return false;

// }
// function signin(user, pass) {
//     if (uservalid(user, pass)) {
//         console.log(newsfeed);
//     }
//     else {
//         alert('password or username is incorrect');
//     }

// }

// loops (for each)
// var todo=[

//     "clean room","clean floor","wash utensils"
// ];

// function logtodos(todo){
//     console.log(todo);
// }
// todo.forEach(logtodos);

// DOM MANIPULATION

// document.querySelector('li').getAttribute("random");

// document.querySelector('li').setAttribute('random',"1000");

// // document.querySelector('li').classList.add('done');


// var h2=document.querySelector('h2');
// h2.className="done";

// document.querySelector('li').classList.remove('done');



// var button=document.getElementsByTagName('button')[0];
// getelementbytagname takes elements in array so we have to add 
// index of button i.e [0]

// button.addEventListener('mouseleave',function()
// {
//     console.log('clicked on button');
// })


//   TODO LIST

// var button = document.getElementById("enter");
// var input = document.getElementById('userinput');
// var ul = document.querySelector('ul');

// function inputlength() {
//     return input.value.length;
// }

// function listelements() {

//     var li = document.createElement('li');
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }

// function addlistafterclick(){
//     if (inputlength() > 0) {
//         listelements();
//     }
// }

// function addlistafterkeypress(event){
//     if (inputlength() > 0 && event.keyCode === 13) {
//         listelements();
//     }
// }


// button.addEventListener('click',addlistafterclick);
// input.addEventListener('keypress',addlistafterkeypress);


// SCOPE

// root scope(Window)
// var fun = 4;

// function funn() {
//     //  child scope
//     var fun = "hello";
//     console.log(1, fun);    // naming conflict-used fun
//     //    in an function as well as in the root scope 

// }

// function funer() {
//     var fun = "bye";
//     console.log(2, fun);
// }

// function funest() {
//     fun = "hiiiii";
//     console.log(3, fun);
// }

// console.log("window", fun);
// funn();
// funer();
// funest();

// Advanced control flow
//                 // Ternary operator

// function isuservalid(bool) {
//     return bool;
// }

// var user = isuservalid(false) ?
//    "Access Granted" : "Access Denied";   // for conditionals it is very useful
// // aliter
// function condition() {
//     if (isuservalid(false)) {
//         return "access granted";
//     }
//     else
//         return "access denied";
// }

// switch case

// function move(direction){
// var whathappens;
//     switch(direction){
//         case "forward": 
//         whathappens="move forward";
//         break;
//         case "backward":
//             whathappens="move backward";
//         break;
//         case "left":
//             whathappens="move left";
//         break;
//         case "right":
//             whathappens="move right";
//         break;
//         default: 
//         whathappens="Type a valid direction";
//     }
//     return  whathappens;

// }


// const obj = {
//     name: "vivek", // under constant we can reassign 
//                     // the properties of an object
//                     // but cannot use the variable again.
//         class: "12",
//     age: "21"
// };

// USE OF BACKTICS

// let name="vivek";
// let age= 21;
// let pet="elly";

// let greeting =`hi my name is ${name} 
// and i am ${age} yrs old,my pet's name is ${pet}`

// function greeting(name='',age=30,pet="elly"){
// return `hi my name is ${name} 
// and i am ${age} yrs old,my pet's name is ${pet}`
// }


// ARROW FUNCTIONS

// function add(a,b){
//     return a*b;
// }

// // aliter

// const add1=(a,b)=> a*b;



// closures-

// a function ran,it executed ,it's never going to execute again.
// but it's going to remember their are references to those variables.
// so the child scope has always access to the parent scope.

// const first=()=>{
//     const greet='hi';
// const second=()=>{
//     alert(greet);
// }
// return second;
// }

// const newfunction= first();

// newfunction();


// currying-

// when function takes two parameters at a time.
// instead of it taking single parameter at a time.

// const first =(a,b)=> a*b;
// const  curriedfirst =(a)=>(b)=>a*b;
//   const multiplyby3 =curriedfirst(3);
//    multiplyby3(4);


// compose-


// const compose=(a,b)=>(f)=> a(b(f));
// const sum=(num)=> num+1;
// compose(sum,sum)(3);


// function sideeffects,function purity

// var a=2;
// const add=()=> 
//  var a=5; 

// this is funciton sideffect,we have to minimize it
//  and have function purity  


// Determinism-

// whatever you pass in the function it always returns same value or a value.


// ADVANCED ARRAYS


// const array = [2, 4, 5, 6];
// const double = [];
// const newarray = array.forEach((num) => {
//     double.push(num * 2);
// })
// console.log('double', double);



// Map,filter,reduce

//difference between map and foreach loop is ,map creates its own new array
//  inside map ... and stores values of transformed array init.Map always returns some value.
// wheras in foreach it does only iterations and for storing new values of the elements 
// we have to create a new array.
// NOTE-: prefer map over foreach


// const maparray= array.map((num)=>{
//     return num*2;
// })
// console.log('map',maparray);


// const maparray = array.map(num => num*2);  //shorthand when their is only one variable(num)
// console.log('map', maparray);


// filter

// const filterarray= array.filter(num=>num===5)
// console.log(filterarray);


// Reduce
// it can perform both filter and map.

// const reducearray=array.reduce((accumulator,num)=>{

//     return accumulator+num;
// },0);

// console.log('reduce',reducearray);


// ADVANCED OBJECTS-

// reference type

// var object1 = {value:20};
// var object2 =object1;
// var object3 = {value:20};
// object1===object3
// // -false


// context vs scope
// this- refers to what object we are inside of right now
// console.log(this===window)
// -true


// instantiation

// class player{
// constructor(name,type)
//  { console.log('player',this);
//     this.name=name;
//     this.type=type;
//  }
//   introduce(){
//     return console.log(`my name is ${this.name}`);
// }
// }

// class wizard extends player{
//     constructor(name,type){
//     super(name,type)
//     }
//  play(){
//      console.log(`my type is ${this.type}`);
//       }
//     }


// wizard1= new wizard('vivek','giant');
// wizard2= new wizard('palak','valkairie');

// new wizard goes to wizard and wizard goes to parent's functionlaity through super keyword


// some added syntax in ES7(2016)-

// var obj=['car','bike','cycle']
// obj.includes('car')
// alert('hi');
 
// var square=(x)=>x**2;  -double** means to the power
// square(3)



const flattened=[[2,3],[4,5],[6,7]].reduce(
(accumultor,array)=>{
    debugger;
return  [].concat([0,1])}
,[]);






