var events = `<div class="main-content">
<div class="left-section" id="navigation">
</div>
<div class="middle-section">
    <div class="create-post">
        <h3> create an event  </h3>
        <input class="post-content" id="event-name" placeholder="event name">
        <textarea class="post-content" id="event-description" placeholder="event description"></textarea>
        Date: <input type="datetime-local" name="date" id = "event-date">
        <button class="post-button" id="create-event-button"> create </button>
    </div>
    <div class="events" id="events">
        
    </div>
</div>
<div class="right-section">
    <div class="event-suggestions">
        <h2>event suggesions:</h2>
        <div id="event-suggestions"></div>
    </div>
</div>
</div>`;
module.exports = events; 