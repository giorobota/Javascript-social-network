import {initPostButtons} from './index.js'
import { getPost } from './templates.js';
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
                postListing =  getPost(authorid, users, posts, i, pageUrl, hash + router.lastRouteResolved().url) + postListing;
            }
        }
        postsHTML.innerHTML = postListing; 
    }
    xhttp.send();
}
export function loadGroupMembers(userid, users, groupMembers, API, pageUrl, hash, groupid) {
    var button = document.getElementById("join-group");
    var userInGroup = false;
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var members = document.getElementById("group-members");
        var memberList = "<h2>members:</h2>";
        
        for (var i in groupMembers[groupid].members) {
            if(groupMembers[groupid].members[i] == Number(userid)) userInGroup = true;
            var memberid = groupMembers[groupid].members[i];
            memberList += `<hr><div class="single-member"><div class="post-author"><img class="avatar" src="${users[memberid].picture}">
            <a href="${pageUrl + hash + "user/" + i}">${users[memberid].firstName + " " + users[memberid].lastName} </a></div></div>`;
        }
        members.innerHTML = memberList;
        if(userInGroup){
            button.innerHTML = "joined";
            button.disabled = true;
        }else{ 
            button.innerHTML = "join group";
            button.onclick = function(){
                joinGroup(userid, users, groupMembers, API, pageUrl, hash, groupid);
            }
        }
    }
    xhttp.send(); 
}
function joinGroup(userid, users, groupMembers, API, pageUrl, hash, groupid){
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true); 
    xhttp.onload = function () {
        groupMembers[groupid].members.push(Number(userid));
        console.log(groupMembers);
        loadGroupMembers(userid, users, groupMembers, API, pageUrl, hash, groupid);
    } 
    xhttp.send(); 
} 