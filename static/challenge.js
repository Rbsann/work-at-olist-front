let passwordSteps = [];
let validationSteps = [];
let password;
let user;
let email;



//functions checkname controls name input validation
function checkName() {
    console.log(this.value.length);
    if(this.value.length>0){
        document.getElementById('name').style.border = "1px solid #6ce2bd";
        checkValidationsSteps('add','name');
        name =this.value;
    }else{
        console.log('name equals zero');
        document.getElementById('name').style.border = "1px solid #B6B9D0";
        checkValidationsSteps('remove','name');
    }
    
}

//controls email input validation, using regex to check it.
function checkEmail() { 
    console.log(this.value);
    let emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    if(this.value.match(emailRegex)){
        document.getElementById('email').style.border = "1px solid #6ce2bd";
        checkValidationsSteps('add','email');
        email = this.value;
    }else{
        document.getElementById('email').style.border = "1px solid #B6B9D0";
        checkValidationsSteps('remove','email');
    }
}

//check password conditions, one by one

function checkPassword(){
    let passRegex =  "[A-Z]";
    let passNumberRegex = "[0-9]";
    password = this.value;
    if(this.value.length>=6){
        document.getElementById('firstCondition').classList.add('bulletColor');
        checkPasswordConditions('add','firstCondition');
    }else if(this.value.length<6){
        document.getElementById('firstCondition').classList.remove('bulletColor');
        checkPasswordConditions('remove','firstCondition');
    }if(this.value.match(passRegex)){
        document.getElementById('secondCondition').classList.add('bulletColor');
        checkPasswordConditions('add','secondCondition');
    }else{
        document.getElementById('secondCondition').classList.remove('bulletColor');
        checkPasswordConditions('remove','secondCondition');
    }if(this.value.match(passNumberRegex)){
        document.getElementById('thirdCondition').classList.add('bulletColor');
        checkPasswordConditions('add','thirdCondition');
    }else{
        document.getElementById('thirdCondition').classList.remove('bulletColor');
        checkPasswordConditions('remove','thirdCondition');
    }
}


//check if confirmed password is the same as the previously typed password
function confirmPassword() {
    if(password==this.value){
        document.getElementById('passwordConfirmation').style.border = "1px solid #6ce2bd";
        checkValidationsSteps('add','confirmedPassword')
        password = this.value
    }else{
        document.getElementById('passwordConfirmation').style.border = "1px solid #B6B9D0";
        checkValidationsSteps('remove','confirmedPassword')
    }
}

//build password steps array

function checkPasswordConditions(method,condition) {
    if(passwordSteps.includes(condition) && method!="remove"){
        return
    }else{
        if(method==='add'){
            passwordSteps.push(condition);
            checkConditionsQty();
        }else{
            passwordSteps = passwordSteps.filter(element=>element!=condition);
            checkConditionsQty();
        }
    }
}

//check if all conditions have passed the test.
function checkConditionsQty(){
    if(passwordSteps.length===0){
        document.getElementById('indicator1').style.background = "#EaEaf4"
        document.getElementById('indicator2').style.background = "#EaEaf4"
        document.getElementById('indicator3').style.background = "#EaEaf4"
        document.getElementById('password').style.border = "1px solid #B6B9D0"
        checkValidationsSteps("remove","password")
    }else if(passwordSteps.length===1){
        document.getElementById('indicator1').style.background = "#f78692";
        document.getElementById('indicator2').style.background = "#EaEaf4"
        document.getElementById('indicator3').style.background = "#EaEaf4"
        document.getElementById('password').style.border = "1px solid #B6B9D0"
        checkValidationsSteps("remove","password")
    }else if(passwordSteps.length===2){
        document.getElementById('indicator1').style.background = "#f7bc1c"
        document.getElementById('indicator2').style.background = "#f7bc1c"
        document.getElementById('indicator3').style.background = "#EaEaf4"
        document.getElementById('password').style.border = "1px solid #B6B9D0"
        checkValidationsSteps("remove","password")
    }else if(passwordSteps.length===3){
        document.getElementById('indicator1').style.background = "#1fe6a8";
        document.getElementById('indicator2').style.background = "#1fe6a8";
        document.getElementById('indicator3').style.background = "#1fe6a8";
        document.getElementById('password').style.border = "1px solid #6ce2bd"
        checkValidationsSteps("add","password")
        
    }
    

}

//function that checks if all fields are correctly filled.
function checkValidationsSteps(method,input){
    if(validationSteps.includes(input) && method!="remove"){
        console.log(validationSteps);
        return
    }else{
        if(method==='add'){
            validationSteps.push(input);
            if(validationSteps.length==4){
                document.getElementById('confirmButton').removeAttribute('disabled')
            }else{
                document.getElementById('confirmButton').setAttribute('disabled','disabled');
            }
        }else{
            validationSteps = validationSteps.filter(element=>element!=input);
            console.log(validationSteps);
        }
    }
}


// Function that goes beyond what is required on the challenged
//Instead of simply redirecting to another page it sends a post request to a endpoint configured with python flask
function sendForm() {
    var element = document.getElementById('button-text');
    var newEl = document.createElement('i');
    newEl.classList.add("fa")
    newEl.classList.add("fa-spinner")
    newEl.classList.add('fa-spin')
    element.parentNode.replaceChild(newEl,element);
    var data ={name,email,password};
    $.ajax({
        url: "/user",
        type: "post",
        data:JSON.stringify(data),
        contentType: "application/json",
        dataType: "json",
        success:function(response){
            console.log(response);
            window.location.href = '/success'
        }
    });

    console.log('sending')

}


//document element hooks
document.getElementById('name').addEventListener('input',checkName);
document.getElementById('email').addEventListener('input',checkEmail)
document.getElementById('password').addEventListener('input',checkPassword)
document.getElementById('passwordConfirmation').addEventListener('input',confirmPassword)
document.getElementById('confirmButton').addEventListener('click',sendForm);

