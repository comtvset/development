const code = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal',
  'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight',
  'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash',
  'Enter', 'ShiftLeft', 'IntlBackslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp',
  'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

const key = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u',
  'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter', 'Shift', '\\',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ᐃ', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ᐊ', 'ᐁ', 'ᐅ',
];

const keyUp = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
  'P', '[', ']', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Enter', 'Shift', '\\',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ᐃ', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ᐊ', 'ᐁ', 'ᐅ',
];

const key2 = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O',
  'P', '{', '}', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', "'", '|', 'Enter', 'Shift', '|', 'Z', 'X',
  'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ᐃ', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ᐊ', 'ᐁ', 'ᐅ',
];

const keyRu = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ',
  'з', 'х', 'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter', 'Shift', '\\', 'я',
  'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ᐃ', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ᐊ', 'ᐁ', 'ᐅ',
];

const key2Ru = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ',
  'З', 'Х', 'Ъ', 'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '|', 'Enter', 'Shift', '|', 'Я', 'Ч',
  'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ᐃ', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'ᐊ', 'ᐁ', 'ᐅ',
];

const container = document.createElement('div');
container.classList.add('container');

const textareaContainer = document.createElement('div');

const header = document.createElement('h1');
header.textContent = 'keyboard';

const textarea = document.createElement('textarea');
textarea.setAttribute('name', 'text');
textarea.setAttribute('id', 'area');
textarea.classList.add('window');

textareaContainer.appendChild(header);
textareaContainer.appendChild(textarea);

const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard');
keyboardContainer.setAttribute('id', 'keyboard');

container.appendChild(textareaContainer);
container.appendChild(keyboardContainer);

document.body.appendChild(container);




function init(e) {
  let out = '';
  for (let i = 0; i < code.length; i++) {
    if (i == 14 || i == 28 || i == 42 || i == 56) {
      out = out + '<div class="clear"></div>';
    }
    if(code[i] === 'CapsLock') {
        out = out + '<div class="key" id="myCapsLockId"'+'data-value="' + code[i] + '">' + e[i] + '</div>';
    }
    else if (code[i] === 'ShiftLeft') {
      out = out + '<div class="key" id="myShiftLeft"'+'data-value="' + code[i] + '">' + e[i] + '</div>';
    }
    else if (code[i] === 'ShiftRight') {
      out = out + '<div class="key" id="myShiftRight"'+'data-value="' + code[i] + '">' + e[i] + '</div>';
    }
    else {
    out = out + '<div class="key" data-value="' + code[i] + '">' + e[i] + '</div>';}
  }
  document.querySelector('#keyboard').innerHTML = out;

}

init(key)

const keyWidths = {
  Space: 440,
  Backspace: 130,
  Tab: 70,
  Delete: 110,
  CapsLock: 80,
  Enter: 100,
  ShiftLeft: 130,
};

function setKeyWidths(keyWidths) {
    for (const key in keyWidths) {
      document.querySelectorAll(`.key[data-value="${key}"]`).forEach((element) => {
        element.style.width = `${keyWidths[key]}px`;
      });
    }
}

setKeyWidths(keyWidths);

const keysToChange = [
  'ShiftLeft',
  'Tab',
  'CapsLock',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'Backspace',
  'Delete',
  'Enter',
  'ShiftRight',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'AltRight',
  'ControlRight',
];

function setKeysToChange(keysToChange) {
    keysToChange.forEach((element) => {
    document.querySelector(`.key[data-value="${element}"]`).style.backgroundColor = '#404040';
    });
}
setKeysToChange(keysToChange);

// const target = document.querySelector('body');

// target.addEventListener('click', function(event) {

//     const clickedElement = event.target;
//     const dataValue = clickedElement.dataset.value;
//     console.log('Значение атрибута data элемента: ' + dataValue);

//     console.dir(event.target);
//     console.log(event.target);
// });


const myTextarea = document.getElementById('area');
// const myElement = document.querySelectorAll('.key');
let elementCount = 0;
let currentPosition = 0;

myTextarea.focus();
myTextarea.addEventListener('blur', function () {
  myTextarea.focus();
});



