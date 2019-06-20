export function getPost(authorid, users, posts, i, pageUrl, hash) {
    return `<div class="single-post">
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
                 <a href = "${pageUrl + hash + "/post/" + i}" class="open-story-modal" >view comments</button>
            </div>
        </div> 
    </div>`;
}
export function getComment(i, users, authorid, comments, pageUrl, hash){
    return `<div class="single-post">
    <div class="post-author">
    <img class="avatar" src="${users[authorid].picture}">
    <a href="${pageUrl + hash + "user/" + authorid}">${users[authorid].firstName + " " + users[authorid].lastName} </a>
    <div class="post-date"> ${comments[i].date} 
    </div></div><hr>
    <div class="post-content"> ${comments[i].content} 
    </div></div>`;
}

export function getFriendRequest(i, friendRequests, pageUrl, hash, users){
    return `<div class="single-friend-request"><img class = "avatar" src = "${users[friendRequests[i].from].picture}">
            <a href="${pageUrl + hash + "user/" + friendRequests[i].from}"> ${users[friendRequests[i].from].firstName + " " + users[friendRequests[i].from].lastName}</a>
                        </div><hr>`;
}