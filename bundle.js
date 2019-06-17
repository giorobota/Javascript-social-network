(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
var events = `<div class="main-content">
<div class="left-section" id="navigation">
</div>
<div class="middle-section">

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
},{}],4:[function(require,module,exports){
var requestsModal = `<div class="friend-requests-modal" id="friend-requests-modal">
<div class="friend-requests-modal-content">
    <h2> friend requests </h2>
    <div id="friend-requests-listing"></div>
</div>
</div>`;
module.exports = requestsModal;
},{}],5:[function(require,module,exports){
var group = `<div class="main-content">
<div class="left-section" id="navigation">
</div>
<div class="middle-section">
    <div class="create-post">
        <h3> post in group </h3>
        <textarea id="post-content" class="post-content"></textarea>
        <button id="post-button" class="post-button"> post </button>
    </div>
    <div class="posts" id="posts">
    </div>
</div>
<div class="right-section">
    <div class="group-members" id="group-members">
    </div>
</div>
</div>`;
module.exports = group;
},{}],6:[function(require,module,exports){
var groups = ` <div class="main-content">
<div class="left-section" id = "navigation">
</div>
<div class="middle-section">
    <div class="events" id = "groups">
    </div>
</div>

<div class="right-section">


    <div class="event-suggestions">
        <h2>group suggestions:</h2>
        <div id = "group-suggestions"></div>
    </div>
</div>
</div>`
module.exports = groups;
},{}],7:[function(require,module,exports){
var home = `<div class="main-content">
<div class="left-section" id="navigation">
    <!-- list navigation if works -->
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
},{}],8:[function(require,module,exports){
var storyModal = `<div id="story-modal" class="story-modal">
<div class="story-modal-content">
    <img src="images/story-image.png">
</div>
</div>`;
module.exports = storyModal;
},{}],9:[function(require,module,exports){
var topBar = `<div class="top-bar">
<img id="logo" src="images/logo.jpg">
<div class="search">
    <input type="text" name="firstname" placeholder="find people:">

    <input type="submit" value="search" id="search">
</div>
<div class="active-profile">
    <img id="friend-requests" src="images/friend-requests.jpg">
    <img id="logout" src="images/logout.png">
    <div id="active-profile"></div>
</div>
</div>`

module.exports = topBar;


},{}],10:[function(require,module,exports){
var user = `<div class="timeline">
<div class="profile-photos">
    <img id="profile-photo-big" src="images/default-profile.png">
</div>
<button id="add-friend"></button>
<div class="about">
    <div id = "fullname"></div>
    <h2>About:</h2>
    <div class="user-info" id="bio"></div>
</div>
<div class="posts" id="posts"></div>
</div>
<input type="file" id="imgupload" style="display:none" accept="image/*">  `
module.exports = user;
},{}],11:[function(require,module,exports){
var welcome = `<div class="welcome">
<h1>
    welcome to bookface
</h1>

<div class='main-content'>
    <div class='login-section'>
        <h2> login </h2>
        <div id='message'></div>
        <label>email</label>
        <input type='text' id='email' placeholder='email'>

        <label>password</label>
        <input type='password' id='password' placeholder='password'>
        <button id='login'> login </button>
    </div>
    <div class='signup-section'>
        <h2> create a new account </h2>
        <div id='message-signup'></div>
        <label for='firstname'>firstname</label>
        <input type='text' id='firstname' placeholder='firstName'>
        <label for='lastname'>lastname</label>
        <input type='text' id='lastname' placeholder='lastname'>
        <label>email</label>
        <input type='text' id='email-signup' placeholder='email'>
        <label for='password'>password</label>
        <input type='password' id='password-signup' placeholder='password'>
        <button id='signup'>signup</button>
    </div>
</div>`;
module.exports = welcome;

},{}],12:[function(require,module,exports){
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
module.exports = comments;
},{}],13:[function(require,module,exports){
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
module.exports = eventParticipants;
},{}],14:[function(require,module,exports){
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
module.exports = events;
},{}],15:[function(require,module,exports){
var friendRequests = [
    {
        reqId: 0,
        from: 2,
        to: 1,
    }
]
module.exports = friendRequests;
},{}],16:[function(require,module,exports){
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
module.exports = friends;
},{}],17:[function(require,module,exports){
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
module.exports = groupMembers;
},{}],18:[function(require,module,exports){
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
module.exports = groups;
},{}],19:[function(require,module,exports){
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
module.exports = posts;
},{}],20:[function(require,module,exports){
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
module.exports = stories;
},{}],21:[function(require,module,exports){
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
        picture: "https://www.eharmony.co.uk/dating-advice/wp-content/uploads/2018/06/datingprofile2-900x600.jpg",
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
module.exports = users;
},{}],22:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Navigo=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});


},{}],23:[function(require,module,exports){
var users = require("../data/users");
var posts = require("../data/posts");
var friends = require("../data/friends");
var comments = require("../data/comments");
var stories = require("../data/stories");
var friendRequests = require("../data/friendRequests");
var groups = require("../data/groups");
var groupMembers = require("../data/groupMembers");
var events = require("../data/events");
var eventParticipants = require("../data/eventParticipants");

var router;
var userid;
var groupid;
var activePost;
var templates = {};
var activePage;
var viewingUser;
const API = "dummy-data.json";
const hash = '#!';
const pageUrl = "index.html";
function initRouter() {
    var Navigo = require("navigo");
    var root = null;
    var useHash = true;
    router = new Navigo(root, useHash, hash);
    router.on({
        'welcome': function () {
            activePage = 'welcome';
            showPage("welcome");
        },

        'home': function () {
            userid = localStorage.getItem("userid");
            if (activePage != 'home') {
                activePage = 'home';
                showPage("home");

            }

        },
        'home/story/:id': function (params) {
            userid = localStorage.getItem("userid");
            if (activePage != 'home') {
                showPage("home");
                activePage = "home";
            }
            openStory(params.id);
        },
        'home/post/:id': function (params) {
            userid = localStorage.getItem("userid");
            if (activePage != 'home') {
                showPage("home");
                activePage = "home";
            }
            openComments(params.id);
        },
        'groups': function () {
            userid = localStorage.getItem("userid");
            activePage = "groups";
            showPage("groups");
        },
        'group/:groupid/post/:postid': function (params) {
            userid = localStorage.getItem("userid");
            groupid = params.groupid;
            if (activePage != 'group/' + groupid) {
                activePage = 'group/' + groupid;
                showPage("group");
            }

            openComments(params.postid);

        },
        'group/:groupid': function (params) {
            userid = localStorage.getItem("userid");
            groupid = params.groupid;
            if (activePage != 'group/' + groupid) {

                activePage = 'group/' + groupid;
                showPage("group");
            }
        },
        'events': function (params) {
            userid = localStorage.getItem("userid");
            if (activePage != 'events') {
                activePage = events;
                showPage('events');
            }

        },
        'events/:id': function (params) {
            userid = localStorage.getItem("userid");
            if (activePage != 'events') {
                activePage = events;
                showPage('events');
            }
            openEvent(params.id);
        },
        'user/:id': function (params) {
            viewingUser = params.id;
            userid = localStorage.getItem("userid");
            if (activePage != 'user/' + params.id) {
                activePage = "user/" + params.id;
                showPage('user');
            }
        },
        'user/:id/post/:postid': function (params) {
            viewingUser = params.id;

            userid = localStorage.getItem("userid");
            if (activePage != 'user/' + params.id) {
                activePage = "user/" + params.id;
                showPage('user');
            }
            openComments(params.postid);
        },
        // "declineRequest/:id" : function (params) {
        //     declineRequest(params.id);
        //     console.log(activePage);
        //     router.navigate(activePage);

        // },
        // "acceptRequest/:id" : function (params) {
        //     acceptRequest(params.id);
        //     console.log(activePage);
        //     router.navigate(activePage);

        // }
    });
    router.notFound(function (query) {
        router.navigate("welcome");
    });
    router.resolve();
}

window.onload = function () {
    loadTemplates();
    userid = -1;
    groupid = -1;
    activePost = -1;
    initRouter();
}
function loadTemplates() {
    templates.welcome = require("../components/welcome");
    templates.topBar = require("../components/top-bar");
    templates.commentModal = require("../components/comments-modal");
    templates.requestsModal = require("../components/friend-requests-modal");
    templates.home = require("../components/home");
    templates.storyModal = require("../components/story-modal");
    templates.group = require("../components/group");
    templates.groups = require("../components/groups");
    templates.events = require("../components/events");
    templates.eventsModal = require("../components/events-modal");
    templates.user = require("../components/user");
}

function showPage(page) {
    switch (page) {
        case "home":
            loadPage(page);
            loadTopPanel();
            loadPublicPosts();
            loadFriendSuggestions();
            loadStories();
            loadFriendRequests();
            initRequestsButton();
            initStoryModal();
            break;
        case "welcome":
            loadPage(page);
            loadWelcomeButtons();

            break;
        case "groups":
            loadPage(page);
            loadTopPanel();
            loadGroups();
            loadFriendRequests();
            initRequestsButton();
            break;
        case "group":
            loadPage(page);
            loadTopPanel();
            loadGroupPosts();
            loadFriendRequests();
            initRequestsButton();
            loadGroupMembers();
            break;
        case "events":
            loadPage(page);
            loadTopPanel();
            loadFriendRequests();
            initRequestsButton();
            loadEvents();
            break;
        case "user":
            loadPage(page);
            loadTopPanel();
            loadFriendRequests();
            loadUserPosts();
            initRequestsButton();
            loadAddFriend();
            initCommentButtons();
            loadBio();
            loadProfile();
            break;

    }

}
function loadGroups() {
    var groupList = document.getElementById("groups");
    var groupSuggestions = document.getElementById("group-suggestions");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var res = "";
        var suggestions = "";
        for (var group in groups) {

            res += `<div class="single-event"><div class="event-author">
                    <h2><a class="event-name" href="${pageUrl + hash + "group/" + group}">${groups[group].groupName} </a></h2></div><hr><div class="event-content"> ${groups[group].description} </div></div>`;
            suggestions += `<div class="single-event-suggestion"></div><h3><a  href="${pageUrl + hash + "group/" + group}">
                ${groups[group].groupName}</a> </h3></div>`;
            if (group <= 3) groupSuggestions.innerHTML = suggestions;
        }
        groupList.innerHTML = res;
    }
    xhttp.send();
}
function initPostButtons() {
    var postButton = document.getElementById("post-button");
    initCommentButtons();
    postButton.onclick = function () {
        addPost(groupid);
    }

}
function initCommentButtons() {
    var commentCloseBtn = document.getElementById("close-comments-modal");
    var commentButton = document.getElementById("comment-button");
    commentCloseBtn.onclick = function () {
        commentModal = document.getElementById("comments-modal");

        commentModal.style.display = "none";
        router.navigate(activePage, false);
    }
    commentButton.onclick = function () {
        addComment();
    }
}
function initStoryModal() {
    var storyModal = document.getElementById("story-modal");
    storyModal.addEventListener("click", function () {
        router.navigate(activePage);
        storyModal.style.display = "none";
    });
}
function initHomeButton() {
    var homeBtn = document.getElementById("logo");
    homeBtn.onclick = function () {
        router.navigate('home', false);
    }
    var logoutBtn = document.getElementById("logout");
    logoutBtn.onclick = function () {
        userid = -1;
        localStorage.setItem("userid", -1);
        router.navigate("welcome", false);
    }
}
function initRequestsButton() {
    var requestsModal = document.getElementById("friend-requests-modal");
    var requestsOpenBtn = document.getElementById("friend-requests");
    requestsOpenBtn.onclick = function () {
        if (requestsModal.style.display == "block") {
            requestsModal.style.display = "none";
        } else {
            requestsModal.style.display = "block";
        }
    }
}
function loadNavigation(activePage) {
    var navigation = document.getElementById("navigation");
    navigation.innerHTML = `<ul>
        <li><button id = "homeNav">Home</button></li>
        <li><button id = "groupsNav">Groups</button></li>
        <li><button id = "eventsNav">Events</button></li>
        </ul></div>`;
    switch (activePage) {
        case "home": document.getElementById("homeNav").className = "active";
            break;
        case "groups": document.getElementById("groupsNav").className = "active";
            break;
        case "events": document.getElementById("eventsNav").className = "active";
            break;
    }
    document.getElementById("homeNav").onclick = function () {
        router.navigate("home");
    }
    document.getElementById("groupsNav").onclick = function () {
        router.navigate("groups");
    }
    document.getElementById("eventsNav").onclick = function () {
        router.navigate("events");
    }


}

function loadWelcomeButtons() {
    var passwordField = document.getElementById("password");
    var emailField = document.getElementById("email");
    var loginBtn = document.getElementById("login");
    var loginMsg = document.getElementById("message");
    loginBtn.addEventListener("click", function () {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", API, true);
        xhttp.onload = function () {
            for (var user in users) {
                if (users[user].email == emailField.value && users[user].password == passwordField.value) {

                    userid = Number(user, 10);
                    localStorage.setItem("userid", userid);

                    router.navigate("home");
                    return;
                }
            }
            loginMsg.innerHTML = "incorrect username or password";
        };
        xhttp.send();

    });

    initRegistration();
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

function loadFriendRequests() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);

    xhttp.onload = function () {
        var requestsHTML = document.getElementById("friend-requests-listing");
        var requestsListing = "";
        for (i in friendRequests) {

            if (friendRequests[i].to == userid) {
                requestsListing = `<div class="single-friend-request">
            <a href="${pageUrl + hash + "user/" + friendRequests[i].from}"> ${users[friendRequests[i].from].firstName + " " + users[friendRequests[i].from].lastName}</a>
            <a class="decline-request" href="${pageUrl + hash + 'declineRequest/' + friendRequests[i].reqId}">decline</a>
            <a class="confirm-request" href="${pageUrl + hash + 'acceptRequest/' + friendRequests[i].reqId}">confirm</a></div>` + requestsListing;
            }
        }
        requestsHTML.innerHTML = requestsListing;
    }
    xhttp.send();

}

