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
var map;
var hash = '#!';
var pageUrl = "index.html";
var activePage;
const API = "dummy-data.json";
function initRouter() {


    var Navigo = require("navigo");
    var root = null;
    var useHash = true;

    router = new Navigo(root, useHash, hash);
    router.on({
        'welcome': function () {
            activePage = 'welcome';
            showWelcomePage();
        },

        'home': function () {

            userid = localStorage.getItem("userid");
            if (activePage != 'home') {
                showPage("home");
                activePage = 'home';
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
            if (activePage != "groups") {
                showPage("groups");
            }


        },
        'group/:groupid/:postid': function (params) {
            userid = localStorage.getItem("userid");
            if (activePage != 'group') {
                //show group page
                groupid = params.groupid;
                activePage = "group";
            }

            openComments(patams.postid);

        },
        'group/:groupid': function (params) {
            userid = localStorage.getItem("userid");
            groupid = params.groupid;


        },
        'events': function (params) {
            userid = localStorage.getItem("userid");


        },
        'events/:id': function (params) {
            userid = localStorage.getItem("userid");


        },
        'user/:id': function (params) {
            console.log("visiting user " + params.id);
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
            initPostButtons();
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

    }

}
function loadGroups() {
    var groupList = document.getElementById("groups");
    var groupSuggestions = document.getElementById("group-suggestions");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onreadystatechange = function () {
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
    var commentCloseBtn = document.getElementById("close-comments-modal");
    var commentButton = document.getElementById("comment-button");
    commentCloseBtn.onclick = function () {
        commentModal = document.getElementById("comments-modal");
        router.navigate(activePage);
        commentModal.style.display = "none";
    }

    postButton.onclick = function () {
        addPost(groupid);
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
        router.navigate('home');
    }
    var logoutBtn = document.getElementById("logout");
    logoutBtn.onclick = function () {
        userid = -1;
        localStorage.setItem("userid", -1);
        router.navigate("welcome");
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
        xhttp.onreadystatechange = function () {
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
    xhttp.onreadystatechange = function () {
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
    xhttp.onreadystatechange = function () {
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

    xhttp.onreadystatechange = function () {
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
    xhttp.onreadystatechange = function () {
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
    xhttp.onreadystatechange = function () {
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
    xhttp.onreadystatechange = function () {
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

            loadPublicPosts();
        }
    }
    xhttp.send();
}

function openStory(currentStoryId) {
    storyModal = document.getElementById("story-modal");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onreadystatechange = function () {

        storyModal.innerHTML = '<div class="story-modal-content"><img src="' + stories[currentStoryId].url + '"></div>';
    }
    xhttp.send();
    storyModal.style.display = "block";
}

function loadFriendSuggestions() {
    var suggestionsHTML = document.getElementById("friend-suggestion-listing");
    var suggestionListing = "";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onreadystatechange = function () {
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
    xhttp.onreadystatechange = function () {
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
    xhttp.onreadystatechange = function () {
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
        // currPage.innerHTML = 
    }
}



