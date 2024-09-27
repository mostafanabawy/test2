//redirect if not logged in
if (!JSON.parse(localStorage.getItem("isLogged"))) {
    window.open("./index.html", "_self");
    console.log(!Boolean(localStorage.getItem("isLogged")) == true);
}
var logBtn = document.getElementById("logout");
var user = JSON.parse(localStorage.getItem("currentUser"));
var welcomeMessageContainer = document.getElementById("userWelcome");
var welcomeMessage = document.createElement("h1");
//welcome message creation
welcomeMessage.textContent = "Welcome " + user.name;
welcomeMessage.style.textTransform = "capitalize";
welcomeMessageContainer.append(welcomeMessage);
//logout button
logBtn.addEventListener("click", function () {
    localStorage.setItem("isLogged", "false");
    localStorage.removeItem("currentUser");
    window.open("./index.html", "_self");
 
});