window.onload = function(){ 
    var storyModal = document.getElementById("story-modal");
    var storyOpenBtn1 = document.getElementById("open-story-modal");
    var storyOpenBtn2 = document.getElementById("open-story-modal-image");
    var closeBtn = document.getElementById("close-story-modal");
    var commentModal = document.getElementById("comments-modal");
    var commentCloseBtn = document.getElementById("close-comments-modal");
    var commentOpenBtn = document.getElementById("open-comments-modal");
    
    commentOpenBtn.onclick = function () {
        commentModal.style.display = "block";
    }
    window.onclick = function (event) {
        if (event.target == commentModal) {
            commentModal.style.display = "none";
        }
    }
    commentCloseBtn.onclick = function () {
        commentModal.style.display = "none";
    }
    storyOpenBtn1.onclick = function () {
        storyModal.style.display = "block";
    }
    storyOpenBtn2.onclick = function () {
        storyModal.style.display = "block";
    }
    window.onclick = function (event) {
        if (event.target == storyModal) {
            storyModal.style.display = "none";
        }
    }
    closeBtn.onclick = function () {
        storyModal.style.display = "none";
    }


}