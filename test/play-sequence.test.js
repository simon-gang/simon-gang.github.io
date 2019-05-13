const test = QUnit.test;

test('removing a class from element', (assert) => {
    // arrange
    const lights = document.querySelectorAll('.light');
    console.log(lights);
    // act

    const expected = '<p class"light red"><p>';
    const dom = turnAllOff(lights);
     // assert

    assert.deepEqual(dom.outerHTML, expected);

 });

function turnAllOff(lights) {
    for(let i = 0; i < lights.length; i++) {
        const light = lights[i];
        light.classList.remove('on');
    }

}


export default turnAllOff;