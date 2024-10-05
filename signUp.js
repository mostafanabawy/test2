var usersList = [];
var userName = document.getElementById("signupName");
var userEmail = document.getElementById("signupEmail");
var userPassword = document.getElementById("signupPassword");
var signupBtn = document.getElementById("signUpBtn");

var emptyError = document.getElementById("ErrorMessage1");
var emailError = document.getElementById("ErrorMessage2");
var successMessage = document.getElementById("passMessage");
// get all the users if they exist
if (localStorage.getItem('allUsers') !== null) {
    usersList = JSON.parse(localStorage.getItem('allUsers'));
}

//on successfull signup save to localStorage
function saveData(data){
    localStorage.setItem('allUsers', JSON.stringify(data));
}

// sign up btn on click
signupBtn.addEventListener("click", function(){
    
    var user = {
        name: userName.value,
        email: userEmail.value,
        password: userPassword.value
    };
    // check if any inputs missing
    if (isNewUser(user) && userName.value != "" && userPassword.value != "" && validateMail(user.email)) {
        usersList.push(user);
        saveData(usersList);
        resetAllInputs();
        emptyError.classList.replace("d-block", "d-none");
        emailError.classList.replace("d-block", "d-none");
        successMessage.classList.replace("d-none", "d-block");
    }else if(userName.value == "" && userPassword.value == ""){
        emptyError.classList.replace("d-none", "d-block");
        emailError.classList.replace("d-block", "d-none");
        successMessage.classList.replace("d-block", "d-none");
        console.log("else if");
        console.log(userName.value);
        console.log(userPassword.value);
    }else{
        console.log("else");
        emptyError.classList.replace("d-block", "d-none");
        emailError.classList.replace("d-none", "d-block");
        successMessage.classList.replace("d-block", "d-none");
    }
});

// check if user already exists in the list of users
function isNewUser(user){
    for(var i = 0; i < usersList.length; i++){
        if(usersList[i].email === user.email){
            return false;
        }
    }
    return true;
}
function resetAllInputs(){
    userName.value = "";
    userEmail.value = "";
    userPassword.value = "";
}
function validateMail(mail) {
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(mail);
}