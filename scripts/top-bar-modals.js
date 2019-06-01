window.onload = function () {
    var url = new URL(window.location.href);
    var userid = url.searchParams.get("userid");
    if(userid >= users.length) window.location.href = "index.html";

    var requestsModal = document.getElementById("friend-requests-modal");



    var requestsOpenBtn = document.getElementById("friend-requests");


    var homeBtn = document.getElementById("logo");


    homeBtn.onclick = function () {
        window.location.href = "home.html?userid=" + userid;
    }
    requestsOpenBtn.onclick = function () {
        if (requestsModal.style.display == "block") {
            requestsModal.style.display = "none";
        } else {
            requestsModal.style.display = "block";
        }

    }
    window.onclick = function (event) {
        if (event.target == requestsModal) {
            requestsModal.style.display = "none";
        }
    }
}