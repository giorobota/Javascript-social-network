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
var requestsModal = `<div class="friend-requests-modal" id="friend-requests-modal">
<div class="friend-requests-modal-content">
    <h2> friend requests </h2>
    <div id="friend-requests-listing"></div>
</div>
</div>`;
module.exports = requestsModal;
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
var home = `<div class="main-content">
<div class="left-section" id="navigation">
    <!-- list navigation if works -->
</div>
<div class="middle-section">
    <div class="create-post">
        <h3> add a comment </h3>
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
},{}],6:[function(require,module,exports){
var storyModal = `<div id="story-modal" class="story-modal">
<div class="story-modal-content">
    <img src="images/story-image.png">
</div>
</div>`;
module.exports = storyModal;
},{}],7:[function(require,module,exports){
var topBar = `<div class="top-bar">
<img id="logo" src="images/logo.jpg">
<div class="search">
    find people: <input type="text" name="firstname">

    <input type="submit" value="search" id="search">
</div>
<div class="active-profile">
    <img id="friend-requests" src="images/friend-requests.jpg">
    <img id = "logout" src="images/logout.png">
    <div id="active-profile"></div>
    
</div>
</div>`

module.exports = topBar;


},{}],8:[function(require,module,exports){
var welcome = `<div class = "welcome">
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
</div>
</div>`;
module.exports = welcome;

},{}],9:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Navigo=t()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});


},{}],10:[function(require,module,exports){
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
var router;
var userid;
var groupid;
var activePost;
var templates = {};
var map;

function initRouter() {


    var Navigo = require("navigo");
    var root = null;
    var useHash = true;
    var hash = '#!';
    router = new Navigo(root, useHash, hash);
    router.on({
        'welcome': function () {
            showWelcomePage();
        },

        'home': function (params) {
            showHomePage();

        },
        '': function () {
            showWelcomePage();
        },
        'home/story/:id': function (params) {
            showHomePage();
            //show story
        },
        'home/post/:id': function (params) {
            showHomePage();
            //show post
            openComments(params.id);
        },
        'groups': function () {
            //show groups

        },
        'group/:groupid/:postid': function (params) {
            

        },
        'group/:groupid': function (params) {


        },
        'events': function (params) {


        },
        'events/:id': function (params) {


        },
        'user/:id': function (params){
            console.log("visiting user " + params.id);
        }


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
}

function showHomePage() {
    loadPage('home');
    
    loadTopPanel();
    loadPublicPosts();
    loadFriendSuggestions();
    loadStories();
    loadFriendRequests();
    loadNavigation("home");
    initRequestsButton();
    initHomeButton();
    initStoryModal();
    initPostButtons();
}
function initPostButtons() {
    var postButton = document.getElementById("post-button");
    var commentCloseBtn = document.getElementById("close-comments-modal");
    var commentButton = document.getElementById("comment-button");
    commentCloseBtn.onclick = function () {
        commentModal = document.getElementById("comments-modal");
        commentModal.style.display = "none";
    }

    postButton.onclick = function () {
        addPost(groupid);
    }

    commentButton.onclick = function () {
        addComment();
    }
}
function initStoryModal() {
    var storyModal = document.getElementById("story-modal");
    storyModal.addEventListener("click", function () {
        storyModal.style.display = "none";
    });
}
function initHomeButton() {
    var homeBtn = document.getElementById("logo");
    homeBtn.onclick = function () {
        router.navigate('home');
    }
    var logoutBtn = document.getElementById("logout");
    logoutBtn.onclick = function () {
        userid = -1;
        router.navigate("welcome");
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
    navigation.innerHTML = '<ul><li><a id = "homeNav" href="home" data-navigo>Home</a></li><li>' +
        '<a href="groups" id = "groupsNav" data-navigo>Groups</a></li><li><a href="events" id = "eventsNav" data-navigo>Events</a></li></ul></div>';
    switch (activePage) {
        case "home": document.getElementById("homeNav").className = "active";
            break;

        case "groups": document.getElementById("groupsNav").className = "active";
            break;
        case "events": document.getElementById("eventsNav").className = "active";
            break;
    }

}
function showWelcomePage() {
    loadPage("welcome");

    var passwordField = document.getElementById("password");
    var emailField = document.getElementById("email");
    var loginBtn = document.getElementById("login");
    var loginMsg = document.getElementById("message");
    loginBtn.addEventListener("click", function () {

        for (var user in users) {
            if (users[user].email == emailField.value && users[user].password == passwordField.value) {
                userid = Number(user, 10);
                console.log(user);
                console.log(userid);
                router.navigate("home");
                return;
            }
        }
        loginMsg.innerHTML = "incorrect username or password";
    });

    var signupBtn = document.getElementById("signup");
    signupBtn.onclick = function () {
        //add new user to database
    }
}



function declineRequest(reqId) {
    friendRequests[reqId].from = -1;
    friendRequests[reqId].to = -1;
    //reload friend requests
    console.log("declined");
    loadFriendRequests();

}

function acceptRequest(reqId) {
    friends[friendRequests[reqId].from].friends.push(friendRequests[reqId].to);
    friends[friendRequests[reqId].to].friends.push(friendRequests[reqId].from);
    friendRequests[reqId].from = -1;
    friendRequests[reqId].to = -1;
    console.log("accepted");
    loadFriendRequests();
}

function loadFriendRequests() {
    var requestsHTML = document.getElementById("friend-requests-listing");
    var requestsListing = "";
    for (i in friendRequests) {

        if (friendRequests[i].to == userid) {
            requestsListing = '<div class="single-friend-request"><a href="user.html?userid=' + friendRequests[i].from + '&activeUer=' + userid +
                '">' + users[friendRequests[i].from].firstName + " " + users[friendRequests[i].from].lastName +
                '</a><button class="decline-request" onclick = "declineRequest(' + friendRequests[i].reqId + ')">decline</button>' +
                '<button class="confirm-request" onclick = "acceptRequest(' + friendRequests[i].reqId + ')">confirm</button></div>' + requestsListing;
        }
    }
    requestsHTML.innerHTML = requestsListing;
}

function loadStories() {
    var storyHTML = document.getElementById("story-listing");
    var storyListing = "";
    for (i in stories) {
        var author = stories[i].userid;
        //display only friends' stories and his
        if (friends[userid].friends.includes(author) || author == userid) {
            storyListing = '<div class="single-story"><div class="post-author"><img class="avatar" src="' + users[author].picture +
                '"><button class="open-story-modal"  onclick = "openStory(' + i + ')">' +
                users[author].firstName + " " + users[author].lastName + '</button></div></div>' + storyListing;
        }
    }
    storyHTML.innerHTML = storyListing;
}

function loadPublicPosts() {
    var postsHTML = document.getElementById("posts");
    var postListing = "";
    var userFriends = friends[userid].friends;
    
    for (i in posts) {

        var authorid = posts[i].userId;
        if (posts[i].groupId == -1 && (userFriends.includes(authorid) || userid == authorid)) {
            // postListing = '<div class="single-post"><div class="post-author"><img class="avatar" src="' +
            //     users[authorid].picture + '"><a href="user.html?userid=' + authorid + '&activeUer=' + userid + '">' +
            //     users[authorid].firstName + " " + users[authorid].lastName + '</a><div class="post-date">' +
            //     posts[i].date + '</div></div><hr><div class="post-content">' + posts[i].content +
            //     '<div class="comments-button"><button class="open-story-modal" onclick="test()">' +
            //     'view comments</button></div></div></div>' + postListing;

                postListing =`<div class="single-post">
                                    <div class="post-author">
                                        <img class="avatar" src="${users[authorid].picture}">
                                        <a href="${"user/" + authorid}" data-navigo> ${users[authorid].firstName + " " + users[authorid].lastName}</a>
                                        <div class="post-date">
                                            ${posts[i].date}
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="post-content">${posts[i].content}
                                        <div class="comments-button">
                                            <button class="open-story-modal" id="${i}">view comments</button>
                                        </div>
                                    </div>
                                </div>` + postListing;

        }
    }
    postsHTML.innerHTML = postListing;
    var buttons = document.getElementsByClassName("open-story-modal");
    for(i in buttons){
        buttons[i].onclick = function(){
            openComments(buttons[i].id);
        }
    }
}



function openComments(currentPostId) {
    activePost = Number(currentPostId, 10);
    console.log("opening comments");
    var commentHTML = document.getElementById("comments-listing");
    activePost = currentPostId;
    var commentsListing = "";
    for (i in comments) {
        var authorid = comments[i].userid;
        if (comments[i].postid == currentPostId) {
            commentsListing = '<div class="single-post"><div class="post-author"><img class="avatar" src="' + users[authorid].picture +
                '"><a href="user.html?userid=' + authorid + '&activeUser=' + userid + '">' + users[authorid].firstName + " " + users[authorid].lastName +
                '</a><div class="post-date">' + comments[i].date + '</div></div><hr><div class="post-content">' + comments[i].content +
                '   </div></div>' + commentsListing;
            console.log(comments[i]);
        }


    }
    var commentModal = document.getElementById("comments-modal");
    commentHTML.innerHTML = commentsListing;
    commentModal.style.display = "block";
}

function addComment() {
    var commentContent = document.getElementById("comment-content");
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

function getDateNow() {
    var date = new Date();
    return + date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
}

function addPost(currentGroupId) {
    var postContent = document.getElementById("post-content");
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

        loadPublicPosts();
    }
}

function openStory(currentStoryId) {
    storymodal = document.getElementById("story-modal");
    storyModal.innerHTML = '<div class="story-modal-content"><img src="' + stories[currentStoryId].url + '"></div>';
    storyModal.style.display = "block";
}

function loadFriendSuggestions() {
    var suggestionsHTML = document.getElementById("friend-suggestion-listing");
    var suggestionListing = "";
    for (var i = 0; i < 3; i++) {
        if (i != userid) {
            suggestionListing = '<div class="single-friend-suggestion"><div class="post-author"><img class="avatar" src="' +
                users[i].picture + '"><a href="user.html?userid=' + users[i].id + '&activeUer=' + userid + '">' + users[i].firstName + " " +
                users[i].lastName + '</a><button class="confirm-request" onclick = "sendRequest(' + users[i].id +
                ')">add</button></div></div>' + suggestionListing;
        }
        console.log(users[i]);
    }
    suggestionsHTML.innerHTML = suggestionListing;
}

function sendRequest(requestUserId) {
    var index = friendRequests.length;
    friendRequests[index].from = userid;
    friendRequests[index].to = requestUserId;
    friendRequests[index].reqId = index;
    console.log(friendRequests[index]);
}
function loadTopPanel() {
    //will need to test <a> link
    console.log(userid);
    var activeProfile = document.getElementById("active-profile");
    activeProfile.innerHTML = '<img class="avatar" src="'
        + users[userid].picture + '"><div id="username"><a href="user/' + userid +'" data-navigo>'
        + users[userid].firstName + '</a></div>';
}

function loadGroups() {
    var res = "";
    var suggestions = "";
    for (var group in groups) {
        //will need to fix url later after adding user database
        res += '<div class="single-event"><div class="event-author"><h2><a class="event-name" href="group.html?groupid=' + groups[group].groupId +
            "&userid=" + userid + '">' + groups[group].groupName + '</a></h2></div><hr><div class="event-content">' + groups[group].description + "</div></div>";
        suggestions += '<div class="single-event-suggestion"></div><h3><a href="group.html?groupid=' + groups[group].groupId + "&userid=" + userid + '">' +
            groups[group].groupName + "</a> </h3></div>";
        if (group <= 3) groupSuggestions.innerHTML = suggestions;
    }
    groupList.innerHTML = res;
}

function loadPage(pageName) {
    var currPage = document.getElementById("routing-component");
    switch (pageName) {
        case "welcome": currPage.innerHTML = templates.welcome;
            break;
        case "home":
            currPage.innerHTML = templates.topBar + templates.home + templates.commentModal + templates.requestsModal +
                templates.commentModal + templates.storyModal;
            break;
        case "groups":
            break;
    }
}




},{"../components/comments-modal":1,"../components/friend-requests-modal":2,"../components/group":3,"../components/groups":4,"../components/home":5,"../components/story-modal":6,"../components/top-bar":7,"../components/welcome":8,"navigo":9}]},{},[10]);
