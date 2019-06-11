window.onload = function(){
    console.log("loaded welcome");
    var loginBtn = document.getElementById("login");
    loginBtn.addEventListener("click", function () {
        var getUrl = window.location;
        var baseUrl = getUrl .protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
        window.location = baseUrl + "!#" + "home";
    });
    console.log("clicked login");
}