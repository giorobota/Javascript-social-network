
import '../css/comments-modal.css';
import '../css/events.css';
import '../css/friend-requests-modal.css';
import '../css/group.css';
import '../css/groups.css';
import '../css/main.css';
import '../css/post.css';
import '../css/responsive.css';
import '../css/story-modal.css';
import '../css/top-bar.css';
import '../css/user.css';
import '../css/welcome.css';
import '../css/search.css';


import { loadWelcomeButtons } from './welcome.js';
import { loadPublicPosts, loadStories, loadFriendSuggestions, openStory } from './home.js';
import { loadGroups } from './groups.js';
import { loadGroupPosts, loadGroupMembers } from './group.js';
import { loadEvents, openEvent } from './events.js';
import { loadAddFriend, loadBio, loadProfile, loadUserPosts } from './user.js';
import * as tmp from './templates.js';

var users = require("../data/users");
var posts = require("../data/posts");
var friends = require("../data/friends");
var comments = require("../data/comments");
var stories = require("../data/stories");
var friendRequests = require("../data/friendRequests");
var groups = require("../data/groups");
var groupMembers = require("../data/groupMembers");
var events = require("../data/events");
var eventParticipants = require("../data/eventParticipants");

var router;
var userid;
var groupid;
var activePost;
var activeEvent;
var templates = {};
var activePage;
var viewingUser;

const API = "http://twitter.com/";
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
            userid = Number(localStorage.getItem("userid"));
            if (activePage != 'home') {
                activePage = 'home';
                showPage("home");
            }
        },
        'home/story/:id': function (params) {
            userid = Number(localStorage.getItem("userid"));
            if (activePage != 'home') {
                showPage("home");
                activePage = "home";
            }
            openStory(params.id, stories, API);
        },
        'home/post/:id': function (params) {
            userid = Number(localStorage.getItem("userid"));
            if (activePage != 'home') {
                showPage("home");
                activePage = "home";
            }
            openComments(params.id);
        },
        'groups': function () {
            userid = Number(localStorage.getItem("userid"));
            activePage = "groups";
            showPage("groups");
        },
        'group/:groupid/post/:postid': function (params) {
            userid = Number(localStorage.getItem("userid"));
            groupid = params.groupid;
            if (activePage != 'group/' + groupid) {
                activePage = 'group/' + groupid;
                showPage("group");
            }

            openComments(params.postid);

        },
        'group/:groupid': function (params) {
            userid = Number(localStorage.getItem("userid"));
            groupid = params.groupid;
            if (activePage != 'group/' + groupid) {

                activePage = 'group/' + groupid;
                showPage("group");
            }
        },
        'events': function (params) {
            userid = Number(localStorage.getItem("userid"));
            if (activePage != 'events') {
                activePage = "events";
                showPage('events');
            }

        },
        'events/:id': function (params) {
            userid = Number(localStorage.getItem("userid"));
            if (activePage != 'events') {
                activePage = "events";
                showPage('events');
            }
            openEvent(params.id, API, eventParticipants, users, userid, events, pageUrl, hash, router);
        },
        'user/:id': function (params) {
            viewingUser = params.id;
            userid = Number(localStorage.getItem("userid"));
            if (activePage != 'user/' + params.id) {
                activePage = "user/" + params.id;
                showPage('user');
            }
        },
        'user/:id/post/:postid': function (params) {
            viewingUser = params.id;

            userid = Number(localStorage.getItem("userid"));
            if (activePage != 'user/' + params.id) {
                activePage = "user/" + params.id;
                showPage('user');
            }
            openComments(params.postid);
        },
        'search/:keyword': function (params) {
            userid = Number(localStorage.getItem("userid"));
            showPage("search");
            showSearchResults(params.keyword, users);

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
    templates.search = require('../components/search');
}

