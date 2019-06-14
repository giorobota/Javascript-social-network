var users = [
    {
        id: 0,
        firstName: "John",
        lastName: "Doe",
        picture: "images/default-profile.png",
        bio: "some things about me",
        email: "johndoe@gmail.com",
        password: "1234"
    },
    {
        id: 1,
        firstName: "Johnathan",
        lastName: "Smith",
        picture: "https://www.eharmony.co.uk/dating-advice/wp-content/uploads/2018/06/datingprofile2-900x600.jpg",
        bio: "If You Can't Handle Me at My worst, You Don't Deserve Me at My best",
        email: "jsmith@gmail.com",
        password: "1234"
    },
    {
        id: 2,
        firstName: "Dave",
        lastName: "Smith",
        picture: "https://images.pexels.com/photos/1897503/pexels-photo-1897503.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        bio: "money over bitchez",
        email: "1234@gmail.com",
        password: "1234"
    },

]
var posts = [
    {
        postId: 0,
        userId: 0,
        groupId: -1,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/3/23"

    },
    {
        postId: 1,
        userId: 0,
        groupId: -1,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/3/23"

    },
    {
        postId: 2,
        userId: 2,
        groupId: -1,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/3/23"

    },
    {
        postId: 3,
        userId: 2,
        groupId: -1,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/5/31"

    },
    {
        postId: 4,
        userId: 1,
        groupId: -1,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/3/25"

    },
    {
        postId: 5,
        userId: 2,
        groupId: 0,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/3/25"

    },
    {
        postId: 6,
        userId: 1,
        groupId: 1,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/3/25"

    },
    {
        postId: 7,
        userId: 1,
        groupId: 0,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/3/25"

    },

];

var friends = [
    {
        userId: 0,
        friends: [1, 2]
    },
    {
        userId: 1,
        friends: [0]
    },
    {
        userId: 2,
        friends: [0]
    }

]

var comments = [
    {
        postid: 0,
        userid: 0,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/4/25"
    },
    {
        userid: 2,
        postid: 1,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/6/25"
    },
    {
        userid: 1,
        postid: 4,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/2/25"
    },
    {
        userid: 1,
        postid: 4,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/3/22"
    },
    {
        userid: 2,
        postid: 7,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/3/25"
    },
    {
        postid: 6,
        userid: 0,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/4/25"
    },
    {
        postid: 6,
        userid: 0,
        content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
        date: "2019/4/25"
    },
];

var stories = [
    {
        storyid: 0,
        userid: 0,
        url: "https://i.pinimg.com/originals/ab/dc/4c/abdc4ce3793ee7097f65c2dabd78a589.jpg"
    },
    {
        storyid: 1,
        userid: 1,
        url: "https://wallpapercave.com/wp/wp2875626.jpg"
    },
    {
        storyid: 2,
        userid: 2,
        url: "https://wallpapercave.com/wp/wp2875626.jpg"
    }
]

var friendRequests = [
    {
        reqId: 0,
        from: 2,
        to: 1,
    }
]
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
var groupMembers = [
    {
        groupId: 0,
        members: [0, 1, 2]
    },
    {
        groupId: 1,
        members: [1, 0]
    }
];

var events = [
    {
        eventId: 0,
        eventName: "charity run",
        eventDescription: "description of event",
        eventDate: "18:30 1/5/2019"
    },
    {
        eventId: 1,
        eventName: "final exam",
        eventDescription: "javascript project",
        eventDate: "18:00 12/6/2019"
    },
]