function loadStories() {
    var storyHTML = document.getElementById("story-listing");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var storyListing = "";
        for (i in stories) {
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

function loadPublicPosts() {
    var postsHTML = document.getElementById("posts");
    initPostButtons();

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var userFriends = friends[userid].friends;
        var postListing = "";
        for (i in posts) {

            var authorid = posts[i].userId;
            if (posts[i].groupId == -1 && (userFriends.includes(authorid) || userid == authorid)) {


                postListing = `<div class="single-post">
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
                                            <a href = "${pageUrl + hash + "home/post/" + i}" class="open-story-modal" >view comments</button>
                                        </div>
                                    </div>
                                </div>` + postListing;

            }
        }
        postsHTML.innerHTML = postListing;
    }
    xhttp.send();
}

function openComments(currentPostId) {
    activePost = Number(currentPostId, 10);
    console.log("opening comments");
    var commentHTML = document.getElementById("comments-listing");
    activePost = currentPostId;

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var commentsListing = "";
        for (i in comments) {

            var authorid = comments[i].userid;
            if (comments[i].postid == currentPostId) {
                commentsListing = `<div class="single-post">
            <div class="post-author">
            <img class="avatar" src="${users[authorid].picture}">
            <a href="${pageUrl + hash + "user/" + authorid}">${users[authorid].firstName + " " + users[authorid].lastName} </a>
            <div class="post-date"> ${comments[i].date} 
            </div></div><hr>
            <div class="post-content"> ${comments[i].content} 
            </div></div>` + commentsListing;
                console.log(comments[i]);
            }


        }

        commentHTML.innerHTML = commentsListing;
    }
    xhttp.send();
    var commentModal = document.getElementById("comments-modal");
    commentModal.style.display = "block";
}

