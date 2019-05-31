window.onload = function () {

    var requestsModal = document.getElementById("friend-requests-modal");


    var requestsOpenBtn = document.getElementById("friend-requests");

    var homeBtn = document.getElementById("logo");

    requestsModal.addEventListener("click", function () {
        requestsModal.style.display = "none";
    });

    homeBtn.addEventListener("click", function () {
        //will need to update url
        window.location.href = "home.html";
    });

    requestsOpenBtn.onclick = function () {
        if (requestsModal.style.display == "block") {
            requestsModal.style.display = "none";
        } else {
            requestsModal.style.display = "block";
        }

    }
   
    var groupList = document.getElementById("groups");
    var groupSuggestions = document.getElementById("group-suggestions");
    var groups = [
        {
            groupId: 0,
            groupName: "elit occaecat nulla",
            description: "group description"
        },
        {
            groupId: 1,
            groupName: "fla cnosds",
            description: "another group description"
        }
    ]
    var res = "";
    var suggestions = "";
    for (var group in groups) {
        //will need to fix url later after adding user database
        res += '<div class="single-event"><div class="event-author"><h2><a class="event-name" href="group.html?groupid=' + groups[group].groupId +
            '">' + groups[group].groupName + '</a></h2></div><hr><div class="event-content">' + groups[group].description + "</div></div>";
        suggestions += '<div class="single-event-suggestion"></div><h3><a href="group.html?groupid=' + groups[group].groupId + '">' + 
            groups[group].groupName + "</a> </h3></div>";
        if(group <= 3) groupSuggestions.innerHTML = suggestions;
    }
    groupList.innerHTML = res;

}

