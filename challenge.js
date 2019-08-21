let passwordSteps = [];
let validationSteps = [];

//functions checkname controls name input validation
function checkName() {
    console.log(this.value.length);
    if(this.value.length>0){
        document.getElementById('name').style.border = "1px solid #6ce2bd";
        checkValidationsSteps('add','name');
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
    }else{
        document.getElementById('email').style.border = "1px solid #B6B9D0";
        checkValidationsSteps('remove','email');
    }
}

function checkPassword(){
    let passRegex =  "[A-Z]";
    let passNumberRegex = "[0-9]";
    if(this.value.length>=6){
        console.log('sklskljs');
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

function checkConditionsQty(){
    if(passwordSteps.length===0){
        document.getElementById('indicator1').style.background = "#EaEaf4"
        document.getElementById('indicator2').style.background = "#EaEaf4"
        document.getElementById('indicator3').style.background = "#EaEaf4"
        checkValidationsSteps("remove","password")
    }else if(passwordSteps.length===1){
        document.getElementById('indicator1').style.background = "#f78692";
        document.getElementById('indicator2').style.background = "#EaEaf4"
        document.getElementById('indicator3').style.background = "#EaEaf4"
        checkValidationsSteps("remove","password")
    }else if(passwordSteps.length===2){
        document.getElementById('indicator1').style.background = "#f7bc1c"
        document.getElementById('indicator2').style.background = "#f7bc1c"
        document.getElementById('indicator3').style.background = "#EaEaf4"
        checkValidationsSteps("remove","password")
    }else if(passwordSteps.length===3){
        document.getElementById('indicator1').style.background = "#1fe6a8";
        document.getElementById('indicator2').style.background = "#1fe6a8";
        document.getElementById('indicator3').style.background = "#1fe6a8";
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
                console.log('button able');
            }
        }else{
            validationSteps = validationSteps.filter(element=>element!=input);
            console.log(validationSteps);
        }
    }
}

document.getElementById('name').addEventListener('input',checkName);
document.getElementById('email').addEventListener('input',checkEmail)
document.getElementById('password').addEventListener('input',checkPassword)


