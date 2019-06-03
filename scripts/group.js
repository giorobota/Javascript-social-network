window.onload = function () {
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
            date: "2019/3/15"

        },
        {
            postId: 6,
            userId: 1,
            groupId: 1,
            content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
            date: "2019/3/20"

        },
        {
            postId: 7,
            userId: 1,
            groupId: 0,
            content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
            date: "2019/3/24"

        },

    ];

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
            postid: 7,
            userid: 2,
           
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

    var url = new URL(window.location.href);
    var userid = url.searchParams.get("userid");
    var groupid = url.searchParams.get("groupid");
    var activePost = url.searchParams.get("post");
    if (userid >= users.length) window.location.href = "index.html";
    var commentModal = document.getElementById("comments-modal");
    var commentCloseBtn = document.getElementById("close-comments-modal");


    var activeProfile = document.getElementById("active-profile");
    activeProfile.innerHTML = '<img id="friend-requests" src="images/friend-requests.jpg"><img class="avatar" src="'
        + users[userid].picture + '"><div id="username"><a href="user.html' + "?userid=" + userid + '">'
        + users[userid].firstName + '</a></div>';

    var navigation = document.getElementById("navigation");
    navigation.innerHTML = '<ul><li><a  href="home.html' + "?userid="
        + userid + '">Home</a></li><li><a href="groups.html?userid=' + userid + '">Groups</a></li><li><a href="events.html'
        + "?userid=" + userid + '">Events</a></li></ul></div>';


    //loading group posts
    var postsHTML = document.getElementById("posts");
    var postListing = "";
    for (i in posts) {
        var authorid = posts[i].userId;
        if (posts[i].groupId == groupid) {
            postListing += '<div class="single-post"><div class="post-author"><img class="avatar" src="' +
                users[authorid].picture + '"><a href="user.html?userid=' + authorid + '">' +
                users[authorid].firstName + " " + users[authorid].lastName + '</a><div class="post-date">' +
                posts[i].date + '</div></div><hr><div class="post-content">' + posts[i].content +
                '<div class="comments-button"><a class="open-comments-modal" href="group.html?userid=' +
                userid + '&post=' + posts[i].postId + '&groupid=' + groupid +'">' + 'view comments</a></div></div></div>';
        }

    }
    postsHTML.innerHTML = postListing;

    //load group members
    var memberList = "<h2>members:</h2>";
    var members = document.getElementById("group-members");
    for (i in groupMembers[groupid].members) {
        var memberid = groupMembers[groupid].members[i];
        memberList += "<hr>" + '<div class="single-member"><div class="post-author"><img class="avatar" src="' + users[memberid].picture +
            '"><a href="user.html?userid=' + memberid + '">' + users[memberid].firstName + " " + users[memberid].lastName + "</a></div></div>";
    }
    members.innerHTML = memberList;




    var postContent = document.getElementById("post-content");
    var postButton = document.getElementById("post-button");
    postButton.onclick = function () {
        if (postContent.value != "") {
            var index = posts.length;
            posts[index] = {
                postId: index,
                userId: userid,
                groupId: groupid,
                content: postContent.value,
                date: getDateNow()
            }
            console.log(posts[posts.length - 1]);

            postListing = '<div class="single-post"><div class="post-author"><img class="avatar" src="' +
                users[userid].picture + '"><a href="user.html?userid=' + posts[index].userId + '">' +
                users[userid].firstName + " " + users[authorid].lastName + '</a><div class="post-date">' +
                posts[index].date + '</div></div><hr><div class="post-content">' + posts[index].content +
                '<div class="comments-button"><a class="open-comments-modal" href="group.html?userid=' +
                userid + '&post=' + posts[index].postId + '&groupid=' + groupid + '">' + 'view comments</a></div></div></div>' + postListing;
            postsHTML.innerHTML = postListing;
        }
    }

    

    var requestsModal = document.getElementById("friend-requests-modal");
    var requestsOpenBtn = document.getElementById("friend-requests");
    var homeBtn = document.getElementById("logo");

    requestsModal.addEventListener("click", function () {
        requestsModal.style.display = "none";
    });

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
    

    //load comments if post is selected
    var commentHTML = document.getElementById("comments-listing");
    var commentsListing = "";
    if (activePost != null) {
        for (i in comments) {
            var authorid = comments[i].userid;
            if (comments[i].postid == activePost) {
                commentsListing += '<div class="single-post"><div class="post-author"><img class="avatar" src="' + users[authorid].picture +
                    '"><a href="user.html?userid=' + authorid + '">' + users[authorid].firstName + " " + users[authorid].lastName +
                    '</a><div class="post-date">' + comments[i].date + '</div></div><hr><div class="post-content">' + comments[i].content +
                    '   </div></div>';
            }

        }
        commentHTML.innerHTML = commentsListing;
        commentModal.style.display = "block";
    }


    var commentContent = document.getElementById("comment-content");
    var commentButton = document.getElementById("comment-button");
    commentButton.onclick = function () {
        if (commentContent.value != "") {
            var index = comments.length;
            comments[index] = {
                postId: activePost,
                userId: userid,
                content: commentContent.value,
                date: getDateNow()
            }
            console.log(comments[index]);


            var authorid = userid;

            commentsListing = '<div class="single-post"><div class="post-author"><img class="avatar" src="' + users[authorid].picture +
                '"><a href="user.html?userid=' + authorid + '">' + users[authorid].firstName + " " + users[authorid].lastName +
                '</a><div class="post-date">' + comments[index].date + '</div></div><hr><div class="post-content">' + comments[index].content +
                '   </div></div>' + commentsListing;



            commentHTML.innerHTML = commentsListing;
        }
    }
    //friend reqeuests
    var requestsHTML = document.getElementById("friend-requests-listing");
    var requestsListing = "";
    for (i in friendRequests) {
        if (friendRequests[i].to == userid) {
            requestsListing += '<div class="single-friend-request"><a href="user.html?userid=' + friendRequests[i].from +
                '">' + users[friendRequests[i].from].firstName + " " + users[friendRequests[i].from].lastName +
                '</a><button class="decline-request" onclick = "this.declineRequest(' + friendRequests[i].reqId +
                ')">decline</button><button class="confirm-request">confirm</button></div>';
        }
    }
    requestsHTML.innerHTML = requestsListing;


    function getDateNow() {
        var date = new Date();
        return + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    }

    commentCloseBtn.onclick = function(){
        commentModal.style.display = "none";
    }

}