function addComment() {
    var commentContent = document.getElementById("comment-content");
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        if (commentContent.value != "") {
            var index = comments.length;
            comments[index] = {
                postid: Number(activePost),
                userid: userid,
                content: commentContent.value,
                date: getDateNow()
            }
            commentContent.value = "";
            console.log(comments[index]);
            openComments(activePost);
        }
    }
    xhttp.send();
}

function getDateNow() {
    var date = new Date();
    return + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
}

function addPost(currentGroupId) {
    var postContent = document.getElementById("post-content");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        if (postContent.value != "") {
            var index = posts.length;
            posts[index] = {
                postId: index,
                userId: userid,
                groupId: currentGroupId,
                content: postContent.value,
                date: getDateNow()
            }
            postContent.value = "";
            if (groupid == -1) loadPublicPosts();
            else loadGroupPosts();

        }
    }
    xhttp.send();
}

function openStory(currentStoryId) {
    storyModal = document.getElementById("story-modal");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {

        storyModal.innerHTML = '<div class="story-modal-content"><img src="' + stories[currentStoryId].url + '"></div>';
    }
    xhttp.send();
    storyModal.style.display = "block";
}

function loadFriendSuggestions() {
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

function sendRequest(requestUserId) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("post", API, true);
    xhttp.onload = function () {
        var index = friendRequests.length;
        friendRequests[index] = {
            from: userid,
            to: requestUserId,
            reqId: index
        }
        console.log(friendRequests[index]);
    }
    xhttp.send();
}
function loadTopPanel() {
    initHomeButton();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        console.log(userid);
        var activeProfile = document.getElementById("active-profile");
        activeProfile.innerHTML = `<img class="avatar" src="${users[userid].picture}"><div id="username"><a href="${pageUrl + hash + "user/" + userid}">
         ${users[userid].firstName}  </a></div>`;
    }
    xhttp.send();
}


