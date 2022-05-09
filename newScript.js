const code = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 
'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete', 
'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter', 
'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 
'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const key = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 
'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 
'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter', 
'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ᐃ', 'Shift', 
'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ᐊ', 'ᐁ', 'ᐅ'];

let area = document.querySelector('textarea');
let keyboard = document.querySelector('.keyboard');

let text = document.querySelector('textarea');
let keys = document.querySelectorAll('.key');




function init(){
    let out = '';
    for (let i = 0; i < code.length; i++) {
        if (i == 14 || i == 28 || i == 42 || i == 56) {
            out = out + '<div class="clear"></div>';
        }      
       
        out = out + '<div class="key" data="' + code[i] + '">' + (key[i]) + '</div>'        
    }
    
    document.querySelector('#keyboard').innerHTML = out;
}
init();

document.querySelector('.key[data="Space"]').style.width = 440 + 'px';
document.querySelector('.key[data="Backspace"]').style.width = 120 + 'px';
document.querySelector('.key[data="Tab"]').style.width = 70 + 'px';
document.querySelector('.key[data="Delete"]').style.width = 100 + 'px';
document.querySelector('.key[data="CapsLock"]').style.width = 80 + 'px';
document.querySelector('.key[data="Enter"]').style.width = 90 + 'px';
document.querySelector('.key[data="ShiftLeft"]').style.width = 120 + 'px';
// document.querySelector('.key[data="ShiftRight"]').style.width = 85 + 'px';

function getCaretPos(obj) {
    obj.focus();
    if (obj.selectionStart) return obj.selectionStart;
    else if (document.selection) {
      var sel = document.selection.createRange();
      var clone = sel.duplicate();
      sel.collapse(true);
      clone.moveToElementText(obj);
      clone.setEndPoint('EndToEnd', sel);
      return clone.text.length;
    }
    return 0;
  } 

  function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
      input.focus();
      input.setSelectionRange(selectionStart, selectionEnd);
    } else if (input.createTextRange) {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveEnd('character', selectionEnd);
      range.moveStart('character', selectionStart);
      range.select();
    }
  }


document.onkeydown = function(event) {
    setTimeout(function () {
        document.querySelectorAll('#keyboard .key').forEach(function(element) {
            element.classList.remove('active');
        });
    }, 100);

    document.querySelector('#keyboard .key[data="' + event.code + '"]').classList.add('active');
    
}

document.querySelectorAll('#keyboard .key').forEach(function(element) {
    element.onclick = function(event) {
        area.focus();
        // area.value = area.value + event.target.innerHTML;

        let back = getCaretPos(area); //записывает текущую позицию коретки

        let tmp = area.value.split('');
        tmp.splice(back, 0, event.target.innerHTML);
        area.value = tmp.join('');
        setSelectionRange(area, back + 1, back + 1);


        
        setTimeout(function () {           
        document.querySelectorAll('#keyboard .key').forEach(function(element) {
            element.classList.remove('active');
        });
    }, 100); 
        let code = this.getAttribute('data');
        this.classList.add('active');
        
        console.dir(area);
        // console.log();
    }
    
});


// console.log(area.value = key[22]);

keys.forEach(function(element) {
    element.addEventListener('mousedown', (event) => {
        area.value = area.value + event.target.innerHTML;
        console.log(event.target);
    });
});

// keys.forEach(e => {
//     e.addEventListener('mousedown', (event) => {
//         // area.focus();
//         area.value = area.value + event.target.innerHTML;
//   })
// }
// );



// document.querySelector('.window').onkeydown = function (event) {
//     console.log('keydown');
//     console.log('charCode: ' +event.charCode);
//     console.log('code: ' +event.code);
//     console.log('key: ' +event.key);
// }


// area.focus();
// let active = document.activeElement;
// console.log(active);

// area.onfocus = function(event){
//     console.log("получаем фокус")
// }

// area.onblur = function(event){
//     console.log("теряем фокус")
// }

// else if (event.target.dataset.key === 'Backspace') {
//     back = getCaretPos(text);
//     let tmp = text.value.split('');
//     tmp.splice(back - 1, 1);
//     text.value = tmp.join('');
//     setSelectionRange(text, back - 1, back - 1);
