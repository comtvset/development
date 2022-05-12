let test = [];

document.onkeydown = function() {
    // console.log(event);
    // console.log(event.code);
    test.push(event.key)
    console.log(test);
    
}

// document.onkeyup = function () {
//     console.log(event);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.shiftKey);
// }

// document.onmousedown = function () {
//     console.log(event);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.shiftKey);
// }

// document.onmouseup = function () {
//     console.log(event);
//     console.log(event.code);
//     console.log(event.keyCode);
//     console.log(event.shiftKey);
// }