function loadPage(pageName) {
    var currPage = document.getElementById("routing-component");
    switch (pageName) {
        case "welcome": currPage.innerHTML = templates.welcome;
            break;
        case "home":
            currPage.innerHTML = templates.topBar + templates.home + templates.commentModal + templates.requestsModal +
                templates.commentModal + templates.storyModal;
            loadNavigation(pageName);
            break;
        case "groups":
            currPage.innerHTML = templates.topBar + templates.groups + templates.requestsModal;
            loadNavigation(pageName);
            break;
        case "group":
            currPage.innerHTML = templates.topBar + templates.group + templates.commentModal + templates.requestsModal;
            loadNavigation(pageName);
            break;
        case "events": currPage.innerHTML = templates.topBar + templates.events + templates.requestsModal + templates.eventsModal;
            loadNavigation(pageName);
            break;
        case "user": currPage.innerHTML = templates.topBar + templates.user + templates.requestsModal + templates.commentModal;
            break;
    }
}

function loadGroupPosts() {
    initPostButtons();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var postsHTML = document.getElementById("posts");
        var postListing = "";
        for (i in posts) {
            var authorid = posts[i].userId;
            if (posts[i].groupId == groupid) {
                postListing = `<div class="single-post"><div class="post-author"><img class="avatar" src="${users[authorid].picture}">
                <a href="${pageUrl + hash + "user/" + authorid}">
                    ${users[authorid].firstName + " " + users[authorid].lastName}</a><div class="post-date">
                    ${posts[i].date}</div></div><hr><div class="post-content">${posts[i].content} 
                    <div class="comments-button"><a class="open-story-modal" href = "${pageUrl + hash + router.lastRouteResolved().url + "/post/" + i}">
                    'view comments</button></div></div></div>` + postListing;

            }
        }
        postsHTML.innerHTML = postListing;
    }
    xhttp.send();
}

