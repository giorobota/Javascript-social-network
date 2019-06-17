function acceptRequest(reqId) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        friends[friendRequests[reqId].from].friends.push(friendRequests[reqId].to);
        friends[friendRequests[reqId].to].friends.push(friendRequests[reqId].from);
        friendRequests[reqId].from = -1;
        friendRequests[reqId].to = -1;
        console.log("accepted");
    }
    xhttp.send();
    loadFriendRequests();
}
function declineRequest(reqId) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        friendRequests[reqId].from = -1;
        friendRequests[reqId].to = -1;
        //reload friend requests
        console.log("declined");
        loadFriendRequests();
    }
    xhttp.send();

}
module.exports = declineRequest, acceptRequest;