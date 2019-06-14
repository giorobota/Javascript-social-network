var eventsModal = `<div id="event-modal" class="event-participants-modal">
<div class="modal-content">
    <button id="close-event-modal">close</button>
    <div id="event-modal-buttons">
        <button class="event-button" id = "going">going</button>
    </div>
    <h2> list of participants</h2>
    <div id="event-participants"></div>
    <hr>
    <div class="create-post">
        <h3> invite friends </h3>
        <input class="post-content" id="invitedUser"></textarea>
        <button class="post-button" id="inviteButton">invite</button>
    </div>
</div>
</div>`
module.exports = eventsModal;