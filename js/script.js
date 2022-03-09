const myPsw = document.getElementById("passwordInput");
const smallLetter = document.getElementById("letter");
const capitalLetter = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");
const myEmail = document.getElementById('myEmail')


myPsw.onfocus = () =>{
    document.getElementById('info_msg').style.display = 'block'
}
myPsw.onblur = () =>{
    document.getElementById('info_msg').style.display = 'none'
}

myPsw.onkeyup = () =>{
    let lowerCase = /[a-z]/g;
    if(myPsw.value.match(lowerCase)){
        smallLetter.classList.remove('invalid_info')
        smallLetter.classList.add('valid_info')
    }
    else{
        smallLetter.classList.remove('valid_info')
        smallLetter.classList.add('invalid_info')
    }

    let upperCase = /[A-Z]/g;
    if(myPsw.value.match(upperCase)){
        capitalLetter.classList.remove('invalid_info')
        capitalLetter.classList.add('valid_info')
    }
    else{
        capitalLetter.classList.remove('valid_info')
        capitalLetter.classList.add('invalid_info')
    }

    let numbers = /[0-9]/g;
    if(myPsw.value.match(numbers)){
        number.classList.remove('invalid_info')
        number.classList.add('valid_info')
    }
    else{
        number.classList.remove('valid_info')
        number.classList.add('invalid_info')
    }

    if(myPsw.value.length >= 8 && myPsw.value.length == 8){
        length.classList.remove('invalid_info')
        length.classList.add('valid_info')
    }
    else{
        length.classList.remove('valid_info')
        length.classList.add('invalid_info')
    }


}

myEmail.onkeyup = () =>{
    let email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if( myEmail.value.match(email)){
        myEmail.style.border = '1px solid #fa91d3'
    }
    else{
        myEmail.style.border = '1px solid #ff0000'
    }
}





