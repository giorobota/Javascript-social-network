window.onload = function () {
    var storyModal = document.getElementById("story-modal");
    var commentModal = document.getElementById("comments-modal");
    var requestsModal = document.getElementById("friend-requests-modal");




    var requestsOpenBtn = document.getElementById("friend-requests");
    var commentOpenBtn = document.getElementsByClassName("open-comments-modal");
    var storyOpenBtn1 = document.getElementsByClassName("open-story-modal");
    // var storyOpenBtn2 = document.getElementsByClassName("open-story-modal-image");


    var commentCloseBtn = document.getElementById("close-comments-modal");


    var homeBtn = document.getElementById("logo");



    requestsOpenBtn.onclick = function () {
        if (requestsModal.style.display == "block") {
            requestsModal.style.display = "none";
        } else {
            requestsModal.style.display = "block";
        }

    }

    homeBtn.onclick = function () {
        window.location.href = "home.html";
    }

    Array.from(commentOpenBtn).forEach((elem) => {

        elem.onclick = function () {
            commentModal.style.display = "block";
        }
    });
    Array.from(storyOpenBtn1).forEach((elem) => {

        elem.onclick = function () {
            storyModal.style.display = "block";
        }
    });


    window.onclick = function (event) {
        if (event.target == commentModal) {
            commentModal.style.display = "none";
        }
        if (event.target == storyModal) {
            storyModal.style.display = "none";
        }
        if (event.target == requestsModal) {
            requestsModal.style.display = "none";
        }
    }
    commentCloseBtn.onclick = function () {
        commentModal.style.display = "none";
    }





}