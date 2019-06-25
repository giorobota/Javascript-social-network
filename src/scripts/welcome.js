

export function loadWelcomeButtons(router, users, friends, API) {
    var passwordField = document.getElementById("password");
    var emailField = document.getElementById("email");
    var loginBtn = document.getElementById("login");
    var loginMsg = document.getElementById("message");
    loginBtn.addEventListener("click", function () {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", API, true);
        xhttp.onload = function () {
            for (var user in users) {
                if (users[user].email == emailField.value && users[user].password == passwordField.value) {

                    var userid = Number(user, 10);
                    localStorage.setItem("userid", userid);
                    router.navigate("home");
                    return;
                }
            }
            loginMsg.innerHTML = "incorrect username or password";
        }; 
        xhttp.send();
 
    });
    console.log("bla");
    initRegistration(router, users, friends, API);
}
function initRegistration(router, users, friends, API) {

    var button = document.getElementById("signup");
    button.onclick = function () {
        var email = document.getElementById("email-signup").value;
        var fName = document.getElementById("firstname").value;
        var lName = document.getElementById("lastname").value;
        var password = document.getElementById("password-signup").value;
        if (email == "" || fName == "" || lName == "" || password == "") {
            document.getElementById("message-signup").innerHTML = "please fill all fields";
        } else {

            var index = users.length;

            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", API, true);
            xhttp.onload = function () {
                if (emailInUse(email, users)) {
                    document.getElementById("message-signup").innerHTML = "email is already in use";
                } else {
                    users[index] = {
                        id: index,
                        firstName: fName,
                        lastName: lName,
                        picture: "../src/images/default-profile.png",
                        bio: "the user has not updated his bio",
                        email: email,
                        password: password
                    }
                    var userid = index;
                    friends[index] = {
                        userid: userid,
                        friends: []
                    }
                    localStorage.setItem("userid", userid);
                    router.navigate("home", false); 
                    console.log("navigated");
                } 
            }
            xhttp.send();
        }
    }
}
function emailInUse(email, users) {
    var inUse = false;
    for (var i in users) {
        if (users[i].email == email) {
            inUse = true;
        }
    }
    return inUse;
}

 