function loadGroupMembers() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var members = document.getElementById("group-members");
        var memberList = "<h2>members:</h2>";
        for (i in groupMembers[groupid].members) {
            var memberid = groupMembers[groupid].members[i];
            memberList += `<hr><div class="single-member"><div class="post-author"><img class="avatar" src="${users[memberid].picture}">
            <a href="${pageUrl + hash + "user/" + i}">${users[memberid].firstName + " " + users[memberid].lastName} </a></div></div>`;
        }
        members.innerHTML = memberList;
    }
    xhttp.send();
}
function loadEvents() {
    document.getElementById("close-event-modal").onclick = function () {
        router.navigate("events");
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        eventsHTML = document.getElementById("events");
        eventSuggestions = document.getElementById("event-suggestions");
        var eventListing = "";
        var suggestions = "";
        for (i in events) {

            eventListing = `<div class="single-event"><div class="event-author"><a class="open-events-modal" href = "${pageUrl + hash + "events/" + i}"> 
            ${events[i].eventName}</a><div class="event-date"> ${events[i].eventDate}</div></div><hr><div class="event-content">
                ${events[i].eventDescription}</div></div>` + eventListing;

            if (i <= 3) {
                suggestions += `<div class="single-event-suggestion" ><a class="open-events-modal" href = "${pageUrl + hash + "events/" + i}">
                    ${events[i].eventName}</a></div>`;
            }
        }
        eventsHTML.innerHTML = eventListing;
        eventSuggestions.innerHTML = suggestions;
    }
    xhttp.send();
}
function openEvent(id) {
    activeEvent = id;
    var userGoing = false;
    var eventModal = document.getElementById("event-modal");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);

    xhttp.onload = function () {
        var eventButton = document.getElementById("going");
        var participantsList = document.getElementById("event-participants");

        var listing = ""
        for (i in eventParticipants) {
            if (eventParticipants[i].eventid == id) {
                listing += '<a href="user.html?userid=' + eventParticipants[i].userid + '&activeuser='
                    + userid + '">' + users[eventParticipants[i].userid].firstName + " " + users[eventParticipants[i].userid].lastName + '  '
                    + '</a>';
                if (eventParticipants[i].userid == userid) userGoing = true;
            }
        }
        if (userGoing) {
            eventButton.innerHTML = 'not going';
            eventButton.onclick = function () {
                removeParticipant(activeEvent);
            }
        } else {
            eventButton.innerHTML = 'going';
            eventButton.onclick = function () {
                addParticipant(activeEvent, userid);
            }
        }
        participantsList.innerHTML = listing;

    }
    xhttp.send();
    eventModal.style.display = "block";
    initEventInviteButton(activeEvent);
}

