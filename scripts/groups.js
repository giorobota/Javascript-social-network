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



var groupList;
var groupSuggestions;
var homeBtn;
var requestsOpenBtn;
var requestsModal;
var navigation;
var activeProfile;
var requestsHTML;
window.onload = function () {



    //getting userid from url
    var url = new URL(window.location.href);
    userid = Number(url.searchParams.get("userid"), 10);
    activeProfile = document.getElementById("active-profile");
    navigation = document.getElementById("navigation");
    requestsModal = document.getElementById("friend-requests-modal");
    requestsOpenBtn = document.getElementById("friend-requests");
    groupList = document.getElementById("groups");
    groupSuggestions = document.getElementById("group-suggestions");
    homeBtn = document.getElementById("logo");
    requestsHTML = document.getElementById("friend-requests-listing");
    if (userid >= users.length) window.location.href = "index.html";

    loadTopPanel();

    navigation.innerHTML = '<ul><li><a  href="home.html' + "?userid="
        + userid + '">Home</a></li><li><a class="active" href="">Groups</a></li><li><a href="events.html'
        + "?userid=" + userid + '">Events</a></li></ul>';


    loadGroups();
    loadFriendRequests();


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

}
function loadGroups() {
    var res = "";
    var suggestions = "";
    for (var group in groups) {
        //will need to fix url later after adding user database
        res += '<div class="single-event"><div class="event-author"><h2><a class="event-name" href="group.html?groupid=' + groups[group].groupId +
            "&userid=" + userid + '">' + groups[group].groupName + '</a></h2></div><hr><div class="event-content">' + groups[group].description + "</div></div>";
        suggestions += '<div class="single-event-suggestion"></div><h3><a href="group.html?groupid=' + groups[group].groupId + "&userid=" + userid + '">' +
            groups[group].groupName + "</a> </h3></div>";
        if (group <= 3) groupSuggestions.innerHTML = suggestions;
    }
    groupList.innerHTML = res;
}
function getDateNow() {
    var date = new Date();
    return + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
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

function loadTopPanel() {
    activeProfile.innerHTML = '<img class="avatar" src="'
        + users[userid].picture + '"><div id="username"><a href="user.html' + "?userid=" + userid + '&activeUer=' + userid + '">'
        + users[userid].firstName + '</a></div>';
}