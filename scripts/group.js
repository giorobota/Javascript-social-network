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
var userid;
var groupid;
var activePost;
var commentModal;
var commentCloseBtn;
var activeProfile;
var navigation;
var postsHTML;
var postContent;
var postButton;
var members;
var requestsHTML;
var commentHTML;
var commentContent;
var commentButton;
var requestsModal;
var requestsOpenBtn;
var homeBtn;
window.onload = function () {





    var url = new URL(window.location.href);
    userid = Number(url.searchParams.get("userid"), 10);
    groupid = Number(url.searchParams.get("groupid"), 10);
    activePost = -1;
    if (userid >= users.length) window.location.href = "index.html";
    ommentModal = document.getElementById("comments-modal");
    commentCloseBtn = document.getElementById("close-comments-modal");
    activeProfile = document.getElementById("active-profile");
    navigation = document.getElementById("navigation");
    postsHTML = document.getElementById("posts");
    postContent = document.getElementById("post-content");
    postButton = document.getElementById("post-button");
    requestsHTML = document.getElementById("friend-requests-listing");
    members = document.getElementById("group-members");
    commentHTML = document.getElementById("comments-listing");
    commentContent = document.getElementById("comment-content");
    commentButton = document.getElementById("comment-button");
    commentModal = document.getElementById("comments-modal");

    requestsModal = document.getElementById("friend-requests-modal");
    requestsOpenBtn = document.getElementById("friend-requests");
    homeBtn = document.getElementById("logo");

    loadTopPanel();

    navigation.innerHTML = '<ul><li><a  href="home.html' + "?userid="
        + userid + '">Home</a></li><li><a href="groups.html?userid=' + userid + '">Groups</a></li><li><a href="events.html'
        + "?userid=" + userid + '">Events</a></li></ul></div>';

    loadGroupPosts();

    loadGroupMembers();

    postButton.onclick = function () {
        addPost(groupid);
        loadGroupPosts();
    }

    // requestsModal.addEventListener("click", function () {
    //     requestsModal.style.display = "none";
    // });

    homeBtn.addEventListener("click", function () {

        window.location.href = "home.html?userid=" + userid;
    });

    requestsOpenBtn.onclick = function () {
        if (requestsModal.style.display == "block") {
            requestsModal.style.display = "none";
        } else {
            requestsModal.style.display = "block";
        }
    }

    commentButton.onclick = function () {
        addComment();
    }
    //friend reqeuests

    loadFriendRequests();

    commentCloseBtn.onclick = function () {
        commentModal.style.display = "none";
    }

}
function loadGroupPosts() {
    var postListing = "";
    for (i in posts) {
        var authorid = posts[i].userId;
        if (posts[i].groupId == groupid) {
            postListing = '<div class="single-post"><div class="post-author"><img class="avatar" src="' +
                users[authorid].picture + '"><a href="user.html?userid=' + authorid + '&activeUser=' + userid + '">' +
                users[authorid].firstName + " " + users[authorid].lastName + '</a><div class="post-date">' +
                posts[i].date + '</div></div><hr><div class="post-content">' + posts[i].content +
                '<div class="comments-button"><button class="open-story-modal" onclick = "openComments(' + i + ')">' +
                'view comments</button></div></div></div>' + postListing;

        }
    }
    postsHTML.innerHTML = postListing;
}
function getDateNow() {
    var date = new Date();
    return + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
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
function loadGroupMembers() {
    var memberList = "<h2>members:</h2>";
    for (i in groupMembers[groupid].members) {
        var memberid = groupMembers[groupid].members[i];
        memberList += "<hr>" + '<div class="single-member"><div class="post-author"><img class="avatar" src="' + users[memberid].picture +
            '"><a href="user.html?userid=' + memberid + '&activeUer=' + userid + '">' + users[memberid].firstName + " " + users[memberid].lastName + "</a></div></div>";
    }
    members.innerHTML = memberList;
}
function loadTopPanel() {
    activeProfile.innerHTML = '<img class="avatar" src="'
        + users[userid].picture + '"><div id="username"><a href="user.html' + "?userid=" + userid + '&activeUer=' + userid + '">'
        + users[userid].firstName + '</a></div>';
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


    }
}
function openComments(currentPostId) {
    activePost = currentPostId;
    var commentsListing = "";
    for (i in comments) {
        var authorid = comments[i].userid;
        if (comments[i].postid == currentPostId) {
            commentsListing = '<div class="single-post"><div class="post-author"><img class="avatar" src="' + users[authorid].picture +
                '"><a href="user.html?userid=' + authorid + '&activeUer=' + userid + '">' + users[authorid].firstName + " " + users[authorid].lastName +
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