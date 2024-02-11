# Projects related to markdown


``` javascript code
// body select karna h and buttons ko select karna hai


// to phle buttons select kr lete hai
const buttons = document.querySelectorAll('.button');
// console.log(buttons);

// ab body select kar lo
const body = document.querySelector("body");

// now for each of the button
buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);  // even click karne p kha se aaya vo pta chal jaega
        if(e.target.id==='grey'){
            body.style.backgroundColor='grey';
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor='blue';
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor='yellow';
        }
        if(e.target.id==='white'){
            body.style.backgroundColor='white';
        }
        
    })
})