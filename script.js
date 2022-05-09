const keyboardUppercaseLetter = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 
                  65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220,
                  90, 88, 67, 86, 66, 78, 77, 188, 190, 191]; //массив charCode

const keyboardLowercaseLetter = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 
                  97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 92,
                  122, 120, 99, 118, 98, 110, 109, 44, 46, 47]; //массив charCode

const keyboard = [];

// document.onkeypress = function(event){
//     // console.log(event);
//     keyboard.push(event.charCode); //ловим charCode каждой кнопки
    console.log(keyboard); //выводим в консоль
// }

function init(){
    let out = '';
    for (let i = 0; i < keyboardLowercaseLetter.length; i++) {         //проходимся по массиву keyboard
        if (i == 12 || i == 24) {
            out = out + '<div class="clear"></div>';
        }

        //назначаем на каждый out текущий элемент i из массива keyborad с помощью String.fromCharCode()
        out = out + '<div class="key" data="' + keyboardLowercaseLetter[i] + '">' + String.fromCharCode(keyboardLowercaseLetter[i]) + '</div>'
    }
    document.querySelector('#keyboard').innerHTML = out;
}
init();

document.onkeypress = function(event) {
    console.log(event.key); //a
    console.log(event.keyCode); //97 //// or .charCode
    console.log(event);

    setTimeout(function () {
        document.querySelectorAll('#keyboard .key').forEach(function(element) {
            element.classList.remove('active');
        });
    }, 100);

    document.querySelector('#keyboard .key[data="' + event.keyCode + '"]').classList.add('active');
    
}

document.querySelectorAll('#keyboard .key').forEach(function(element) {
    element.onclick = function(event) {
        setTimeout(function () {
        document.querySelectorAll('#keyboard .key').forEach(function(element) {
            element.classList.remove('active');
        });
    }, 100); 
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
    }
    
});

document.querySelector('.window').onkeypress = function (event) {
    console.log('keydown');
    console.log('charCode: ' +event.charCode);
    console.log('code: ' +event.code);
    console.log('key: ' +event.key);
    console.log('keyCode: ' +event.keyCode);

    // keyboard.push(event.keyCode);
    // console.log(keyboard);
}
// document.querySelector('.window').onkeypress = function (event) {
//     console.log('keypress');
//     console.log('charCode: ' +event.charCode);
//     console.log('code: ' +event.code);
//     console.log('key: ' +event.key);
//     console.log('keyCode: ' +event.keyCode);
// }
// document.querySelector('.window').onkeyup = function (event) {
//     console.log('keyup');
//     console.log('charCode: ' +event.charCode);
//     console.log('code: ' +event.code);
//     console.log('key: ' +event.key);
//     console.log('keyCode: ' +event.keyCode);
// }