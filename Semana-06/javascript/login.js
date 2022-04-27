var mail = document.getElementById('email');
var pass = document.getElementById('pass');
var hideAlert = document.getElementsByClassName('error-text');
var form = document.getElementsByTagName('form');

function mailValidator(x) {
    var regexMail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    if (regexMail.test(x.value)) {     
        return true;
        
    } else {
        return false;
    }
}
function passValidator(x) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    var char = 0;
    for (i = 0; i < x.value.length; i++) {
        if (numbers.includes(x.value[i])) {
            num++;
        } else {
            char++;
        }
    }
    if (x.value.length >= 8 && num >= 1 && char >= 1) {
        return true;
    } else {
        return false;
    }
}


function myFocus(x, i) {
    x.classList.remove('blur');
    hideAlert[i].classList.remove('error');
}
function myBlur(x, i) {
    if (x.value == '') {
        x.classList.add('blur');
        x.classList.remove('correct');
        hideAlert[i].classList.add('error');
    } else {
        x.classList.add('correct');
    }
}

mail.onfocus = function () {
    myFocus(mail, 0);
};
mail.onblur = function () {
    myBlur(mail, 0);
};
pass.onfocus = function () {
    myFocus(pass, 1);
};
pass.onblur = function () {
    myBlur(pass, 1);
};

form[1].onsubmit = function (e) {
    e.preventDefault();
    if (mailValidator(mail) == true && passValidator(pass) == true) {
        window.alert(`Datos de validación` + `\n Email: ${mail.value}` + `\n Contraseña: ${pass.value}`);  
    } else if (mailValidator(mail) == false && passValidator(pass) == true) {
        alert('El email ingresado no posee un formato válido');
        mail.classList.add('blur');
        mail.classList.remove('correct');
        hideAlert[0].classList.add('error');
    } else if (mailValidator(mail) == true && passValidator(pass) == false) {
        alert('La contraseña ingresada no posee un formato válido');
        pass.classList.add('blur');
        pass.classList.remove('correct');
        hideAlert[1].classList.add('error');
    } else {
        alert('Los datos ingresados no poseen un formato válido');
        mail.classList.add('blur');
        mail.classList.remove('correct');
        hideAlert[0].classList.add('error');
        pass.classList.add('blur');
        pass.classList.remove('correct');
        hideAlert[1].classList.add('error');
    }
};
