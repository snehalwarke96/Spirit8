let ham = document.querySelector('.ham');
let cross = document.querySelector('.cross');
let wrapDiv = document.querySelector('.wrapDiv');
let mainNav = document.querySelector('.mainNav');
// let mainNav = document.getElementById('navDiv');

if (ham != 'none'){
    cross.style.display='none'; 
    wrapDiv.style.display='none'; 
}

if (mainNav != 'none') {
    // cross.style.display='none';  
    wrapDiv.style.display='none';  
}


ham.addEventListener('click', (e => {
    ham.style.display='none'; 
    cross.style.display='block'; 
    wrapDiv.style.display='block';
}))

cross.addEventListener('click', (e => {
    ham.style.display='block'; 
    cross.style.display='none'; 
    wrapDiv.style.display='none';
}))

wrapDiv.addEventListener('click', (e => {
    ham.style.display='block'; 
    cross.style.display='none'; 
    wrapDiv.style.display='none';
}))
