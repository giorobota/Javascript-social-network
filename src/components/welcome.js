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
