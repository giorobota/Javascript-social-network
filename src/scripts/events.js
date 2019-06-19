export function loadEvents(API,pageUrl, hash, router, events) {

    document.getElementById("close-event-modal").onclick = function () {
        var eventModal = document.getElementById("event-modal");
        eventModal.style.display = "none";
        router.navigate("events");
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var eventsHTML = document.getElementById("events");
        var eventSuggestions = document.getElementById("event-suggestions");
        var eventListing = "";
        var suggestions = "";
        for (var i in events) {

            eventListing = `<div class="single-event"><div class="event-author"><a class="open-events-modal" href = "${pageUrl + hash + "events/" + i}"> 
            ${events[i].eventName}</a><div class="event-date"> ${events[i].eventDate}</div></div><hr><div class="event-content">
                ${events[i].eventDescription}</div></div>` + eventListing;

            if (i <= 3) {
                suggestions += `<div class="single-event-suggestion" ><a class="open-events-modal" href = "${pageUrl + hash + "events/" + i}">
                    ${events[i].eventName}</a></div>`;
            }
        }
        eventsHTML.innerHTML = eventListing;
        eventSuggestions.innerHTML = suggestions;
    }
    xhttp.send();
}
export function openEvent(activeEvent, API, eventParticipants, users, userid) {
    var userGoing = false;
    var eventModal = document.getElementById("event-modal");
    var eventButton = document.getElementById("going");
    eventButton.innerHTML = "loading...";
    eventButton.disabled = true;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var participantsList = document.getElementById("event-participants");
        var listing = ""
        for (var i in eventParticipants) {
            if (eventParticipants[i].eventid == activeEvent) {
                listing += '<a href="user.html?userid=' + eventParticipants[i].userid + '&activeuser='
                    + userid + '">' + users[eventParticipants[i].userid].firstName + " " + users[eventParticipants[i].userid].lastName + '  '
                    + '</a>';
                if (eventParticipants[i].userid == userid) userGoing = true;
            }
        }
        if (userGoing) {
            eventButton.disabled = false;
            eventButton.innerHTML = 'not going';
            eventButton.onclick = function () {
                removeParticipant(activeEvent, API, eventParticipants, users, userid);
            }
        } else {
            eventButton.disabled = false;
            eventButton.innerHTML = 'going';
            eventButton.onclick = function () {
                addParticipant(activeEvent, API, eventParticipants, users, userid);
            }
        }
        participantsList.innerHTML = listing;

    }
    xhttp.send();
    eventModal.style.display = "block";
    // initEventInviteButton(activeEvent);
}

// function initEventInviteButton(activeEvent) {
//     document.getElementById("inviteButton").onclick = function () {
//         var field = document.getElementById("invitedUser");
//         var xhttp = new XMLHttpRequest();
//         xhttp.open("GET", API, true);
//         xhttp.onload = function () {
//             for (var i in users) {
//                 if ((users[i].firstName + " " + users[i].lastName) == field.value) {
//                     addParticipant(API, activeEvent, i, eventParticipants);
//                 }
//             }
//             field.value = "";
//             console.log("finished adding");
//         }
//     }
// }
function removeParticipant(activeEvent, API, eventParticipants, users, userid) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        for (var i in eventParticipants) {
            if (eventParticipants[i].eventid == activeEvent && eventParticipants[i].userid == userid) {
                eventParticipants[i].eventid = -1;
                eventParticipants[i].userid = -1;
                openEvent(activeEvent, API, eventParticipants, users, userid);
            }
        }
    }
    xhttp.send();
}
function addParticipant(activeEvent, API, eventParticipants, users, id) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var index = eventParticipants.length
        eventParticipants[index] = {
            eventid: activeEvent,
            userid: id
        };
        openEvent(activeEvent, API, eventParticipants, users, id);
        console.log("adding");
    }
    xhttp.send();
}