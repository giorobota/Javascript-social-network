var commmentsModal = `<div id="comments-modal" class="comments-modal">
<div class="comments-modal-content">
    <div class="modal-header">
        <button id="close-comments-modal" class="close-modal">close</button>
    </div>
    <div class="create-post">
        <h3> add a comment </h3>

        <textarea id="comment-content" class="post-content"></textarea>
        <button id="comment-button" class="post-button"> post </button>
    </div>
    <h2> comments </h2>
    <div id="comments-listing">
    </div>
</div>
</div>`
module.exports = commmentsModal;
