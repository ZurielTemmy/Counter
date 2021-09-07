let value = document.querySelector('.counter');
let addCounter = document.querySelector('#higherCounter');
let subCounter = document.querySelector('#lowerCounter');

let count = 0;

addCounter.addEventListener('click',incrementCounter);
function incrementCounter(){
    count++;
    value.innerHTML = count;
    if(value.innerHTML > '0'){
        value.style.color = 'green'
    }
    else if(value.innerHTML === '0'){
        value.style.color = 'white'
    }
}

subCounter.addEventListener('click', decrementCounter);
function decrementCounter(){
    count--;
    value.innerHTML = count;
    if(value.innerHTML < '0'){
        value.style.color = 'red'
    }
    else if(value.innerHTML === '0'){
        value.style.color = 'white'
    }
}

