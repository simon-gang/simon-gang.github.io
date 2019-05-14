let clickSequence = [];

const red = document.getElementById('red');
// const blue = document.getElementById('blue');
// const green = document.getElementById('green');
// const yellow = document.getElementById('yellow');


// generate dynamically, use an object
red.addEventListener('click', (event) => {
    event.preventDefault();
    clickSequence.push(1);
    red.classList.add('on');
    setTimeout(() => {
        red.classList.remove('on');

    }, 500); 
    console.log(clickSequence);
});

// blue.addEventListener('click', (event) => {
//     event.preventDefault();
//     clickSequence.push(2);
    
// });

// green.addEventListener('click', (event) => {
//     event.preventDefault();
//     clickSequence.push(3);
    
// });

// yellow.addEventListener('click', (event) => {
//     event.preventDefault();
//     clickSequence.push(4);
    
// });