var eventParticipants = [
    {
        eventid: 0,
        userid: 0,
    },
    {
        eventid: 0,
        userid: 2,
    },
    {
        eventid: 1,
        userid: 1,
    }

]
var router;
var userid;
var groupid;
var activePost;
var templates = {};
var activePage;
var viewingUser;
const API = "dummy-data.json";
const hash = '#!';
const pageUrl = "index.html";
function initRouter() {


    var Navigo = require("navigo");
    var root = null;
    var useHash = true;

    router = new Navigo(root, useHash, hash);
    router.on({
        'welcome': function () {
            activePage = 'welcome';
            showPage("welcome");
        },

        'home': function () {
            userid = localStorage.getItem("userid");
            if (activePage != 'home') {
                activePage = 'home';
                showPage("home");

            }

        },
        'home/story/:id': function (params) {
            userid = localStorage.getItem("userid");
            if (activePage != 'home') {
                showPage("home");
                activePage = "home";
            }
            openStory(params.id);
        },
        'home/post/:id': function (params) {
            userid = localStorage.getItem("userid");
            if (activePage != 'home') {
                showPage("home");
                activePage = "home";
            }
            openComments(params.id);
        },
        'groups': function () {
            userid = localStorage.getItem("userid");
            activePage = "groups";
            showPage("groups");




        },
        'group/:groupid/post/:postid': function (params) {
            userid = localStorage.getItem("userid");
            groupid = params.groupid;
            if (activePage != 'group/' + groupid) {
                activePage = 'group/' + groupid;
                showPage("group");
            }

            openComments(params.postid);

        },
        'group/:groupid': function (params) {
            userid = localStorage.getItem("userid");
            groupid = params.groupid;
            if (activePage != 'group/' + groupid) {

                activePage = 'group/' + groupid;
                showPage("group");
            }


        },
        'events': function (params) {
            userid = localStorage.getItem("userid");
            if (activePage != 'events') {
                activePage = events;
                showPage('events');
            }

        },
        'events/:id': function (params) {
            userid = localStorage.getItem("userid");
            if (activePage != 'events') {
                activePage = events;
                showPage('events');
            }
            openEvent(params.id);

        },
        'user/:id': function (params) {
            viewingUser = params.id;
            userid = localStorage.getItem("userid");
            if (activePage != 'user/' + params.id) {
                activePage = "user/" + params.id;
                showPage('user');
            }
        },
        'user/:id/post/:postid': function (params) {
            viewingUser = params.id;

            userid = localStorage.getItem("userid");
            if (activePage != 'user/' + params.id) {
                activePage = "user/" + params.id;
                showPage('user');
            }
            openComments(params.postid);
        }


    });
    router.notFound(function (query) {
        router.navigate("welcome");
    });
    router.resolve();
}


window.onload = function () {
    loadTemplates();
    userid = -1;
    groupid = -1;
    activePost = -1;
    initRouter();
}
function loadTemplates() {
    templates.welcome = require("../components/welcome");
    templates.topBar = require("../components/top-bar");
    templates.commentModal = require("../components/comments-modal");
    templates.requestsModal = require("../components/friend-requests-modal");
    templates.home = require("../components/home");
    templates.storyModal = require("../components/story-modal");
    templates.group = require("../components/group");
    templates.groups = require("../components/groups");
    templates.events = require("../components/events");
    templates.eventsModal = require("../components/events-modal");
    templates.user = require("../components/user");
}