function initEventInviteButton(activeEvent) {
    document.getElementById("inviteButton").onclick = function () {
        var field = document.getElementById("invitedUser");
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", API, true);
        xhttp.onload = function () {
            for (i in users) {
                if ((users[i].firstName + " " + users[i].lastName) == field.value) {
                    addParticipant(activeEvent, i);
                }
            }
            field.value = "";
            console.log("finished adding");
        }
    }
}
function removeParticipant(activeEvent) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        for (i in eventParticipants) {
            if (eventParticipants[i].eventid == activeEvent && eventParticipants[i].userid == userid) {
                eventParticipants[i].eventid = -1;
                eventParticipants[i].userid = -1;
                openEvent(activeEvent);
            }
        }
    }
    xhttp.send();
}

function addParticipant(activeEvent, user) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var index = eventParticipants.length
        eventParticipants[index] = {
            eventid: activeEvent,
            userid: user
        };
        openEvent(activeEvent);
        console.log("adding");
    }
    xhttp.send();
}
function loadUserPosts() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        var postsHTML = document.getElementById("posts");
        var postListing = "<h2> posts </h2>";
        for (i in posts) {
            var authorid = posts[i].userId;
            if (viewingUser == authorid) {
                var singlePost = `<div class="single-post"><div class="post-author"><img class="avatar" src="${users[authorid].picture}">
                <a href="${pageUrl + hash + router.lastRouteResolved().url}">${users[authorid].firstName + " " + users[authorid].lastName}</a>`;
                if (posts[i].groupId != -1) singlePost += `>><a href = "${pageUrl + hash + "group/" + posts[i].groupId}">
                ${groups[posts[i].groupId].groupName}</a>`;

                singlePost += `<div class="post-date">${posts[i].date} </div></div><hr>
                <div class="post-content">${posts[i].content} <div class="comments-button">
                <a class="open-story-modal" href = "${pageUrl + hash + router.lastRouteResolved().url + "/post/" + i}">
                view comments</a></div></div></div>`;
                console.log(pageUrl + hash + router.lastRouteResolved().url + "/post/" + i);
                postListing += singlePost;
            }
        }
        postsHTML.innerHTML = postListing;

    }
    xhttp.send();
}