function showPage(page) {
    loadPage(page);
    switch (page) {
        case "home":
            loadTopPanel();
            loadPublicPosts(users, friends, API, userid, posts, pageUrl, hash);
            loadFriendSuggestions(users, API, userid, pageUrl, hash);
            loadStories(router, users, friends, API, stories, pageUrl, hash, userid, activePage);
            loadFriendRequests();
            initRequestsButton();
            break;
        case "welcome":
            loadWelcomeButtons(router, users, friends, API);
            break;
        case "groups":
            loadTopPanel();
            loadGroups(groups, pageUrl, hash, API, groupMembers);
            loadFriendRequests();
            initRequestsButton();
            break;
        case "group":
            loadTopPanel();
            loadGroupPosts(API, posts, pageUrl, hash, router, groupid, users);
            loadFriendRequests();
            initRequestsButton();
            loadGroupMembers(userid, users, groupMembers, API, pageUrl, hash, groupid);
            break;
        case "events":
            loadTopPanel();
            loadFriendRequests();
            initRequestsButton();
            loadEvents(API, eventParticipants, users, userid, events, pageUrl, hash);
            break;
        case "user":
            loadTopPanel();
            loadFriendRequests();
            loadUserPosts(API, pageUrl, hash, router, posts, viewingUser, users, groups);
            initRequestsButton();
            loadAddFriend(API, friends, friendRequests, userid, viewingUser, users);
            initCommentButtons();
            loadBio(API, users, viewingUser);
            loadProfile(API, viewingUser, userid, users);
            break;
        case "search":
            loadTopPanel();
            break;
    }

}
function initButtons() {
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
    var avatar = document.getElementById("avatar");
    avatar.onclick = function () {
        router.navigate("user/" + userid, false);
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

function loadFriendRequests() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var requestsHTML = document.getElementById("friend-requests-listing");
        var requestsListing = "";
        for (var i in friendRequests) {
            if (friendRequests[i].to == userid) {
                requestsListing = tmp.getFriendRequest(i, friendRequests, pageUrl, hash, users) + requestsListing;
            }
        }
        requestsHTML.innerHTML = requestsListing;
    }
    xhttp.send();
}

function loadTopPanel() {
    initSearchButton();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        console.log(userid);
        var activeProfile = document.getElementById("active-profile");
        activeProfile.innerHTML = `<img class="avatar" id = "avatar"src="${users[userid].picture}"><div id="username"><a href="${pageUrl + hash + "user/" + userid}">
         ${users[userid].firstName}  </a></div>`;
        initButtons();
    }
    xhttp.send();
}
function initSearchButton() {
    var button = document.getElementById("search-button");
    var input = document.getElementById("search-keyword");
    button.onclick = function () {
        if (input.value != "") {
            router.navigate("search/" + input.value);
        }

    }
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
        case "search": currPage.innerHTML = templates.topBar + templates.search;
            loadNavigation(pageName);
            break;
    }
}

export function initPostButtons() {
    var postButton = document.getElementById("post-button");
    initCommentButtons();
    postButton.onclick = function () {
        addPost(groupid);
    }
}

function addPost(groupid) {
    var postContent = document.getElementById("post-content");
    if (postContent.value != "") {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", API, true);
        xhttp.onload = function () {

            var index = posts.length;
            posts[index] = {
                postId: index,
                userId: Number(userid),
                groupId: groupid,
                content: postContent.value,
                date: getDateNow()
            }
            postContent.value = "";
            if (groupid == -1) loadPublicPosts(users, friends, API, userid, posts, pageUrl, hash);
            else loadGroupPosts(API, posts, pageUrl, hash, router, groupid, users);
        }
    }
    xhttp.send();
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
                userid: Number(userid),
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
export function initCommentButtons() {
    var commentCloseBtn = document.getElementById("close-comments-modal");
    var commentButton = document.getElementById("comment-button");
    commentCloseBtn.onclick = function () {
        var commentModal = document.getElementById("comments-modal");

        commentModal.style.display = "none";
        router.navigate(activePage, false);
    }
    commentButton.onclick = function () {
        addComment();
    }
}
function getDateNow() {
    var date = new Date();
    return + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}

function openComments(currentPostId) {
    activePost = Number(currentPostId, 10);
    console.log("opening comments");
    var commentHTML = document.getElementById("comments-listing");
    commentHTML.innerHTML = "loading...";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var commentsListing = "";
        for (var i in comments) {
            var authorid = comments[i].userid;
            if (comments[i].postid == currentPostId) {
                commentsListing = tmp.getComment(i, users, authorid, comments, pageUrl, hash) + commentsListing;
                console.log(comments[i]);
            }
        }
        if (commentsListing == "") commentsListing = "no comments yet";
        commentHTML.innerHTML = commentsListing;
    }
    xhttp.send();
    var commentModal = document.getElementById("comments-modal");
    commentModal.style.display = "block";
}

function showSearchResults(keyword) {
    var results = document.getElementById('search-results');
    var listing = "";
    var parts = keyword.split("%20")[0].split(" ");
    console.log(parts);
    for (var i in users) {
        var isResult = false;
        for (var j in parts) {
            var fname = (users[i].firstName).toLowerCase();
            var lname = (users[i].lastName).toLowerCase();
            var kword = (parts[j]).toLowerCase();
            if (fname.includes(kword) || lname.includes(kword)) isResult = true;
        }
        if (isResult) listing += tmp.getSearchResult(users[i].picture, (pageUrl + hash + "user/" + i),
            (users[i].firstName + " " + users[i].lastName), users[i].bio);
    }
    if (listing == "") {
        results.innerHTML = "no results";
    } else {
        results.innerHTML = listing;
    }
}    