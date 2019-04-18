window.onload = function () {

    var commentModal = document.getElementById("comments-modal");
    var requestsModal = document.getElementById("friend-requests-modal");




    var requestsOpenBtn = document.getElementById("friend-requests");
    var commentOpenBtn = document.getElementsByClassName("open-comments-modal");



    var commentCloseBtn = document.getElementById("close-comments-modal");


    var homeBtn = document.getElementById("logo");





    homeBtn.onclick = function () {
        window.location.href = "home.html";
    }


    requestsOpenBtn.onclick = function () {
        if (requestsModal.style.display == "block") {
            requestsModal.style.display = "none";
        } else {
            requestsModal.style.display = "block";
        }

    }

    Array.from(commentOpenBtn).forEach((elem) => {

        elem.onclick = function () {
            commentModal.style.display = "block";
        }
    });


    window.onclick = function (event) {
        if (event.target == commentModal) {
            commentModal.style.display = "none";
        }
        if (event.target == requestsModal) {
            requestsModal.style.display = "none";
        }
    }
    commentCloseBtn.onclick = function () {
        commentModal.style.display = "none";
    }





}