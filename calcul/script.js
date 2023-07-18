function clearOutput() {
    document.forms.output.value = '';
}

function divide() {
    document.forms.output.value += '/';
}
 
function one() {
    document.forms.output.value += '1';
}

function two() {
    document.forms.output.value += '2';
}

function three() {
    document.forms.output.value += '3';
}

function multi() {
    document.forms.output.value += '*';
}

function four() {
    document.forms.output.value += '4';
}

function five() {
    document.forms.output.value += '5';
}

function six() {
    document.forms.output.value += '6';
}

function plus() {
    document.forms.output.value += '+';
}

function seven() {
    document.forms.output.value += '7';
}

function eight() {
    document.forms.output.value += '8';
}

function nine() {
    document.forms.output.value += '9';
}

function minus() {
    document.forms.output.value += '-';
}

function dot() {
    document.forms.output.value += '.';
}

function zero() {
    document.forms.output.value += '0';
}

function result() {
    document.forms.output.value = eval(document.forms.output.value);
}

// function calculate() {
//     var output = document.forms.output;
//     output.value = eval(output.value);
// }
