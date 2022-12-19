let string = " "; //empty string
let buttons = document.querySelectorAll('button');  //select all the button elements for make an event and call it.
Array.from(buttons).forEach((button) => {           //forEach loop for all buttons.
    button.addEventListener('click', (e) => {       //add EventListener when click on button and make a function name 'e'
        if (e.target.innerHTML == '=') {            //when use click on '=' then evaluate the eqution else show the eqution or input numbers.
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'X') {
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '%') {
            string=string/100;
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})