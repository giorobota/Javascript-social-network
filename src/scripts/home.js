import { initPostButtons } from './index.js';
import { getPost } from './templates.js';

export function loadPublicPosts(users, friends, API, userid, posts, pageUrl, hash) {
    var postsHTML = document.getElementById("posts");
    initPostButtons();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var userFriends = friends[userid].friends;
        var postListing = "";
        for (var i = 0; i < posts.length; i++) {
            var authorid = posts[i].userId;
            if (posts[i].groupId == -1 && (userFriends.includes(authorid) || userid == authorid)) {
                
                postListing = getPost(authorid, users, posts, i, pageUrl, hash + "home") + postListing;
            }
        }
        postsHTML.innerHTML = postListing;
    }
    xhttp.send();
}

export function loadStories(router, users, friends, API, stories, pageUrl, hash, userid, activePage) {
    initStoryModal(router, activePage);
    var storyHTML = document.getElementById("story-listing");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var storyListing = "";
        for (var i in stories) {
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

function initStoryModal(router, activePage) {
    var storyModal = document.getElementById("story-modal");
    storyModal.addEventListener("click", function () {
        router.navigate(activePage);
        storyModal.style.display = "none";
    });
}

export function loadFriendSuggestions(users, API, userid, pageUrl, hash) {
    var suggestionsHTML = document.getElementById("friend-suggestion-listing");

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        console.log(xhttp.response);
        var suggestionListing = "";
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
export function openStory(currentStoryId, stories, API) {
    var storyModal = document.getElementById("story-modal");
    var storyImage = document.getElementById("story-image");
    storyImage.src = "../src/images/loading.gif";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {

        storyImage.src = stories[currentStoryId].url;
    }
    xhttp.send();
    storyModal.style.display = "block";
}