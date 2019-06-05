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
        picture: "images/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MSNr9P29sqLb80wUNPW6PoDiSqp0Dwth9e-JX3lgmeqbTLI9SQ-profile.png",
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
        from: 0,
        to: 1,
    }
]

var userid;
var activePost;
var activeStory;
var commentContent;
var commentButton;
var storyModal;
var commentModal;
var requestsModal;
var activeProfile;
var navigation;
var requestsHTML;
var postButton;
var postContent;
var postsHTML;
var storyHTML;


var commentHTML;

var requestsOpenBtn;
var commentCloseBtn;
var homeBtn;

var requestModal;
var suggestionsHTML;

window.onload = function () {
    // var script = document.createElement('script');
    // script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
    // script.type = 'text/javascript';
    // document.getElementsByTagName('head')[0].appendChild(script);
    // var users = require('scripts/test.json');
    // console.log(users);
    // var users = [];
    // jQuery.get('scripts/test.json', function (data) {
    //     users = data;
    //     console.log(data);
    // });
    var url = new URL(window.location.href);
    userid = Number(url.searchParams.get("userid"), 10);
    activePost = -1;
    commentContent = document.getElementById("comment-content");
    commentButton = document.getElementById("comment-button");
    storyModal = document.getElementById("story-modal");
    commentModal = document.getElementById("comments-modal");
    requestsModal = document.getElementById("friend-requests-modal");
    activeProfile = document.getElementById("active-profile");
    navigation = document.getElementById("navigation");
    requestsHTML = document.getElementById("friend-requests-listing");
    storyHTML = document.getElementById("story-listing");
    postsHTML = document.getElementById("posts");
    postContent = document.getElementById("post-content");
    postButton = document.getElementById("post-button");

    commentHTML = document.getElementById("comments-listing");

    requestsOpenBtn = document.getElementById("friend-requests");
    commentCloseBtn = document.getElementById("close-comments-modal");
    requestModal = document.getElementById("friend-requests-modal");
    homeBtn = document.getElementById("logo");
    suggestionsHTML = document.getElementById("friend-suggestion-listing");


    if (userid >= users.length) window.location.href = "index.html";

    loadTopPanel();
    //load top panel
    

    //load navigation bar

    navigation.innerHTML = '<ul><li><a class="active" href="">Home</a></li><li><a href="groups.html' +
        "?userid=" + userid + '">Groups</a></li><li><a href="events.html' + "?userid=" + userid +
        '">Events</a></li></ul></div>';

    loadPublicPosts();

    loadFriendSuggestions()

    loadStories();

    loadFriendRequests();

    requestsOpenBtn.onclick = function () {
        if (requestsModal.style.display == "block") {
            requestsModal.style.display = "none";
        } else {
            requestsModal.style.display = "block";
        }

    }

    homeBtn.onclick = function () {
        window.location.href = "home.html?userid=" + userid;
    }

    storyModal.addEventListener("click", function () {
        storyModal.style.display = "none";
    });

    // requestModal.onclick = function () {
    //     requestModal.style.display = "none";
    // }

    commentCloseBtn.onclick = function () {
        commentModal.style.display = "none";
    }

    postButton.onclick = function () {
        addPost(-1);
    }

    commentButton.onclick = function () {
        addComment();
    }
}

function declineRequest(reqId) {
    friendRequests[reqId].from = -1;
    friendRequests[reqId].to = -1;
    //reload friend requests
    console.log("declined");
    loadFriendRequests();

}

function acceptRequest(reqId) {
    friends[friendRequests[reqId].from].friends.push(friendRequests[reqId].to);
    friends[friendRequests[reqId].to].friends.push(friendRequests[reqId].from);
    friendRequests[reqId].from = -1;
    friendRequests[reqId].to = -1;
    console.log("accepted");
    loadFriendRequests();
}

function loadFriendRequests() {
    var requestsListing = "";
    for (i in friendRequests) {

        if (friendRequests[i].to == userid) {
            requestsListing = '<div class="single-friend-request"><a href="user.html?userid=' + friendRequests[i].from + '&activeUer=' + userid +
                '">' + users[friendRequests[i].from].firstName + " " + users[friendRequests[i].from].lastName +
                '</a><button class="decline-request" onclick = "declineRequest(' + friendRequests[i].reqId + ')">decline</button>' +
                '<button class="confirm-request" onclick = "acceptRequest(' + friendRequests[i].reqId + ')">confirm</button></div>' + requestsListing;
        }
    }
    requestsHTML.innerHTML = requestsListing;
}

