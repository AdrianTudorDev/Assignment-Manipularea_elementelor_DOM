//label si inputuri
var userNameLabel = $('#usernamelabel')
var userNameInput = $('#usernameinput') 
var passwordLabel = $('#passwordlabel') 
var passwordInput = $('#passwordinput') 
var logIn = $('#login')

//stilizarea chenarelor
const checkVU = $('#checkVU') 
const closeXU = $('#closeXU') 
const checkVP = $('#checkVP') 
const closeXP = $('#closeXP') 

// variabilele de adevar
var userNameInputLogic = false
var passwordInputLogic = false

// schimbul variabilelor de adevar
function logicalCheck() {    
    if ($('#usernameinput').val() === 'new_user') {
        userNameInputLogic = true
    }       
    if (($('#usernameinput').val() === 'new_user') && ($('#passwordinput').val()  === '123456789')) {
        passwordInputLogic = true
    }
}

//verifica si stilizarea username 
const userNameInputFunction = () => {
    userNameInput.addClass('border-2')
    userNameLabel.addClass('fw-bold')
    if (userNameInputLogic) {    
        userNameInput.addClass('border-success')
        userNameInput.removeClass('border-danger')
        if (checkVU.hasClass('d-none')) {
            checkVU.removeClass('d-none')
        }
        if (!closeXU.hasClass('d-none')) {
            closeXU.addClass('d-none')  
        }
          
    } else {       
        userNameInput.addClass('border-danger')
        userNameInput.removeClass('border-success')
        closeXU.removeClass('d-none').removeClass('d-none')
        checkVU.removeClass('d-none').addClass('d-none')
        if (!checkVU.hasClass('d-none')) {
            checkVU.addClass('d-none')
        }
        if (closeXU.hasClass('d-none')) {
            closeXU.removeClass('d-none')  
        }   
    }    
}

//verifica si stilizarea password
const passwordInputFunction = () => {
    passwordInput.addClass('border-2')
    passwordLabel.addClass('fw-bold')
    if (passwordInputLogic) {       
        passwordInput.addClass('border-success')
        passwordInput.removeClass('border-danger')
        if (checkVP.hasClass('d-none')) {
            checkVP.removeClass('d-none')
        }
        if (!closeXP.hasClass('d-none')){
            closeXP.addClass('d-none')
        }
    } else {
        passwordInput.addClass('border-danger')
        passwordInput.removeClass('border-success')
        if (closeXP.hasClass('d-none')) {
            closeXP.removeClass('d-none')
        }
        if (!checkVP.hasClass('d-none')){
            checkVP.addClass('d-none') 
        }   
    }
}

//paragrafelor de eroare
const peu = $('#peu') 
const pevu = $('#pevu') 
const pep = $('#pep') 
const pevp = $('#pevp') 
const sl = $('#sl') 

//adaugarea paragrafelor de errore
function paragraphAdd(){    
    peu.addClass('d-none')
    pevu.addClass('d-none')
    pep.addClass('d-none')
    pevp.addClass('d-none')
    sl.addClass('d-none')    
    if ($('#usernameinput').val() === "") {
        peu.removeClass('d-none')
    } else if ($('#usernameinput').val() !== "new_user") {
        pevu.removeClass('d-none')
    } else if ($('#passwordinput').val() === "") {
        pep.removeClass('d-none')
    } else if ($('#passwordinput').val() !== "123456789") {
        pevp.removeClass('d-none')
    } else {
        sl.removeClass('d-none')
    }
} 

// Submit form
logIn.click((e) => {
    e.preventDefault()
    userNameInputLogic = false
    passwordInputLogic = false
    logicalCheck()
    userNameInputFunction()
    passwordInputFunction()
    paragraphAdd()
})

//submit form folosind metoda submit
/*var form = $('form')
form.submit((e)=>{
    e.preventDefault()
    userNameInputLogic = false
    passwordInputLogic = false
    logicalCheck()
    userNameInputFunction()
    passwordInputFunction()
    paragraphAdd()
})*/