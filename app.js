let currentInput = document.querySelector('.currentInput');
let solvedScreen = document.querySelector('.solvedScreen');
let buttons = document.querySelectorAll('button');
let deletebtn = document.querySelector('#delete');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let realTimeScreenValue = []

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    solvedScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    solvedScreen.className = 'solvedScreen';
    solvedScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

buttons.forEach((btn) => {


    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('delete')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {
                solvedScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        // When erase button is clicked
        if (btn.id.match('delete')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            solvedScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'solvedScreen';
            solvedScreen.className = 'currentInput';
            solvedScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            solvedScreen.innerHTML = 0
        }
    })
})    