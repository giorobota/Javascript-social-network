window.onload = function(){ 
    var modal = document.getElementById("comments-modal");
    var closeBtn = document.getElementById("close-comments-modal");
    var openBtn = document.getElementById("open-comments-modal");
    
    openBtn.onclick = function () {
        modal.style.display = "block";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }
}
