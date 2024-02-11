// phle to height ka box selct karo
// const height = document.querySelector('#height');
// console.log(height);

//  ab us height input me value input from user lo
// form ko select karo
const form = document.querySelector('form');

// ab is form se kaam karwaenge
form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const answer = document.querySelector('#results');

    if(height==='' || height<0 || isNaN(height)){
        answer.innerHTML = `Enter valid height`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        answer.innerHTML=`Enter valid weight`;
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        answer.innerHTML = `<span>${bmi}</span>`;
    }

});