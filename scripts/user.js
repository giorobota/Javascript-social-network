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




var userid;
var viewingUser;

var activePost;





window.onload = function () {
    var url = new URL(window.location.href);
    userid = Number(url.searchParams.get("activeUser"), 10);
    viewingUser = Number(url.searchParams.get("userid"), 10);
    activePost = -1;
    loadTopPanel();
    loadUserPosts(viewingUser);

    loadButtons();
    loadProfile();
    loadFriendRequests();
}
function loadButtons() {
    var requestsOpenBtn = document.getElementById("friend-requests");

    requestsOpenBtn.onclick = function () {
        var requestsModal = document.getElementById("friend-requests-modal");
        requestsModal.style.display = 'block';
    }

    var commentButton = document.getElementById("comment-button");
    commentButton.onclick = function () {
        addComment();
    }
    var commentCloseBtn = document.getElementById("close-comments-modal");
    commentCloseBtn.onclick = function () {
        var commentModal = document.getElementById("comments-modal");
        commentModal.style.display = "none";
    }
    loadAddFriend();
}

function loadTopPanel(activeProfile) {
    var activeProfile = document.getElementById("active-profile");
    activeProfile.innerHTML = '<img class="avatar" src="'
        + users[userid].picture + '"><div id="username"><a href="user.html' + "?userid=" + userid + '&activeUer=' + userid + '">'
        + users[userid].firstName + '</a></div>';
}

function openComments(currentPostId) {
    var commentHTML = document.getElementById("comments-listing");
    var commentModal = document.getElementById("comments-modal");
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

        openComments(activePost);
    }
}

function loadUserPosts(viewingUser) {
    var postsHTML = document.getElementById("posts");
    var postListing = "<h2> posts </h2>";

    for (i in posts) {
        var authorid = posts[i].userId;

        if (viewingUser == authorid) {
            var singlePost = '<div class="single-post"><div class="post-author"><img class="avatar" src="' +
                users[authorid].picture + '"><a href="user.html?userid=' + authorid + '&activeUser=' + userid + '">' + users[authorid].firstName + " " + users[authorid].lastName + '</a>';
            if (posts[i].groupId != -1) singlePost += '>><a href = "group.html?userid=' + userid + '&groupid=' + posts[i].groupId + '">' +
                groups[posts[i].groupId].groupName + '</a>';

            singlePost += '<div class="post-date">' +
                posts[i].date + '</div></div><hr><div class="post-content">' + posts[i].content +
                '<div class="comments-button"><button class="open-story-modal" onclick = "openComments(' + i + ')">' +
                'view comments</button></div></div></div>';

            postListing += singlePost;
        }
    }
    postsHTML.innerHTML = postListing;
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
function loadFriendRequests() {
    
    var requestsHTML = document.getElementById("friend-requests-listing");
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
function loadProfile() {
    var userHTML = document.getElementById("profile-info");
    userHTML.innerHTML = '<img id="profile-photo-big" src="' + users[viewingUser].picture + '"><div class="fullname">'
        + users[viewingUser].firstName + " " + users[viewingUser].lastName + '</div>';
    var userBio = document.getElementById("bio");
    userBio.innerHTML =  users[viewingUser].bio;
}
function loadAddFriend(){
    var button = document.getElementById("add-friend");
    var userFriends = friends[userid].friends;
    
    
    
    if(userid==viewingUser){
        button.style.display = 'none';
    }else{
        if(userFriends.includes(viewingUser)){
            button.innerHTML = 'friends';
            button.disabled = true;
        }else{
            var requestSent = false;
            var requestRecieved = false;
            var reqId;
            for(i in friendRequests){
                if(friendRequests[i].from == userid && friendRequests[i].to == viewingUser) requestSent = true;
                if(friendRequests[i].to == userid && friendRequests[i].from == viewingUser) {
                    requestRecieved = true;
                    reqId = friendRequests[i].reqId;
                }
            }
            if(requestSent){
                console.log("requestSent");
                button.innerHTML = 'request sent';
                button.disabled = true;
            }else  if(requestRecieved){
                console.log("requestRecieved");
                button.innerHTML = 'accept friend request';
                button.onclick = function(){
                    acceptRequest(reqId);
                    button.innerHTML = 'friends';
                    button.disabled = true;
                }
            }else {
                button.onclick = function (){
                    sendRequest(viewingUser);
                    button.innerHTML = 'request sent';
                    button.disabled = true;
                }
            }
           


        }
    }
}

function sendRequest(requestUserId) {
    var index = friendRequests.length;
    friendRequests[index].from = userid;
    friendRequests[index].to = requestUserId;
    friendRequests[index].reqId = index;
    console.log(friendRequests[index]);
}