import '../styles/index.scss';

import $ from 'jquery';

/*import {Car} from './models/car.js';
import {Student} from './models/student.js';
let anto=new Student('SCT-224-034', 'Maths and CS', -20567.88);
console.log(anto.enroll());*/

//jquery
let form=document.getElementById('login');
form.addEventListener('submit',event=>{
    let user=form.elements['username'];
    let password=form.elements['password'];

//posting

let users={
    Username: user.value,
    Password: password.value
};

let promise=$.post('http://5d19c651b3b6a100148d22fe.mockapi.io/api/extreme/username', users);

//request for data
//let promise1= $.get("http://5d19c651b3b6a100148d22fe.mockapi.io/api/extreme/clients");

promise.then(
    data=>alert("Success! ",data),
    error=>alert("error! ",error)
);
event.preventDefault();

});


/*XHR
let xhttp=new XMLHttpRequest();

xhttp.onreadystatechange= function() {
    if(this.readyState== 4 && this.status == 200){
        console.log(this.responseText);
    }
};

xhttp.open("GET","http://5d19c651b3b6a100148d22fe.mockapi.io/api/extreme/clients",true);

xhttp.send();

//promises
let promise=new Promise(
    function(resolve,reject){
        setTimeout(reject,100, 'someValue'); //you could reject or accept
    }
);
 promise.then(
    value=>console.log("fulfilled: "+value),
    error=>console.log("rejected: "+error)
 );

//try and catch

 
//custom error
try{
    throw new Error("Student Enroll Error");
}
catch(error){
    console.log(error);
}
finally{
    console. log("School must continue");
}

//apply function in js

let i={
    carId:123,
    getId: function(prefix){
        return prefix+this.carId;
    }
};
let newCar={carId:545};
console.log(i.getId.apply(newCar,['ID: ']));

//binding
let o={
    carId:340,
    getId:function(){
        return this.carId;
    }
};

let newCar2={carId:789};
let newFn= o.getId.bind(newCar2);
 console.log(newFn());

//arrow functions
let getName=(prefix, suffix)=>{
    return prefix+' wa ' +suffix;
};
console.log(getName('Antony','Mwendwa'));
//dafault params
let trackMat=function(MattId, Stage="Tumaini"){
    console.log('Mixtape: '+MattId+" at " +Stage);
};
console.log(trackMat('KCL 803A'));
console.log(trackMat('KCL 803A', 'Masai Lodge'));
//constructors
function Car(carId3){
    this.carId=carId3;
    this.start=function(){
        console.log("Start: "+ this.carId);
    };
}
let nganya=new Car(234);
nganya.start();
//prototypes
class Mat {
    constructor(Id) {
        this.matId = Id;
    }
    start1() {
        console.log("Start: Bull " + this.matId);
    }
}
let bull=new Mat('KCM 009L');
bull.start1();
//JSOn
let jsonIn=`
[
    {"CarId": 234},
    {"CarId": 500},
    {"CarId": 344}
]
`;
let carIds=JSON.parse(jsonIn);
console.log(carIds);
//array iteration
let carIDS=[
    {carID:1, style:"sedan"},
    {carID:2, style:"sedan"},
    {carID:3, style:"BMW"},
    {carID:4, style:"GTR"}
];
carIDS.forEach(car=>console.log(car));

let sedans=carIDS.filter(
    car=>car.style==="sedan"
);
console.log(sedans);
*/

//classes