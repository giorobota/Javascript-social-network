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