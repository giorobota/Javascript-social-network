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
            picture: "data:image/jpeg;base64,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",
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
            userid: 0,
            postid: 2,
            content: "Labore in dolore irure officia incididunt. Consectetur sunt enim labore laborum commodo pariatur sit in elit aliquip ipsum. Consectetur elit anim dolore non anim nulla ex mollit duis incididunt officia laboris. Incididunt nulla labore proident tempor Lorem culpa do veniam occaecat aliquip. Deserunt velit magna laborum dolore.",
            date: "2019/3/25"
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




    var storyModal = document.getElementById("story-modal");
    var commentModal = document.getElementById("comments-modal");
    var requestsModal = document.getElementById("friend-requests-modal");


    //getting userid from url
    var url = new URL(window.location.href);
    var userid = url.searchParams.get("userid");
    var activePost = url.searchParams.get("post");
    var activeStory = url.searchParams.get("story");
    if (userid >= users.length) window.location.href = "index.html";

    var activeProfile = document.getElementById("active-profile");
    activeProfile.innerHTML = '<img id="friend-requests" src="images/friend-requests.jpg"><img class="avatar" src="'
        + users[userid].picture + '"><div id="username"><a href="user.html' + "?userid=" + userid + '">'
        + users[userid].firstName + '</a></div>';
    var navigation = document.getElementById("navigation");
    navigation.innerHTML = '<ul><li><a class="active" href="">Home</a></li><li><a href="groups.html' +
        "?userid=" + userid + '">Groups</a></li><li><a href="events.html' + "?userid=" + userid +
        '">Events</a></li></ul></div>';



    //loading public posts
    var postsHTML = document.getElementById("posts");
    var postListing = "";
    var userFriends = friends[userid].friends;
    var displayedPosts = [];
    for (i in posts) {
        var authorid = posts[i].userId;
        if (posts[i].groupId == -1 && (userFriends.includes(authorid) || userid == authorid)) {
            postListing += '<div class="single-post"><div class="post-author"><img class="avatar" src="' +
                users[authorid].picture + '"><a href="user.html?userid=' + authorid + '">' +
                users[authorid].firstName + " " + users[authorid].lastName + '</a><div class="post-date">' +
                posts[i].date + '</div></div><hr><div class="post-content">' + posts[i].content +
                '<div class="comments-button"><a class="open-comments-modal" href="home.html?userid=' +
                userid + '&post=' + posts[i].postId + '">' + 'view comments</a></div></div></div>';
            displayedPosts.push(posts[i].postId);
        }

    }
    postsHTML.innerHTML = postListing;

    var storyHTML = document.getElementById("story-listing");
    var storyListing = "";

    for(i in stories){
        var author = stories[i].userid;
        //display only friends' stories and his
        if(friends[userid].friends.includes(author) || author == userid){
            storyListing +=  '<div class="single-story"><div class="post-author"><img class="avatar" src="' + users[author].picture +
                '"><a class="open-story-modal" href="home.html?userid=' + userid + '&story=' + stories[i].storyid + '">' + 
                users[author].firstName + " " + users[author].lastName + '</a></div></div>';
        }
    }
    storyHTML.innerHTML = storyListing;


    //load comments if post is selected
    var commentHTML = document.getElementById("comments-listing");
    var commentsListing = "";
    if (activePost != null) {
        for (i in comments) {
            var authorid = comments[i].userid;
            if(comments[i].postid == activePost){
                commentsListing += '<div class="single-post"><div class="post-author"><img class="avatar" src="' + users[authorid].picture +
                '"><a href="user.html?userid=' + authorid + '">' + users[authorid].firstName + " " + users[authorid].lastName + 
                '</a><div class="post-date">' + comments[i].date + '</div></div><hr><div class="post-content">' + comments[i].content + 
                '   </div></div>';
            }
          
        }
        commentHTML.innerHTML = commentsListing;
        commentModal.style.display = "block";
    }
    
    if(activeStory != null){
        storyModal.innerHTML = '<div class="story-modal-content"><img src="' + stories[activeStory].url + '"></div>';
        storyModal.style.display = "block";
    }


    var requestsOpenBtn = document.getElementById("friend-requests");
    var commentCloseBtn = document.getElementById("close-comments-modal");

    var homeBtn = document.getElementById("logo");



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
    requestsModal.addEventListener("click", function () {
        requestsModal.style.display = "none";
    });

    commentCloseBtn.onclick = function () {
        commentModal.style.display = "none";
    }

}
