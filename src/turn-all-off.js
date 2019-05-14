const lights = document.querySelectorAll('.light');

function turnAllOff() {
    for(let i = 0; i < lights.length; i++) {
        const light = lights[i];
        light.classList.remove('on');
    }
}

export default turnAllOff;