function showPage(page) {
    switch (page) {
        case "home":
            loadPage(page);
            loadTopPanel();
            loadPublicPosts();
            loadFriendSuggestions();
            loadStories();
            loadFriendRequests();
            initRequestsButton();
            initStoryModal();
            break;
        case "welcome":
            loadPage(page);
            loadWelcomeButtons();
            break;
        case "groups":
            loadPage(page);
            loadTopPanel();
            loadGroups();
            loadFriendRequests();
            initRequestsButton();
            break;
        case "group":
            loadPage(page);
            loadTopPanel();
            loadGroupPosts();
            loadFriendRequests();
            initRequestsButton();
            loadGroupMembers();
            break;
        case "events":
            loadPage(page);
            loadTopPanel();
            loadFriendRequests();
            initRequestsButton();
            loadEvents();
            break;
        case "user":
            loadPage(page);
            loadTopPanel();
            loadFriendRequests();
            loadUserPosts();
            initRequestsButton();
            loadAddFriend();
            initCommentButtons();
            loadBio();

    }

}
function loadGroups() {
    var groupList = document.getElementById("groups");
    var groupSuggestions = document.getElementById("group-suggestions");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var res = "";
        var suggestions = "";
        for (var group in groups) {

            res += `<div class="single-event"><div class="event-author">
                    <h2><a class="event-name" href="${pageUrl + hash + "group/" + group}">${groups[group].groupName} </a></h2></div><hr><div class="event-content"> ${groups[group].description} </div></div>`;
            suggestions += `<div class="single-event-suggestion"></div><h3><a  href="${pageUrl + hash + "group/" + group}">
                ${groups[group].groupName}</a> </h3></div>`;
            if (group <= 3) groupSuggestions.innerHTML = suggestions;
        }
        groupList.innerHTML = res;
    }
    xhttp.send();
}
function initPostButtons() {
    var postButton = document.getElementById("post-button");
    initCommentButtons();
    postButton.onclick = function () {
        addPost(groupid);
    }

}
function initCommentButtons() {
    var commentCloseBtn = document.getElementById("close-comments-modal");
    var commentButton = document.getElementById("comment-button");
    commentCloseBtn.onclick = function () {
        commentModal = document.getElementById("comments-modal");
        console.log(activePage);
        commentModal.style.display = "none";
        router.navigate(activePage, false);
    }
    commentButton.onclick = function () {
        addComment();
    }
}
function initStoryModal() {
    var storyModal = document.getElementById("story-modal");
    storyModal.addEventListener("click", function () {
        router.navigate(activePage);
        storyModal.style.display = "none";
    });
}
function initHomeButton() {
    var homeBtn = document.getElementById("logo");
    homeBtn.onclick = function () {
        router.navigate('home', false);
    }
    var logoutBtn = document.getElementById("logout");
    logoutBtn.onclick = function () {
        userid = -1;
        localStorage.setItem("userid", -1);
        router.navigate("welcome", false);
    }
}
function initRequestsButton() {
    var requestsModal = document.getElementById("friend-requests-modal");
    var requestsOpenBtn = document.getElementById("friend-requests");
    requestsOpenBtn.onclick = function () {
        if (requestsModal.style.display == "block") {
            requestsModal.style.display = "none";
        } else {
            requestsModal.style.display = "block";
        }
    }
}
function loadNavigation(activePage) {
    var navigation = document.getElementById("navigation");
    navigation.innerHTML = `<ul>
        <li><button id = "homeNav">Home</button></li>
        <li><button id = "groupsNav">Groups</button></li>
        <li><button id = "eventsNav">Events</button></li>
        </ul></div>`;
    switch (activePage) {
        case "home": document.getElementById("homeNav").className = "active";
            break;
        case "groups": document.getElementById("groupsNav").className = "active";
            break;
        case "events": document.getElementById("eventsNav").className = "active";
            break;
    }
    document.getElementById("homeNav").onclick = function () {
        router.navigate("home");
    }
    document.getElementById("groupsNav").onclick = function () {
        router.navigate("groups");
    }
    document.getElementById("eventsNav").onclick = function () {
        router.navigate("events");
    }


}

function loadWelcomeButtons() {
    var passwordField = document.getElementById("password");
    var emailField = document.getElementById("email");
    var loginBtn = document.getElementById("login");
    var loginMsg = document.getElementById("message");
    loginBtn.addEventListener("click", function () {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", API, true);
        xhttp.onload = function () {
            for (var user in users) {
                if (users[user].email == emailField.value && users[user].password == passwordField.value) {

                    userid = Number(user, 10);
                    localStorage.setItem("userid", userid);

                    router.navigate("home");
                    return;
                }
            }
            loginMsg.innerHTML = "incorrect username or password";
        };
        xhttp.send();

    });

    var signupBtn = document.getElementById("signup");
    signupBtn.onclick = function () {
        //add new user to database
    }
}



