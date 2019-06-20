export function loadGroups(groups, pageUrl, hash, API, groupMembers) {
    initCreateButton(groups, pageUrl, hash, API, groupMembers);
    var groupList = document.getElementById("groups");
    var groupSuggestions = document.getElementById("group-suggestions");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var res = "";
        var suggestions = "";
        for (var group in groups) {
            res = `<div class="single-event"><div class="event-author">
                    <h2><a class="event-name" href="${pageUrl + hash + "group/" + group}">${groups[group].groupName} 
                    </a></h2></div><hr><div class="event-content"> ${groups[group].description} </div></div>` + res;
            suggestions += `<div class="single-event-suggestion"></div><h3><a  href="${pageUrl + hash + "group/" + group}">
                ${groups[group].groupName}</a> </h3></div>`;
            if (group <= 3) groupSuggestions.innerHTML = suggestions;
        }
        groupList.innerHTML = res;
    }
    xhttp.send();
}

function initCreateButton(groups, pageUrl, hash, API, groupMembers) {
    var name = document.getElementById("group-name");
    var desc = document.getElementById("group-description");
    var button = document.getElementById("create-group-button");
    button.onclick = function(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("post", API, true);
        xhttp.onload = function () {
            var index = groups.length;
            groups[index] = {
                groupId: index,
                groupName: name.value,
                description: desc.value
            }
            groupMembers.push({
                groupId: index,
                members: []
            });
            loadGroups(groups, pageUrl, hash, API, groupMembers);
        }
        xhttp.send();
    }



}