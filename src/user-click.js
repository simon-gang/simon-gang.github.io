let clickSequence = [];
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');

const array = [red, blue, green, yellow];

for(let i = 0; i < array.length; i++) {
    const currentElement = array[i];
    currentElement.addEventListener('click', (event) => {
        event.preventDefault();
        clickSequence.push(i + 1);
        currentElement.classList.add('on');
        setTimeout(() => {
            currentElement.classList.remove('on');
        }, 500); 
        console.log(clickSequence);
    });
}