function declineRequest(reqId) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        friendRequests[reqId].from = -1;
        friendRequests[reqId].to = -1;
        //reload friend requests
        console.log("declined");
        loadFriendRequests();
    }
    xhttp.send();

}

function acceptRequest(reqId) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        friends[friendRequests[reqId].from].friends.push(friendRequests[reqId].to);
        friends[friendRequests[reqId].to].friends.push(friendRequests[reqId].from);
        friendRequests[reqId].from = -1;
        friendRequests[reqId].to = -1;
        console.log("accepted");
    }
    xhttp.send();
    loadFriendRequests();
}

function loadFriendRequests() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);

    xhttp.onload = function () {
        var requestsHTML = document.getElementById("friend-requests-listing");
        var requestsListing = "";
        for (i in friendRequests) {

            if (friendRequests[i].to == userid) {
                requestsListing = `<div class="single-friend-request">
            <a href="${pageUrl + hash + "user/" + friendRequests[i].from}"> ${users[friendRequests[i].from].firstName + " " + users[friendRequests[i].from].lastName}</a>
            <button class="decline-request" onclick = "declineRequest(${friendRequests[i].reqId})">decline</button>
            <button class="confirm-request" onclick = "acceptRequest(${friendRequests[i].reqId})">confirm</button></div>` + requestsListing;
            }
        }
        requestsHTML.innerHTML = requestsListing;
    }
    xhttp.send();

}

function loadStories() {
    var storyHTML = document.getElementById("story-listing");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var storyListing = "";
        for (i in stories) {
            var author = stories[i].userid;
            //display only friends' stories and his
            if (friends[userid].friends.includes(author) || author == userid) {
                storyListing = `<div class="single-story"><div class="post-author">
            <img class="avatar" src="${users[author].picture}"><a class="open-story-modal"  href="${pageUrl + hash + "home/story/" + i}">
                ${users[author].firstName + " " + users[author].lastName}</button></div></div>` + storyListing;
            }
        }
        storyHTML.innerHTML = storyListing;
    }
    xhttp.send();

}

function loadPublicPosts() {
    var postsHTML = document.getElementById("posts");
    initPostButtons();

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var userFriends = friends[userid].friends;
        var postListing = "";
        for (i in posts) {

            var authorid = posts[i].userId;
            if (posts[i].groupId == -1 && (userFriends.includes(authorid) || userid == authorid)) {


                postListing = `<div class="single-post">
                                    <div class="post-author">
                                        <img class="avatar" src="${users[authorid].picture}">
                                        <a href="${pageUrl + hash + "user/" + authorid}" data-navigo> ${users[authorid].firstName + " " + users[authorid].lastName}</a>
                                        <div class="post-date">
                                            ${posts[i].date}
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="post-content">${posts[i].content}
                                        <div class="comments-button">
                                            <a href = "${pageUrl + hash + "home/post/" + i}" class="open-story-modal" >view comments</button>
                                        </div>
                                    </div>
                                </div>` + postListing;

            }
        }
        postsHTML.innerHTML = postListing;
    }
    xhttp.send();



}



function openComments(currentPostId) {
    activePost = Number(currentPostId, 10);
    console.log("opening comments");
    var commentHTML = document.getElementById("comments-listing");
    activePost = currentPostId;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var commentsListing = "";
        for (i in comments) {

            var authorid = comments[i].userid;
            if (comments[i].postid == currentPostId) {
                commentsListing = `<div class="single-post">
            <div class="post-author">
            <img class="avatar" src="${users[authorid].picture}">
            <a href="${pageUrl + hash + "user/" + authorid}">${users[authorid].firstName + " " + users[authorid].lastName} </a>
            <div class="post-date"> ${comments[i].date} 
            </div></div><hr>
            <div class="post-content"> ${comments[i].content} 
            </div></div>` + commentsListing;
                console.log(comments[i]);
            }


        }

        commentHTML.innerHTML = commentsListing;
    }
    xhttp.send();
    var commentModal = document.getElementById("comments-modal");
    commentModal.style.display = "block";
}