function loadAddFriend() {
    var button = document.getElementById("add-friend");

    if (userid == viewingUser) {
        button.innerHTML = "edit bio";
        button.onclick = function () {
            openEditMenu();
        }
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", API, true);
        xhttp.onload = function () {
            var userFriends = friends[userid].friends;
            console.log(userFriends);
            console.log(viewingUser);
            var isFriend = userFriends.includes(Number(viewingUser));
            if (isFriend) {
                button.innerHTML = 'friends';
                button.disabled = true;
                console.log("friends");
            } else {
                var requestSent = false;
                var requestRecieved = false;
                var reqId;
                for (i in friendRequests) {
                    if (friendRequests[i].from == userid && friendRequests[i].to == viewingUser) requestSent = true;
                    if (friendRequests[i].to == userid && friendRequests[i].from == viewingUser) {
                        requestRecieved = true;
                        reqId = friendRequests[i].reqId;
                    }
                }
                if (requestSent) {
                    console.log("requestSent");
                    button.innerHTML = 'request sent';
                    button.disabled = true;
                } else if (requestRecieved) {
                    console.log("requestRecieved");
                    button.innerHTML = 'accept friend request';
                    button.onclick = function () {
                        acceptRequest(reqId);
                        button.innerHTML = 'friends';
                        button.disabled = true;
                    }
                } else {
                    button.innerHTML = "add friend";
                    button.onclick = function () {
                        sendRequest(viewingUser);
                        button.innerHTML = 'request sent';
                        button.disabled = true;
                    }
                }
            }
        }
        xhttp.send();
    }
}
function loadBio() {
    var bio = document.getElementById("bio");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        bio.innerHTML = users[viewingUser].bio;
    }
    xhttp.send();
}
window.onclick = function (event) {
    var reqModal = document.getElementById("friend-requests-modal");
    if (event.target == reqModal) {
        reqModal.style.display = "none";
    }
}
function openEditMenu() {
    var bio = document.getElementById("bio");
    bio.innerHTML = `<input id = "editBio"></input><button id = "saveBio">save </buton>`;
    var field = document.getElementById("editBio");
    var button = document.getElementById("saveBio");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);
    xhttp.onload = function () {
        field.value = users[userid].bio
        button.onclick = function () {
            users[userid].bio = field.value;
            loadBio();
        }
    }
    xhttp.send();
}
function loadProfile() {
    var image = document.getElementById("profile-photo-big");
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", API, true);

    var name = document.getElementById("fullname");
    xhttp.onload = function () {
        image.src = users[viewingUser].picture;
        name.innerHTML = users[viewingUser].firstName + " " + users[viewingUser].lastName;
    }
    xhttp.send();
    image.onclick = function () {
        var imgUpload = document.getElementById("image-upload");

        imgUpload.click();
        imgUpload.addEventListener('change', function () {

            var singleFile = imgUpload.files[0];
            console.log(URL.createObjectURL(singleFile));
        });
    }

}
function initRegistration() {

    var button = document.getElementById("signup");





    button.onclick = function () {
        var email = document.getElementById("email-signup").value;
        var fName = document.getElementById("firstname").value;
        var lName = document.getElementById("lastname").value;
        var password = document.getElementById("password-signup").value;
        if (email == "" || fName == "" || lName == "" || password == "") {
            document.getElementById("message-signup").innerHTML = "please fill all fields";
        } else {

            var index = users.length;

            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", API, true);
            xhttp.onload = function () {
                if (emailInUse(email)) {
                    document.getElementById("message-signup").innerHTML = "email is already in use";
                } else {
                    users[index] = {
                        id: index,
                        firstName: fName,
                        lastName: lName,
                        picture: "images/default-profile.png",
                        bio: "the user has not updated his bio",
                        email: email,
                        password: password
                    }
                    userid = index;
                    friends[friends.length] = {
                        userid: userid,
                        friends: []
                    }
                    localStorage.setItem("userid", userid);
                    router.navigate("home", false);

                }
            }
            xhttp.send();
        }
    }


}
function emailInUse(email) {
    var inUse = false;
    for (i in users) {
        if (users[i].email == email) inUse = true;
    }
    return inUse;
}
},{"../components/comments-modal":1,"../components/events":3,"../components/events-modal":2,"../components/friend-requests-modal":4,"../components/group":5,"../components/groups":6,"../components/home":7,"../components/story-modal":8,"../components/top-bar":9,"../components/user":10,"../components/welcome":11,"../data/comments":12,"../data/eventParticipants":13,"../data/events":14,"../data/friendRequests":15,"../data/friends":16,"../data/groupMembers":17,"../data/groups":18,"../data/posts":19,"../data/stories":20,"../data/users":21,"navigo":22}]},{},[23]);
