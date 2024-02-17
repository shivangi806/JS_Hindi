const promise1 = new Promise(function(resolve,reject){
    // do any async task
    // db calls , crypto graphy , network
    setTimeout(function(){
        // console.log('Async task is complete');
        resolve();
    },1000);
})

promise1.then(function(){
    // console.log("promise one done");
})


// promise 2 
new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log('Async 2 done');
        resolve();
    },1000);
}).then(function(){
    // console.log('Promise 2 done');
})



const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        // treat resolve as an object
        resolve(
            {
                username : "shivangi806",
                email : "shivi@gmail.com"
            }
        ) 
    },1000)
})

promise3.then(function(user){
    // console.log(user);
})


// promise 4
// const promise4 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve(
//                 {
//                     username : "shiivangi806",
//                     email : "shivi@gmail.com"
//                 }
//             ) 
//         }
//         else{
//           reject('Error occured');  
//         }
//     },1000)
// })

// promise4.then(function(user){
//     console.log(user);
// }).then(function(username){
//     console.log(username);
// }).finally(function(){
//     console.log("promise resolved");
// })

// const promise5 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//         if(!error){
//             resolve({username:"shi" , email:"xyz"});
//         }
//         else{
//             reject('Error');
//         }
//     },1000)
// });

// async function consumePromise5(){

//     try{
//         const response = await promise5;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }
 
// consumePromise5();


// now fetching th users 
// try catch format
// async function getAlluser(){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//         const data = await response.json();
//         // console.log(response);
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAlluser();

// .then format


fetch('https://api.github.com/users/hiteshchoudhary').then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})