function run() {
    const myElement = document.querySelectorAll('.key');
    runCapsLock();
    runShift();


    code.forEach((key, index) => {
      document.addEventListener('keydown', function(event) {
        let activeKey = document.querySelectorAll('.key');

        if (event.code === key) {
          activeKey[index].classList.toggle('active');
        }
        if (event.code === 'ShiftLeft') {
          console.log('Hello from keyboard LeftShift')
        }
      });

      document.addEventListener('keyup', function(event) {
        let activeKey = document.querySelectorAll('.key');

        if (event.code === key) {
          activeKey[index].classList.remove('active');
        }
      });
    });


    document.addEventListener('mousedown', function(event) {
      const clickedElement = event.target;
      if (clickedElement.classList.contains('key')) {
        const dataValue = clickedElement.dataset.value;
        const activeKey = document.querySelectorAll('.key');

        code.forEach((key, index) => {
          if (dataValue === key) {
            activeKey[index].classList.add('active');
          } else {
            activeKey[index].classList.remove('active');
          }
        });
      }
    });

    document.addEventListener('mouseup', function(event) {
      const activeKey = document.querySelectorAll('.key');
      activeKey.forEach(function (key) {
        key.classList.remove('active');
      });
    });


myElement.forEach(function (element) {
  element.addEventListener('click', function (event) {

    const clickedElement = event.target;
    const dataValue = clickedElement.dataset.value;
    elementCount = countElements();
    myTextarea.focus();
    let found = false;


    keysToChange.forEach((key, index) => {
      if (keysToChange[index] === dataValue) {
        found = true;
      }
    });


    if (!found) {
      myTextarea.value += event.target.innerText;
    }
    if (dataValue === 'Backspace') {
      backspace();
    }
    if (dataValue === 'Delete') {
      del();
    }
    if (dataValue === 'Enter') {
      enter();
    }
    if (dataValue === 'Tab') {
        tab();
    }
    if (dataValue === 'Space') {
        space();
    }
  });
});

}
run()

let isKey2Active = true;
let isKey3Active = true;

function runCapsLock() {

  let capsLock = document.getElementById('myCapsLockId')
    capsLock.addEventListener('click', function (event) {
        capsLock.classList.toggle('active');
        if (isKey2Active) {
          init(keyUp);
        } else {
          init(key);
        }
        setKeyWidths(keyWidths);
        setKeysToChange(keysToChange);
        run();

        isKey2Active = !isKey2Active;
    })
}

function runShift() {
  let shiftLeft = document.getElementById('myShiftLeft');
  let shiftRight = document.getElementById('myShiftRight');
  let isKey3Active = false;

  shiftRight.addEventListener('mousedown', function (event) {
      if (isKey2Active) {
        init(key2);
      } else {
        init(key);
      }
      setKeyWidths(keyWidths);
      setKeysToChange(keysToChange);
      run();
      isKey3Active = !isKey3Active;
    });

    shiftRight.addEventListener('mouseup', function (event) {
      init(isKey3Active ? key2 : key);
      setKeyWidths(keyWidths);
      setKeysToChange(keysToChange);
      run();
      isKey3Active = false;
    });

    shiftLeft.addEventListener('mousedown', function (event) {
      if (isKey2Active) {
        init(key2);
      } else {
        init(key);
      }
      setKeyWidths(keyWidths);
      setKeysToChange(keysToChange);
      run();
      isKey3Active = !isKey3Active;
    });

    shiftLeft.addEventListener('mouseup', function (event) {
      init(isKey3Active ? key2 : key);
      setKeyWidths(keyWidths);
      setKeysToChange(keysToChange);
      run();
      isKey3Active = false;
    });
}


function countElements() {
  const count = myTextarea.value.length + 1;
  return count;
}

function backspace() {
    currentPosition = myTextarea.selectionStart;
    if (currentPosition === 0) {
      return;
    }
    const newValue = myTextarea.value.substring(0, currentPosition - 1) + myTextarea.value.substring(currentPosition);
    myTextarea.value = newValue;
    myTextarea.setSelectionRange(currentPosition - 1, currentPosition - 1);
  }

function del() {
  currentPosition = myTextarea.selectionStart;
  if (currentPosition === 0) {
    return;
  }
  const newValue = myTextarea.value.substring(0, currentPosition) + myTextarea.value.substring(currentPosition + 1);
  myTextarea.value = newValue;
  myTextarea.setSelectionRange(currentPosition, currentPosition);
}
function enter() {
  currentPosition = myTextarea.selectionStart;
  myTextarea.value = myTextarea.value.substring(0, currentPosition) + '\n' + myTextarea.value.substring(currentPosition);
  myTextarea.setSelectionRange(currentPosition + 1, currentPosition + 1);
}
function tab() {
    currentPosition = myTextarea.selectionStart;
    myTextarea.value = myTextarea.value.substring(0, currentPosition) + '    ' + myTextarea.value.substring(currentPosition);
    myTextarea.setSelectionRange(currentPosition + 4, currentPosition + 4);
}
function space() {
    currentPosition = myTextarea.selectionStart;
    myTextarea.value = myTextarea.value.substring(0, currentPosition) + ' ' + myTextarea.value.substring(currentPosition);
    myTextarea.setSelectionRange(currentPosition + 1, currentPosition + 1);
}