function loadStories() {
    var storyListing = "";
    for (i in stories) {
        var author = stories[i].userid;
        //display only friends' stories and his
        if (friends[userid].friends.includes(author) || author == userid) {
            storyListing = '<div class="single-story"><div class="post-author"><img class="avatar" src="' + users[author].picture +
                '"><button class="open-story-modal" href="javascript:;" onclick = "openStory(' + i + ')">' +
                users[author].firstName + " " + users[author].lastName + '</button></div></div>' + storyListing;
        }
    }
    storyHTML.innerHTML = storyListing;
}

function loadPublicPosts() {
    var postListing = "";
    var userFriends = friends[userid].friends;
    for (i in posts) {
        var authorid = posts[i].userId;
        if (posts[i].groupId == -1 && (userFriends.includes(authorid) || userid == authorid)) {
            postListing = '<div class="single-post"><div class="post-author"><img class="avatar" src="' +
                users[authorid].picture + '"><a href="user.html?userid=' + authorid + '&activeUer=' + userid + '">' +
                users[authorid].firstName + " " + users[authorid].lastName + '</a><div class="post-date">' +
                posts[i].date + '</div></div><hr><div class="post-content">' + posts[i].content +
                '<div class="comments-button"><button class="open-story-modal" onclick = "openComments(' + i + ')">' +
                'view comments</button></div></div></div>' + postListing;

        }
    }
    postsHTML.innerHTML = postListing;
}

function openComments(currentPostId) {
    console.log(comments);
    activePost = currentPostId;
    var commentsListing = "";
    for (i in comments) {
        var authorid = comments[i].userid;
        if (comments[i].postid == currentPostId) {
            commentsListing = '<div class="single-post"><div class="post-author"><img class="avatar" src="' + users[authorid].picture +
                '"><a href="user.html?userid=' + authorid + '&activeUser=' + userid + '">' + users[authorid].firstName + " " + users[authorid].lastName +
                '</a><div class="post-date">' + comments[i].date + '</div></div><hr><div class="post-content">' + comments[i].content +
                '   </div></div>' + commentsListing;
            console.log(comments[i]);
        }


    }
    commentHTML.innerHTML = commentsListing;
    commentModal.style.display = "block";
}

function addComment() {
    if (commentContent.value != "") {
        var index = comments.length;
        comments[index] = {
            postid: activePost,
            userid: userid,
            content: commentContent.value,
            date: getDateNow()
        }
        commentContent.value = "";
        console.log(comments[index]);


        openComments(activePost);
    }
}

function getDateNow() {
    var date = new Date();
    return + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
}

function addPost(currentGroupId) {
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
        console.log(posts[posts.length - 1]);

        loadPublicPosts();
    }
}

function openStory(currentStoryId) {
    storyModal.innerHTML = '<div class="story-modal-content"><img src="' + stories[currentStoryId].url + '"></div>';
    storyModal.style.display = "block";
}

function loadFriendSuggestions() {
    var suggestionListing = "";
    for (var i = 0; i < 3; i++) {
        if (i != userid) {
            suggestionListing = '<div class="single-friend-suggestion"><div class="post-author"><img class="avatar" src="' +
                users[i].picture + '"><a href="user.html?userid=' + users[i].id + '&activeUer=' + userid + '">' + users[i].firstName + " " +
                users[i].lastName + '</a><button class="confirm-request" onclick = "sendRequest(' + users[i].id +
                ')">add</button></div></div>' + suggestionListing;
        }
        console.log(users[i]);
    }
    suggestionsHTML.innerHTML = suggestionListing;
}

function sendRequest(requestUserId) {
    var index = friendRequests.length;
    friendRequests[index].from = userid;
    friendRequests[index].to = requestUserId;
    friendRequests[index].reqId = index;
    console.log(friendRequests[index]);
}
function loadTopPanel(){
    activeProfile.innerHTML = '<img class="avatar" src="'
        + users[userid].picture + '"><div id="username"><a href="user.html' + "?userid=" + userid + '&activeUer=' + userid + '">'
        + users[userid].firstName + '</a></div>';
}