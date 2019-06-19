import {initPostButtons} from './index.js'

export function loadGroupPosts(API, posts, pageUrl, hash, router, groupid, users) {
    initPostButtons();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var postsHTML = document.getElementById("posts");
        var postListing = "";
        for (var i in posts) {
            var authorid = posts[i].userId;
            if (posts[i].groupId == groupid) {
                postListing = `<div class="single-post"><div class="post-author"><img class="avatar" src="${users[authorid].picture}">
                <a href="${pageUrl + hash + "user/" + authorid}">
                    ${users[authorid].firstName + " " + users[authorid].lastName}</a><div class="post-date">
                    ${posts[i].date}</div></div><hr><div class="post-content">${posts[i].content} 
                    <div class="comments-button"><a class="open-story-modal" href = "${pageUrl + hash + router.lastRouteResolved().url + "/post/" + i}">
                    'view comments</button></div></div></div>` + postListing;

            }
        }
        postsHTML.innerHTML = postListing;
    }
    xhttp.send();
}
export function loadGroupMembers(users, groupMembers, API, pageUrl, hash, groupid) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var members = document.getElementById("group-members");
        var memberList = "<h2>members:</h2>";
        for (var i in groupMembers[groupid].members) {
            var memberid = groupMembers[groupid].members[i];
            memberList += `<hr><div class="single-member"><div class="post-author"><img class="avatar" src="${users[memberid].picture}">
            <a href="${pageUrl + hash + "user/" + i}">${users[memberid].firstName + " " + users[memberid].lastName} </a></div></div>`;
        }
        members.innerHTML = memberList;
    }
    xhttp.send();
}