function addComment() {
    var commentContent = document.getElementById("comment-content");
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        if (commentContent.value != "") {
            var index = comments.length;
            comments[index] = {
                postid: Number(activePost),
                userid: userid,
                content: commentContent.value,
                date: getDateNow()
            }
            commentContent.value = "";
            console.log(comments[index]);
            openComments(activePost);
        }
    }
    xhttp.send();
}

function getDateNow() {
    var date = new Date();
    return + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
}

function addPost(currentGroupId) {
    var postContent = document.getElementById("post-content");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        if (postContent.value != "") {
            var index = posts.length;
            posts[index] = {
                postId: index,
                userId: userid,
                groupId: currentGroupId,
                content: postContent.value,
                date: getDateNow()
            }
            postContent.value = "";
            if (groupid == -1) loadPublicPosts();
            else loadGroupPosts();

        }
    }
    xhttp.send();
}

function openStory(currentStoryId) {
    storyModal = document.getElementById("story-modal");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {

        storyModal.innerHTML = '<div class="story-modal-content"><img src="' + stories[currentStoryId].url + '"></div>';
    }
    xhttp.send();
    storyModal.style.display = "block";
}

function loadFriendSuggestions() {
    var suggestionsHTML = document.getElementById("friend-suggestion-listing");

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        console.log(xhttp.response);
        var suggestionListing = "";
        for (var i = 0; i < 3; i++) {
            if (i != userid) {
                suggestionListing = `<div class="single-friend-suggestion"><div class="post-author">
            <img class="avatar" src="${users[i].picture}">
            <a href="${pageUrl + hash + "user/" + i}"> ${users[i].firstName + " " + users[i].lastName}</a>
            </div></div>` + suggestionListing;
            }
            console.log(users[i]);
        }
        suggestionsHTML.innerHTML = suggestionListing;
    }
    xhttp.send();
}

function sendRequest(requestUserId) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        var index = friendRequests.length;
        friendRequests[index].from = userid;
        friendRequests[index].to = requestUserId;
        friendRequests[index].reqId = index;
        console.log(friendRequests[index]);
    }
    xhttp.send();
}
function loadTopPanel() {
    initHomeButton();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        console.log(userid);
        var activeProfile = document.getElementById("active-profile");
        activeProfile.innerHTML = `<img class="avatar" src="${users[userid].picture}"><div id="username"><a href="${pageUrl + hash + "user/" + userid}">
         ${users[userid].firstName}  </a></div>`;
    }
    xhttp.send();
}


function loadPage(pageName) {
    var currPage = document.getElementById("routing-component");
    switch (pageName) {
        case "welcome": currPage.innerHTML = templates.welcome;
            break;
        case "home":
            currPage.innerHTML = templates.topBar + templates.home + templates.commentModal + templates.requestsModal +
                templates.commentModal + templates.storyModal;
            loadNavigation(pageName);
            break;
        case "groups":
            currPage.innerHTML = templates.topBar + templates.groups + templates.requestsModal;
            loadNavigation(pageName);
            break;
        case "group":
            currPage.innerHTML = templates.topBar + templates.group + templates.commentModal + templates.requestsModal;
            loadNavigation(pageName);
            break;
        case "events": currPage.innerHTML = templates.topBar + templates.events + templates.requestsModal + templates.eventsModal;
            loadNavigation(pageName);
            break;
        case "user": currPage.innerHTML = templates.topBar + templates.user + templates.requestsModal + templates.commentModal;
            break;
    }
}

