
import { getSingleEvent } from './templates.js';

export function loadEvents(API, eventParticipants, users, userid, events, pageUrl, hash) {
    loadButtons(API, eventParticipants, users, userid, events, pageUrl, hash);
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var eventsHTML = document.getElementById("events");
        var eventSuggestions = document.getElementById("event-suggestions");
        var eventListing = "";
        var suggestions = "";
        for (var i in events) {

            eventListing = getSingleEvent((pageUrl + hash + "events/" + i), events[i].eventName, events[i].eventDate, events[i].eventDescription) + eventListing;
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
export function openEvent(id, API, eventParticipants, users, userid, events, pageUrl, hash, router) {
    loadCloseBtn(router);
    var userGoing = false;
    var eventModal = document.getElementById("event-modal");
    var eventButton = document.getElementById("going");
    eventButton.innerHTML = "loading...";
    eventButton.disabled = true;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var evt = document.getElementById("active-event");
        evt.innerHTML = getSingleEvent(pageUrl + hash + "events/" + id, events[id].eventName, events[id].eventDate, events[id].eventDescription);
        var participantsList = document.getElementById("event-participants");
        var listing = "";
        console.log(listing);
        for (var i in eventParticipants) {
            if (eventParticipants[i].eventid == id) {
                listing += `<a href="${pageUrl + hash + "user/" + eventParticipants[i].userid}"> 
                ${users[eventParticipants[i].userid].firstName + " " + users[eventParticipants[i].userid].lastName}
                </a>`;
                if (eventParticipants[i].userid == userid) userGoing = true;
            } 
        } 
        participantsList.innerHTML = listing;
  
        if (userGoing) {
            eventButton.disabled = false;
            eventButton.innerHTML = 'not going';
            eventButton.onclick = function () {
                removeParticipant(id, API, eventParticipants, users, userid, events, pageUrl, hash, router);
            }
        } else {
            eventButton.disabled = false;
            eventButton.innerHTML = 'going';
            eventButton.onclick = function () {
                addParticipant(id, API, eventParticipants, users, userid, events, pageUrl, hash, router);
            }
        }


    }
    xhttp.send();
    eventModal.style.display = "block";
}

function removeParticipant(activeEvent, API, eventParticipants, users, userid, events, pageUrl, hash, router) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        for (var i in eventParticipants) {
            if (eventParticipants[i].eventid == activeEvent && eventParticipants[i].userid == userid) {
                eventParticipants[i].eventid = -1;
                eventParticipants[i].userid = -1;
                openEvent(activeEvent, API, eventParticipants, users, userid, events, pageUrl, hash, router);
            }
        }
    }
    xhttp.send();
}
function addParticipant(activeEvent, API, eventParticipants, users, userid, events, pageUrl, hash, router) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var index = eventParticipants.length
        eventParticipants[index] = {
            eventid: activeEvent,
            userid: userid,
        };
        openEvent(activeEvent, API, eventParticipants, users, userid, events, pageUrl, hash, router);
        console.log("adding");
    }
    xhttp.send();
}

function loadButtons(API, eventParticipants, users, userid, events, pageUrl, hash) {
    var name = document.getElementById("event-name");
    var desc = document.getElementById("event-description");
    var date = document.getElementById("event-date");
    var btn = document.getElementById("create-event-button");
    btn.onclick = function () {
        if (name.value != "") {
            var index = events.length;
            var tmp = date.value.split('T');
            events[index] = {
                eventId: index,
                eventName: name.value, 
                eventDescription: desc.value,
                eventDate: tmp[1] + " " + tmp[0],   
            }
            name.value = "";
            desc.value = "";
            loadEvents(API, eventParticipants, users, userid, events, pageUrl, hash);
        }
    }
}
function loadCloseBtn(router) {
    document.getElementById("close-event-modal").onclick = function () {
        var eventModal = document.getElementById("event-modal");
        eventModal.style.display = "none";
        router.navigate("events");
    }
}
