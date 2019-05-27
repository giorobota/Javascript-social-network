window.onload = function () {


    var requestsModal = document.getElementById("friend-requests-modal");



    var requestsOpenBtn = document.getElementById("friend-requests");


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
    window.onclick = function (event) {
        if (event.target == requestsModal) {
            requestsModal.style.display = "none";
        }
    }
    //test


}
var groupList = document.getElementById("groups");
var groups = require('../data/groups.json');
var res = "";
for (var group in groups) {
    res += '<div class="single-event"><div class="event-author"><h2><a class="event-name" href="group.html' + group.groupId +
        '">' + group.groupName + '</a></h2></div><hr><div class="event-content">' + group.description + "</div>";
}
groupList.innerHTML = res;

var JSONItems = [];
$.getJSON("js/settings.json", function (group) {
    res += '<div class="single-event"><div class="event-author"><h2><a class="event-name" href="group.html' + group.groupId +
        '">' + group.groupName + '</a></h2></div><hr><div class="event-content">' + group.description + "</div>";
    console.log(JSONItems);
});