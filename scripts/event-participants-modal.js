window.onload = function(){ 
    var modal = document.getElementById("modal");
    var closeBtn = document.getElementById("closemodal");
    var openBtn = document.getElementById("openmodal");
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




