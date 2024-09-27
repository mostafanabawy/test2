var usersList = [];
var emailInput = document.getElementById('signinEmail');
var passwordInput = document.getElementById('signinPassword');
var signinBtn = document.getElementById('signInBtn');
var emptyError = document.getElementById("firstError");
var wrongInputError = document.getElementById("secondError");

var message = document.getElementById('userWelcome');
//get all users in local storage if they exist
if (localStorage.getItem('allUsers') !== null) {
    usersList = JSON.parse(localStorage.getItem('allUsers'));
}


signinBtn.addEventListener('click', function () {
    let validLogin = false;  //flag used in case no match found and error message doesn't flash on correct input
    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].email === emailInput.value && usersList[i].password === passwordInput.value) {
            localStorage.setItem("currentUser", JSON.stringify(usersList[i]));
            localStorage.setItem("isLogged", "true")
            window.open("./home.html", "_self")
            validLogin = true;
            break;
        }
    }
    if (!validLogin) {
        if (emailInput.value == "" || passwordInput.value == "") {
            emptyError.classList.replace("d-none", "d-block");
            wrongInputError.classList.replace("d-block", "d-none");
        } else {
            wrongInputError.classList.replace("d-none", "d-block");
            emptyError.classList.replace("d-block", "d-none");
        }
    }
});