function loadGroupPosts() {
    initPostButtons();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var postsHTML = document.getElementById("posts");
        var postListing = "";
        for (i in posts) {
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

function loadGroupMembers() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var members = document.getElementById("group-members");
        var memberList = "<h2>members:</h2>";
        for (i in groupMembers[groupid].members) {
            var memberid = groupMembers[groupid].members[i];
            memberList += `<hr><div class="single-member"><div class="post-author"><img class="avatar" src="${users[memberid].picture}">
            <a href="${pageUrl + hash + "user/" + i}">${users[memberid].firstName + " " + users[memberid].lastName} </a></div></div>`;
        }
        members.innerHTML = memberList;
    }
    xhttp.send();
}
function loadEvents() {
    document.getElementById("close-event-modal").onclick = function () {
        router.navigate("events");
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        eventsHTML = document.getElementById("events");
        eventSuggestions = document.getElementById("event-suggestions");
        var eventListing = "";
        var suggestions = "";
        for (i in events) {

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
function openEvent(id) {
    activeEvent = id;
    var userGoing = false;
    var eventModal = document.getElementById("event-modal");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);

    xhttp.onload = function () {
        var eventButton = document.getElementById("going");
        var participantsList = document.getElementById("event-participants");

        var listing = ""
        for (i in eventParticipants) {
            if (eventParticipants[i].eventid == id) {
                listing += '<a href="user.html?userid=' + eventParticipants[i].userid + '&activeuser='
                    + userid + '">' + users[eventParticipants[i].userid].firstName + " " + users[eventParticipants[i].userid].lastName + '  '
                    + '</a>';
                if (eventParticipants[i].userid == userid) userGoing = true;
            }
        }
        if (userGoing) {
            eventButton.innerHTML = 'not going';
            eventButton.onclick = function () {
                removeParticipant(activeEvent);
            }
        } else {
            eventButton.innerHTML = 'going';
            eventButton.onclick = function () {
                addParticipant(activeEvent, userid);
            }
        }
        participantsList.innerHTML = listing;

    }
    xhttp.send();
    eventModal.style.display = "block";
    initEventInviteButton(activeEvent);
}

function initEventInviteButton(activeEvent) {
    document.getElementById("inviteButton").onclick = function () {
        var field = document.getElementById("invitedUser");
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", API, true);
        xhttp.onload = function () {
            for (i in users) {
                if ((users[i].firstName + " " + users[i].lastName) == field.value) {
                    addParticipant(activeEvent, i);
                }
            }
            field.value = "";
            console.log("finished adding");
        }
    }
}
function removeParticipant(activeEvent) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        for (i in eventParticipants) {
            if (eventParticipants[i].eventid == activeEvent && eventParticipants[i].userid == userid) {
                eventParticipants[i].eventid = -1;
                eventParticipants[i].userid = -1;
                openEvent(activeEvent);
            }
        }
    }
    xhttp.send();
}

function addParticipant(activeEvent, user) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var index = eventParticipants.length
        eventParticipants[index] = {
            eventid: activeEvent,
            userid: user
        };
        openEvent(activeEvent);
        console.log("adding");
    }
    xhttp.send();
}
function loadUserPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var postsHTML = document.getElementById("posts");
        var postListing = "<h2> posts </h2>";
        for (i in posts) {
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

function loadAddFriend() {
    var button = document.getElementById("add-friend");

    if (userid == viewingUser) {
        button.style.display = 'none';
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", API, true);
        xhttp.onload = function () {
            var userFriends = friends[userid].friends;
            console.log(userFriends);
            console.log(viewingUser);
            var isFriend = userFriends.includes(Number(viewingUser));
            if (isFriend) {
                button.innerHTML = 'friends';
                button.disabled = true;
                console.log("friends");
            } else {
                var requestSent = false;
                var requestRecieved = false;
                var reqId;
                for (i in friendRequests) {
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
                    button.onclick = function () {
                        acceptRequest(reqId);
                        button.innerHTML = 'friends';
                        button.disabled = true;
                    }
                } else {
                    button.onclick = function () {
                        sendRequest(viewingUser);
                        button.innerHTML = 'request sent';
                        button.disabled = true;
                    }
                }
            }
        }
        xhttp.send();
    }
}
function loadBio() {
    var bio = document.getElementById("bio");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        bio.innerHTML = users[viewingUser].bio;
    }
    xhttp.send();
}