window.onload = function () {

    var eventModal = document.getElementById("event-modal");
    var requestsModal = document.getElementById("friend-requests-modal");


    var eventOpenBtn = document.getElementsByClassName("event-name");
    var requestsOpenBtn = document.getElementById("friend-requests");

    var eventCloseBtn = document.getElementById("close-event-modal");

    var homeBtn = document.getElementById("logo");

    Array.from(eventOpenBtn).forEach((elem) => {

        elem.onclick = function () {
            eventModal.style.display = "block";
        }
    });

    eventCloseBtn.onclick = function () {
        eventModal.style.display = "none";
    }
    window.onclick = function (event) {
        if (event.target == eventModal) {
            eventModal.style.display = "none";
        }
        if (event.target == requestsModal) {
            requestsModal.style.display = "none";
        }
    }
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
}