window.onload = function (){
    if (
        localStorage.getItem('name') != null &&
        localStorage.getItem('surname') != null &&
        localStorage.getItem('dni') != null &&
        localStorage.getItem('date of birth') != null &&
        localStorage.getItem('phone number') != null &&
        localStorage.getItem('address') != null &&
        localStorage.getItem('city') != null &&
        localStorage.getItem('zip') != null &&
        localStorage.getItem('email') != null &&
        localStorage.setItem('password', pass.value)
    ) {
        fName.value = localStorage.getItem('name');
        surname.value = localStorage.getItem('lastName');
        doc.value = localStorage.getItem('dni');
        date.value = localStorage.getItem('date');
        phoneNumber.value = localStorage.getItem('phone');
        dir.value = localStorage.getItem('address');
        adress.value = localStorage.getItem('city');
        cp.value = localStorage.getItem('zip');
        email.value = localStorage.getItem('email')
    }  
}

var fName = document.getElementById('name-sign');
var surname = document.getElementById('surName-sign');
var doc = document.getElementById('dni');
var date = document.getElementById('fdn-sign');
var phoneNumber = document.getElementById('tel-sign');
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

function signUp (
    fNameValue,
    surnameValue,
    docValue,
    dateValue,
    phoneNumberValue,
    addressValue,
    dirValue,
    cpValue,
    emailValue,
    passValue,
    url
) {
    fetch(
        url +
        '?name=' +
        fNameValue +
        '&lastName=' +
        surnameValue +
        '&dni=' +
        docValue +
        '&dob=' +
        dateValue +
        '&phone=' +
        phoneNumberValue +
        '&address=' +
        addressValue +
        '&city=' +
        dirValue +
        '&zip=' +
        cpValue +
        '&email=' +
        emailValue +
        '&password=' +
        passValue
    )
        .then (function (response){
            return response.json();
        })
        .then(function (jsonReponse){
            alert(jsonReponse.msg);
            if (jsonReponse.success) {
                dataStorage();
                window.alert
                (`name: ${fName.value}` + `\nsurname: ${surname.value} ` +
                `\nDni: ${doc.value}` + `\nPhone Number:${phoneNumber.value}` + `\nDir: ${dir.value}` +
                `\nCity: ${adress.value}` + `Fecha de Nacimiento: ${date.value}`
                `\nCp: ${cp.value}` + `\nMail: ${email.value}` + `\nPass: ${pass.value}` );
            } else {
                alert('Revise los campos');
            }
        })
        .catch(function(error){
            console.log ('Error: ', error);
        });
}


function dataStorage(){
    localStorage.setItem('name', fName.value);
    localStorage.setItem('surname', surname.value);
    localStorage.setItem('dni', doc.value);
    localStorage.setItem('date of birth', date.value);
    localStorage.setItem('phone number', phoneNumber.value);
    localStorage.setItem('address', dir.value);
    localStorage.setItem('city', adress.value);
    localStorage.setItem('zip', cp.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', pass.value);
    
}

// event
fName.onfocus = function () {
    myFocus(fName, 0);
};
fName.onblur = function () {
    myBlur(fName, 0);
};
surname.onfocus = function () {
    myFocus(surname, 1);
};
surname.onblur = function () {
    myBlur(surname, 1);
};
doc.onfocus = function () {
    myFocus(doc, 2);
};
doc.onblur = function () {
    myBlur(doc, 2);
};
date.onfocus = function () {
    myFocus(date, 3);
};
date.onblur = function () {
    myBlur(date, 3);
};
phoneNumber.onfocus = function () {
    myFocus(phoneNumber, 4);
};
phoneNumber.onblur = function () {
    myBlur(phoneNumber, 4);
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
    var url = 'https://basp-m2022-api-rest-server.herokuapp.com/signup';
    if (
        validateLetters(fName, 3) &&
        validateLetters(surname, 3) &&
        validateNumbers(doc, 7) &&
        validateTel(phoneNumber, 10)&&
        isAdult(date)&&
        formDate(date)&&
        validateDate(date)&&
        validateDir(dir, 5)&&
        validateAdress(adress, 3)&&
        validateCp(cp)&&
        validateMail(email)&&
        validatePass(pass, 8)&&
        validateRePass(pass, repass) 
    ) {
        signUp (  
            fName.value,
            surname.value,
            doc.value,
            phoneNumber.value,
            date.value,
            dir.value,
            adress.value,
            cp.value,
            email.value,
            pass.value,
            url
        );
    }
    else {
        alert('Revise los campos')
    }       
}