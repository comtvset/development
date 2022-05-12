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
document.querySelector('.key[data="Backspace"]').style.width = 130 + 'px';
document.querySelector('.key[data="Tab"]').style.width = 70 + 'px';
document.querySelector('.key[data="Delete"]').style.width = 110 + 'px';
document.querySelector('.key[data="CapsLock"]').style.width = 80 + 'px';
document.querySelector('.key[data="Enter"]').style.width = 100 + 'px';
document.querySelector('.key[data="ShiftLeft"]').style.width = 130 + 'px';

document.querySelector('.key[data="ShiftLeft"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="Backquote"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="Tab"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="CapsLock"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="ControlLeft"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="MetaLeft"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="AltLeft"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="Backspace"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="Delete"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="Enter"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="ShiftRight"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="ArrowUp"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="ArrowDown"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="ArrowLeft"]').style.backgroundColor = "#404040";
document.querySelector('.key[data="ArrowRight"]').style.backgroundColor = "#404040";

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
        

        let back = getCaretPos(area);
        let tmp = area.value.split('');

        
        tmp.splice(back, 0, event.target.innerHTML);
        area.value = tmp.join('');
        setSelectionRange(area, back + 1, back + 1);
        
        if(event.target.innerHTML === 'Backspace') {   
            tmp.splice(back - 1, 1);
            tmp.splice(back - 1, 1);
            area.value = tmp.join('');
        };

        if(event.target.innerHTML === 'Enter') {            
            tmp.splice(back - 0, 1);        
            area.value = tmp.join('');
            document.getElementById('area').value = area.value +'\r\n'+'';        
        };

        if(event.target.innerHTML === 'Delete') {     
            tmp.splice(back - 0, 1);
            tmp.splice(back - 0, 1);
            area.value = tmp.join('');
        };

        if(event.target.innerHTML === 'Tab') {     
            tmp.splice(back - 0, 1);
            area.value = tmp.join('');
        };

        if(event.target.innerHTML === 'Shift') {     
            tmp.splice(back - 0, 1);
            area.value = tmp.join('');
        };
       
        if(event.target.innerHTML === 'Ctrl') {     
            tmp.splice(back - 0, 1);
            area.value = tmp.join('');
        };

        if(event.target.innerHTML === 'Alt') {     
            tmp.splice(back - 0, 1);
            area.value = tmp.join('');
        };

        if(event.target.innerHTML === 'Win') {     
            tmp.splice(back - 0, 1);
            area.value = tmp.join('');
        };
        
        if(event.target.innerHTML === 'CapsLock') {     
            tmp.splice(back - 0, 1);
            area.value = tmp.join('');

            EventTarget.addEventListener('click', toUpperCase())

            // document.getElementById('area').value = area.value.toUpperCase();
            
            console.dir(event)
            alert(event.shiftKey)
        };
        
        
        setTimeout(function () {           
        document.querySelectorAll('#keyboard .key').forEach(function(element) {
            element.classList.remove('active');
        });
    }, 100); 

    }
    
});


// console.log(area.value = key[22]);


    // document.addEventListener('mousedown', (event) => {
        
    //     // console.log(event.target);
    //     if(event.target.innerHTML == 'Delete'){
    //         // document.querySelector('.key[data="Delete"]').value = "...";
    //         // console.log("hello");
    //         // console.dir(area.value);
    //         document.querySelector('.key[data="Delete"]').innerHTML = '';
    //         console.dir(event)
    //     }
    // });

    // document.addEventListener('mouseup', (event) => {
        
    //     // console.log(event.target);
    //     if(event.target.innerHTML == ''){
    //         // document.querySelector('.key[data="Delete"]').value = "...";
    //         // console.log("hello");
    //         // console.dir(area.value);
    //         document.querySelector('.key[data="Delete"]').innerHTML = 'Delete';
    //         console.dir(event)
    //     }
    // });






// keys.forEach(e => {
//     e.addEventListener('mousedown', (event) => {
//         // area.focus();
//         area.value = area.value + event.target.innerHTML;
//   })
// }
// );



// document.querySelector('.window').onkeydown = function (event) {
//     console.log('code: ' +event.code);
//     console.log('key: ' +event.key);
//     console.dir(event)
// }
// document.querySelector('.window').onkeyup = function (event) {
//     console.log('code: ' +event.code);
//     console.log('key: ' +event.key);
// }


// else if (event.target.dataset.key === 'Backspace') {
//     back = getCaretPos(text);
//     let tmp = text.value.split('');
//     tmp.splice(back - 1, 1);
//     text.value = tmp.join('');
//     setSelectionRange(text, back - 1, back - 1)