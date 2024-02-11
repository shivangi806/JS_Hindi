
const clock = document.querySelector('#clock');

// ab usi clock vale div me time chalte rhna chahiye
// or hr sec change hote rhna chahiye

setInterval(function(e){
    let date = new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000);