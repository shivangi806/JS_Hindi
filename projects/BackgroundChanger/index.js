let body = document.querySelector("body");
const start = document.querySelector('#start');
var color = ["black", "blue", "brown", "green"];
var i = 0;
function change() {
  body.style.backgroundColor=color[i];
  i++
  if(i > color.length - 1) {
    i = 0;
  }
}
let intervalId;
start.addEventListener('click', function() {
    // Start the interval when the button is clicked
    intervalId = setInterval(change, 1000);
});


const stop = document.querySelector('#stop');
stop.addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId=null;
})

