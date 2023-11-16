//Кнопка темы
const   switchBtn = document.getElementById('switch-btn'),
        wrapper = document.getElementById('wrapper');
        
switchBtn.addEventListener('click', () => {
        switchBtn.classList.toggle('switch-on');
        wrapper.classList.toggle('night');
        const btnColor = document.querySelectorAll('.theme');
        for(btn of btnColor) {
            btn.classList.toggle('number-color');
        };
    });

//Calculator
let a = '',
    b = '',
    c = null;
    h = '',
    sign = '',
    last = '',
    finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
      action = ['÷', '∗', '-', '+'],
      changeSign = ['±'],
      percentage = ['%'];

//Scren
const task = document.querySelector('.task'),
      result = document.querySelector('.result'),
      buttons = document.querySelectorAll('.btn');

const clearAll = () => {
        a = '';
        b = '';
        c = null;
        h = '';
        last = '';
        sign = '';
        finish = false;
        task.textContent = '';
        result.textContent = '';
};
//Batton
for(button of buttons) {
    button.addEventListener('click', (event) => {
        if(event.target.classList.contains('ac')) {
            clearAll();
        };
        const key = event.target.textContent; 
        if(digit.includes(key)) {
            if(b === '' && c !== '' && sign === '') {
                if(key === '.') {
                    h = '0.';
                    a = key;
                    c = '';
                    task.textContent = h;
                    console.log(" h=" + h + " sign=" + sign, finish);
                }
                else {
                    a = key;
                    h = key;
                    c = '';
                    task.textContent = h;
                    console.log(" h=" + h + " sign=" + sign, finish);
                }
            }
            else if(b === '' && sign === '') {
                a += key;
                h += key;
                task.textContent = h;
                console.log(" h=" + h + " sign=" + sign, finish);
            }
            else if(b !== '' && sign !== '' && finish) {
                b += key;
                h += key;
                task.textContent = h;
                finish = false;
                console.log(" h=" + h + " sign=" + sign, finish);
            }
            else {
                if(key === '.' && b === '') {
                    h += '0.';
                    b += key;
                    task.textContent = h;
                    console.log(" h=" + h + " sign=" + sign, finish);
                }
                else {
                    b += key;
                    h += key;
                    task.textContent = h;
                    console.log(" h=" + h + " sign=" + sign, finish, a, b);
                }
            }
            return
        };
        if(action.includes(key)) {
            if (sign !== '') {
                switch(sign) {
                case "+":
                    a = (+a) + (+b);
                    break;
                case "-":
                    a = a - b;
                    break;
                case "∗":
                    a = a * b;
                    break;
                case "÷":
                    a = a / b;
                    break;
                }
                b = '';
            }
            sign = key;
            if(h === "") {
                return
            }
            else if (h === c) {
                h += key;
            }
            else {
                last = h.slice(-1);
                if(last == sign) {
                    return
                }
                else if((last == '+' || last == '÷' || last == '∗' || last == '-')  && last !== sign) {
                    h = h.slice(0, -1);
                    h += key;
                    console.log(" h=" + h + " sign=" + sign, finish, a, b);
                }
                else {
                    h += key;
                    console.log(last);
                }
            }
            task.textContent = h;
            console.log(" h=" + h + " sign=" + sign, finish);
            return
        };
        if(changeSign.includes(key)) {
            if(a > 0){
                a = (-a);
            }
        };
        if(key === "=") {
            if(b === '') b = a;
            switch(sign) {
                case "+":
                    c = (+a) + (+b);
                    break;
                case "-":
                    c = a - b;
                    break;
                case "∗":
                    c = a * b;
                    break;
                case "÷":
                    c = a / b;
                    break;
            }
            finish = true;
            sign = '';
            result.textContent = c;
            task.textContent = '';
            a = c;
            b = '';
            h = c;
            console.log(" h=" + h + " sign=" + sign, finish);
        }
    })
};



