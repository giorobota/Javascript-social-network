

export function loadUserPosts(API, pageUrl, hash, router, posts, viewingUser, users, groups) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var postsHTML = document.getElementById("posts");
        var postListing = "<h2> posts </h2>";
        for (var i in posts) {
            var authorid = posts[i].userId;
            if (viewingUser == authorid) {
                var singlePost = `<div class="single-post"><div class="post-author"><img class="avatar" src="${users[authorid].picture}">
                <a href="${pageUrl + hash + router.lastRouteResolved().url}">${users[authorid].firstName + " " + users[authorid].lastName}</a>`;
                if (posts[i].groupId != -1) singlePost += `>><a href = "${pageUrl + hash + "group/" + posts[i].groupId}">
                ${groups[posts[i].groupId].groupName}</a>`;

                singlePost += `<div class="post-date">${posts[i].date} </div></div><hr>
                <div class="post-content">${posts[i].content} <div class="comments-button">
                <a class="open-story-modal" href = "${pageUrl + hash + router.lastRouteResolved().url + "/post/" + i}">
                view comments</a></div></div></div>`;
                console.log(pageUrl + hash + router.lastRouteResolved().url + "/post/" + i);
                postListing += singlePost;
            }
        }
        postsHTML.innerHTML = postListing;
    }
    xhttp.send();
}
export function loadAddFriend(API, friends, friendRequests, userid, viewingUser, users) {
    var button = document.getElementById("add-friend");
    var decline = document.getElementById("decline-request");
    decline.style.display = "none";
    if (userid == viewingUser) {
        button.innerHTML = "edit bio";
        button.onclick = function () {
            openEditMenu(API, users, userid);
        }
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", API, true);
        xhttp.onload = function () {
            var userFriends = friends[userid].friends;

            var isFriend = userFriends.includes(Number(viewingUser));
            if (isFriend) {
                button.innerHTML = 'friends';
                button.disabled = true;
                console.log("friends");
            } else {
                var requestSent = false;
                var requestRecieved = false;
                var reqId;
                console.log(friendRequests);
                for (var i in friendRequests) {
                    if (friendRequests[i].from == userid && friendRequests[i].to == viewingUser) requestSent = true;
                    if (friendRequests[i].to == userid && friendRequests[i].from == viewingUser) {
                        requestRecieved = true;
                        reqId = friendRequests[i].reqId;
                    }
                }
                if (requestSent) { 
                    console.log("requestSent");
                    button.innerHTML = 'request sent';
                    button.disabled = true;
                } else if (requestRecieved) {
                    console.log("requestRecieved");
                    button.innerHTML = 'accept friend request';
                    decline.style.display = "block";
                    decline.onclick = function () {
                        declineRequest(reqId, API, friends, friendRequests, userid, viewingUser, users);
                    }
                    button.onclick = function () {
                        acceptRequest(reqId, API, friends, friendRequests, userid, viewingUser, users);
                    }
                } else {
                    button.innerHTML = "add friend";
                    button.onclick = function () {
                        sendRequest(API, friends, friendRequests, userid, viewingUser, users);
                    }
                }
            }
        } 
        xhttp.send();
    }
}
function openEditMenu(API, users, userid) {
    var bio = document.getElementById("bio");
    bio.innerHTML = `<input id = "editBio"></input><button id = "saveBio">save </buton>`;
    var field = document.getElementById("editBio");
    var button = document.getElementById("saveBio");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        field.value = users[userid].bio
        button.onclick = function () {
            users[userid].bio = field.value;
            loadBio(API, users, userid);
        }
    }
    xhttp.send();
}
export function loadProfile(API, viewingUser, userid, users) {
    var image = document.getElementById("profile-photo-big");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);

    var name = document.getElementById("fullname");
    xhttp.onload = function () {
        image.src = users[viewingUser].picture;
        name.innerHTML = users[viewingUser].firstName + " " + users[viewingUser].lastName;
    }
    xhttp.send();
    image.onclick = function () {
        var imgUpload = document.getElementById("imgupload");
        if (viewingUser == userid) {
            imgUpload.click();
            imgUpload.addEventListener('change', function () {

                var singleFile = imgUpload.files[0];
                console.log(URL.createObjectURL(singleFile));
            });
        }
    }

}
export function loadBio(API, users, viewingUser) {
    var bio = document.getElementById("bio");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        bio.innerHTML = users[viewingUser].bio;
    }
    xhttp.send();
}
function declineRequest(reqId, API, friends, friendRequests, userid, viewingUser, users) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        friendRequests[reqId].from = -1;
        friendRequests[reqId].to = -1;
        console.log("declined");
        loadAddFriend(API, friends, friendRequests, userid, viewingUser, users);
    }
    xhttp.send();
}
function acceptRequest(reqId, API, friends, friendRequests, userid, viewingUser, users) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        friends[friendRequests[reqId].from].friends.push(friendRequests[reqId].to);
        friends[friendRequests[reqId].to].friends.push(friendRequests[reqId].from);
        friendRequests[reqId].from = -1;
        friendRequests[reqId].to = -1;
        console.log("accepted");
        loadAddFriend(API, friends, friendRequests, userid, viewingUser, users);
    } 
    xhttp.send();

}
function sendRequest(API, friends, friendRequests, userid, viewingUser, users) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        var index = friendRequests.length;
        friendRequests[index] = {
            from: Number(userid),
            to: Number(viewingUser),
            reqId: index
        }
        console.log(friendRequests[index]); 
        loadAddFriend(API, friends, friendRequests, userid, viewingUser, users);
    }
    xhttp.send();
}