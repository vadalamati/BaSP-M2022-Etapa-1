var nombre = document.getElementById('name-sign');
var apellido = document.getElementById('surName-sign');
var doc = document.getElementById('dni');
var fecNac = document.getElementById('fdn-sign');
var telefono = document.getElementById('tel-sign');
var dir = document.getElementById('dir-sign');
var adress = document.getElementById('location-sign');
var cp = document.getElementById('cp-sign');
var email = document.getElementById('email-sign');
var pass = document.getElementById('pass-sign');
var repass = document.getElementById('repass-sign');
var hideAlert = document.getElementsByClassName('error-text');
var validateValue = document.getElementsByClassName('inner-span');
var validateForm = document.getElementsByClassName('hide-cartel');
var form = document.getElementsByTagName('form');
var closeModal = document.getElementById('close-modal');

nombre.onfocus = function () {
    myFocus(nombre, 0);
};
nombre.onblur = function () {
    myBlur(nombre, 0);
};
apellido.onfocus = function () {
    myFocus(apellido, 1);
};
apellido.onblur = function () {
    myBlur(apellido, 1);
};
doc.onfocus = function () {
    myFocus(doc, 2);
};
doc.onblur = function () {
    myBlur(doc, 2);
};
fecNac.onfocus = function () {
    myFocus(fecNac, 3);
};
fecNac.onblur = function () {
    myBlur(fecNac, 3);
};
telefono.onfocus = function () {
    myFocus(telefono, 4);
};
telefono.onblur = function () {
    myBlur(telefono, 4);
};
dir.onfocus = function () {
    myFocus(dir, 5);
};
dir.onblur = function () {
    myBlur(dir, 5);
};
adress.onfocus = function () {
    myFocus(adress, 6);
};
adress.onblur = function () {
    myBlur(adress, 6);
};
cp.onfocus = function () {
    myFocus(cp, 7);
};
cp.onblur = function () {
    myBlur(cp, 7);
};
email.onfocus = function () {
    myFocus(email, 8);
};
email.onblur = function () {
    myBlur(email, 8);
};
pass.onfocus = function () {
    myFocus(pass, 9);
};
pass.onblur = function () {
    myBlur(pass, 9);
};
repass.onfocus = function () {
    myFocus(repass, 10);
};
repass.onblur = function () {
    myBlur(repass, 10);
};
form[1].onsubmit = function (e) {
    e.preventDefault();
    if (
        validateLetters(nombre, 3) &&
        validateLetters(apellido, 3) &&
        validateNumbers(doc, 7) &&
        validateTel(telefono, 10)&&
        isAdult(fecNac)&&
        formDate(fecNac)&&
        validateDate(fecNac)&&
        validateDir(dir, 5)&&
        validateAdress(adress, 3)&&
        validateCp(cp)&&
        validateMail(email)&&
        validatePass(pass, 8)&&
        validateRePass(pass, repass) 
    ) {
        alert(`Nombre: ${nombre.value}` + `\nApellido: ${apellido.value} ` +
        `\nDni: ${doc.value}` + `\nTel:${telefono.value}` + `\nDir: ${dir.value}` +
        `\nLocalidad: ${adress.value}` + `Fecha de Nacimiento: ${fecNac.value}`
        `\nCp: ${cp.value}` + `\nMail: ${email.value}` + `\nPass: ${pass.value}` )
    }
    else {
        alert('Revise los campos')
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

function validateMail(x) {
    var regexMail = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
    if (regexMail.test(x.value)) {
        return true;
    } else {
        return false;
    }
}

function validateLetters(x, valor) {
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
    if (x.value.length >= valor && num == 0 && char >= 1) {
        return true;
    } else {
        return false;
    }
}

function validateDir(x, valor) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var space = [' '];
    var num = 0;
    var spa = 0;
    var char = 0;
    for (i = 0; i < x.value.length; i++) {
        if (numbers.includes(x.value[i])) {
            num++;
        } else if (space.includes(x.value[i])) {
            spa++;
        } else {
            char++;
        }
    }
    if (x.value.length >= valor && num >= 1 && char >= 1 && spa == 1) {
        return true;
    } else {
        return false;
    }
}

function validateNumbers(x, valor) {
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
    if (x.value.length >= valor && num >= 1 && char == 0) {
        return true;
    } else {
        return false;
    }
}
function validateCp(x) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num = 0;
    for (i = 0; i < x.value.length; i++) {
        if (numbers.includes(x.value[i])) {
            num++;
        }
    }
    if (x.value.length <= 5 && num >= 4) {
        return true;
    } else {
        return false;
    }
}

function validateTel(x, valor) {
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
    if (x.value.length == valor && num >= 1 && char == 0) {
        return true;
    } else {
        return false;
    }
}

function validatePass(x, valor) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var alph = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    var minValue = x.value.toLowerCase();
    var num = 0;
    var char = 0;
    var special = false;
    for (i = 0; i < x.value.length; i++) {
        if (numbers.includes(x.value[i])) {
            num++;
        } else if (alph.includes(minValue[i])) {
            char++;
        } else {
            special = true;
        }
    }
    if (x.value.length >= valor && num >= 1 && char >= 1 && special == false) {
        return true;
    } else {
        return false;
    }
}

function validateAdress(x, valor) {
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var alph = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    var minValue = x.value.toLowerCase();
    var num = 0;
    var char = 0;
    var specialChar = false;
    for (i = 0; i < x.value.length; i++) {
        if (numbers.includes(x.value[i])) {
            num++;
        } else if (alph.includes(minValue[i])) {
            char++;
        } else {
            specialChar = true;
        }
    }
    if (x.value.length >= valor && num >= 0 && char >= 3) {
        return true;
    } else {
        return false;
    }
}

function validateRePass(x, y) {
    if (x.value == y.value) {
        return true;
    } else {
        return false;
    }
}

function isAdult (date){
    
    var date = new Date(date.value);
    var currentDate = new Date(Date.now());

    return new Date(currentDate - date).getFullYear() - 1970 >= 18;
}

function formDate(dateToForm) {

    var [year, month, day] = dateToForm.value.split("-");
    var formattedDate = `${day}/${month}/${year}`;
    
    return  formattedDate;
}

function validateDate(dateToValidate){

    var [year, month, day] = dateToValidate.value.split("-");
    var isoFormattedStr = `${year}/${month}/${day}`;
    var date = new Date(isoFormattedStr);
    var currentDate = new Date(Date.now());

    return currentDate >= date
}