var home = `<div class="main-content">
<div class="left-section" id="navigation">
</div>
<div class="middle-section">
    <div class="create-post"> 
        <h3> post </h3>
        <textarea class="post-content" id="post-content"></textarea>
        <button class="post-button" id="post-button"> post </button>
    </div>
    <div class="posts" id="posts"></div>
</div>
<div class="right-section">
    <div class="stories">
        <div class="story-wrapper">
            <input type="url" id="storyUrl" placeholder="paste url here">
            <button id="add-story">add story</button>
        </div>
        <h2>stories:</h2>
        <div id="story-listing">
        </div>
    </div>
    <div class="friend-suggestions">
        <h2>friend suggestions:</h2>
        <div id="friend-suggestion-listing"></div>
    </div> 
</div>
</div>`; 
module.exports = home;  