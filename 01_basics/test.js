// console.log("shivangi");

let a = 89;
var b = 90;
var b = 99;
// let a = 777;
// console.log(b);


const user = {
    username : "shivangi",
    phone : 90000,
    msg :  function(){
        // console.log(this.username);
        // return this.username;
    }
}


user.username = "ppppp";
// console.log(user.msg);
user.msg();

// const add = function(){
//     return 8+9;
// }


// using arrow function 
// const add = () => {
//     return 8+9;
// }

// arrow and return in brace
const add = () =>(8+9);

// console.log(add());

function fun() {
    return 90;
}

(function fun(){
    console.log(9000000000);
})(); // semicolon req

(()=>{
    console.log(299999);
})()

